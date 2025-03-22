---
tags: ['post']
title: Design System Notes, March 2025
description: Some observations on a couple of new (to me) design systems
date: 2025-03-22
---

It turns out that, at least for the time being, I work on a design system for a living. I also happen to really like working on them, so here I am (on the weekend!) blogging about some web component-based design systems I've come across recently.

[generic](https://genericcomponents.netlify.app/) is a cool idea in that it's a set of (mostly) unstyled components you can pull in and style however you like. And maybe you've heard that web components are hard to style because they use shadow DOM: well good news, friend, because generic's components are mostly light DOM. Where generic does use shadow DOM, it still exposes shadow parts or provides custom properties to make the component styleable (see the [`generic-radio`](https://genericcomponents.netlify.app/generic-radio/demo/) for an example with both).

What's great about leveraging light DOM so much is that, in addition to being easier to style, it's also more accessible and performant. The more content that goes into light DOM, the less work the custom element JS needs to do, the more content is available immediately, and less depends on JS executing at all. This jargony name for this architecture now is [HTML Web Components](https://adactio.com/journal/20618) (although generic predates this coinage by a couple of years), but the basic idea is just that you should leverage semantic HTML for as much of a web component's content and functionality as possible.

Another web component-based design system I've been looking at this week is [tyler forge](https://forge.tylerdev.io/main/?path=/docs/home--docs), by Tyler Technologies. It's not unstyled like generic. Its design is based on Material. It's also not shy about using shadow DOM. Different strokes, etc. What I like about it is its modularity. The way it does [theming](https://forge.tylerdev.io/main/?path=/docs/getting-started-theming--docs) by exposing custom properties and shadow parts is a lot like what I want to do with USWDS. It's also got [CSS-only components](https://forge.tylerdev.io/main/?path=/docs/getting-started-css-only-components--docs) that are, um, CSS-only. I think the thing that jumped out at me was the mixed Sass/CSS custom props codebase, which is what USWDS is likely to be for a long time. I'm not sure I have anything smart to say about tyler forge, but I wanted to jot down some observations while they're fresh in my mind. *extremely Marge Simpson voice* I just think it's neat.

One last thing: just going to drop this prototype accordion component here. I've been wanting to make something like this for USWDS (which is why the tag name here is `usa-accordion`). It's just an accordion made out of `details` and `summary` elements, and it's all light DOM, so the basic functionality will always work. The only thing the custom element adds is the `exclusive` prop which, if set to `true`, will add a unique `name` to all of the `details` child nodes, triggering the browser-native exclusive accordion behavior. Since the unique ID is generated per-component, multiple accordions won't interfere with each other.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="XWvqxBb" data-pen-title="Details Accordion" data-user="heymatthenry" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/heymatthenry/pen/XWvqxBb">
  Details Accordion</a> by Matt Henry (<a href="https://codepen.io/heymatthenry">@heymatthenry</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>