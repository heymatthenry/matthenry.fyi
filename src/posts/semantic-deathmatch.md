---
tags: ['post']
title: List vs heading semantics deathmatch
date: 2026-04-10
description: A bit of a dive into assistive technology specs
---

Welcome to fight night. In one corner, we have list semantics. In the other, we have headings. Only one can survive.

Ok maybe that's overly dramatic, but I wanted to get your attention before embarking on a deep-ish dive into accessibility APIs and the specs that they implement.

### The problem

I'm working on a new accordion component, based on the [US Web Design System's implementation](https://designsystem.digital.gov/components/accordion/). Some key design details that make USWDS's component work the way it does:

1. The interactive, focusable parts of the component that are always visible, and that control the open/close behavior of the accordion sections, are headings that contain buttons. The buttons are critical because they drive the interactivity. The headings are important because they provide the main structure for the component in the accessibility tree.
2. It uses JavaScript to actually control the open/close behavior. This creates a couple of constraints on the use of the component. For one thing, obviously it means that it won't work without JavaScript. Depending on how it's set up, this means that content might not be available when JavaScript isn't. Obviously that's not a dealbreaker for a lot of teams and products (if the content is critical, it probably shouldn't be stuffed inside an accordion in the first place), but it's something to consider. It also means that there needs to be some ARIA to give the browser some hints about what bits of the component are associated with each other, and that helps drive the interactivity. Again, this shouldn't be a dealbreaker for most teams, most of the time, but it does add some complexity that component consumers have to navigate, and it's a potential source of breakage.

The implementation I'm working on is visually similar to USWDS's, but with a couple of key differences under the hood. The main one is that it doesn't require JavaScript to function. The `<ogds-accordion>` wraps one or more `<details>` and `<summary>` elements, and the open/close functionality comes from the `details`, so the browser handles that whether or not JavaScript runs. The JS is mainly used for progressive enhancement, and only affects the presentation of the component (visually, but also for assistive technology users, as we're about to see).

A comment on the issue that describes the need for this component suggested that it might be useful to implement list semantics on it. This makes sense. The accordion groups related content, and it's not unreasonable to imagine that exposing that relationship to accessibility APIs would give assistive technology users a way to leverage that relationship. 

Unfortunately, this is where things get difficult. My implementation lets the component consumer add a `heading-level=<Number>` attribute to the component to add heading semantics to each `summary` element, and to set the right numerical level for the page's content hierarchy. This makes it easy to match the heading semantics of the USWDS implementation while keeping the markup simple. In order to get the list semantics, I also implemented a `use-list-semantics` attribute that adds a `role="list"` to the accordion container and `role=listitem` to its direct children (each `details` element). The problem is what happens when both are enabled.

With a list, whether it's a plain HTML `ul` or `ol`, or as here, a collection with list semantics added via ARIA, a screen reader will announce that it has encountered a list with the number of items. As the user traverses the list, the screen reader should announce the current position in the list (i.e. "4 of 5 items"). Screen readers also provide additional ways for users to find lists and navigate their contents. This turns out to be part of why this is all more complicated than it might appear at first blush.

Similarly, when a screen reader encounters a heading, it will announce it as "heading level X: my useful heading text," or whatever. Part of what headings do for users, whether they're reading the page visually or through assistive technology, is to establish the hierarchy for the content. As with lists, assistive tech also gives users ways to navigate the page through this hierarchy.

The problem occurs when both of these attributes are present on the component. When testing it in Safari + VoiceOver, it will be correctly announced as a list with X items. However, upon entering the list and encountering the first `summary` element with heading semantics, VoiceOver will stop behaving as if it is in a list. It will announce the headings, but it won't keep track of or announce the current position in the list ("item X of Y").

But why?

### The spec

As it turns out, I think there's an issue in the spec that causes this ambiguity. First, is that the [relevant spec (Core-AAM)](https://www.w3.org/TR/core-aam-1.2/#mapping_additional_position) only describes how to calculate which accessibility tree nodes are related to each other, their order, and the current position in the list: 

> If aria-posinset and aria-setsize are not provided, user agents MUST compute them as follows: ... if the role supports aria-posinset and aria-setsize, process the parent (DOM parent or parent defined by aria-owns), counting items that have the *same role*. (Emphasis added)

What remains unspecified is what to do when, as here, the items have multiple semantic types with one nested in another (e.g. headings within list items). When a user navigates by heading, should the AT also surface the ancestor list item's position? Which semantic context should take precedence? Can both be conveyed together, or does one simply displace the other? In this case, the heading context clobbers the list position context entirely.

Maybe it's not fair to say that there's an "issue" in the spec, but there is at least a limitation on what the spec, you know, specifies.

### My solution

Given that it appears that assistive tech can only present one of these navigation paradigms at once, we can help the AT out by only giving it one paradigm at at time. At the component level, of course we can check that only one of the controlling attributes is present and throw an error if both are there. But the real solution is to document clearly why only one of these paradigms *should* be used at one time and provide clear guidance on which interaction patterns should leverage headings and which should leverage lists. For example, if the accordion is used to break up a large page into more digestible chunks of content, that's a good use for headings. If there wasn't an accordion, that's what you'd do anyway. You'd use headings.

Conversely, if you have a set of concise FAQs, maybe that's a place where it could make sense to use a listy accordion (yes I know FAQs are an anti-pattern but I also know we have often to build them anyway).

## Wrapping up

I think this either/or scenario is probably the way to go, but of course any time you have to rely on documentation to do the heavy lifting of ensuring that people use components as intended, you can only be as clear as possible and hope for the best. There are tooling-related ways to buttress the documentation, but at the end of the day, this is a human-facing problem with human-facing solutions. On the bright side, any day you get to dig into specs at work is a good day, right?
