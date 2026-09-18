---
tags: ['post']
title: USWDS is dead. Long live USWDS.
date: 2026-09-18
description: Some observations on a fast-moving calamity
---

*tl;dr: the US Web Design System has been functionally taken over by DOGE or a DOGE-aligned group. Its code and community are now being run by AI, and its current form does not deserve the hard-earned trust USWDS built over its first 10 years. Efforts are underway to preserve the pre-AI state, and hopefully to continue development of this critical digital public infrastructure.*

This week, the last remaining member of the USWDS team was forced out of their role, and a new AI engineer replaced them. Since then, that person, armed with a cadre of AI tools, quickly undertook to reshape the entire system.

This is a rapidly developing situation, and my thoughts aren't as organized as I'd like (though putting them here is, in part, a way to fix that). I apologize up front if any of this isn't fully baked. But what follows is a recap of how we got here, my assessment of the current state of things, and finally a brief look ahead.

### A short history of how we got here

Here's a quick(-ish) rundown of the recent history of USWDS as I experienced it. I'm speaking for myself here and any errors or omissions are due to my own addled brain.

During the presidential transition in January 2025, a broad communications moratorium was imposed. That meant that the USWDS team was unable to say much (or anything, really) about the changes to come. However, work continued more-or-less as usual, albeit with increasingly bad vibes and fraying nerves.

Shortly after that (late February/early March), GSA ended its contract with the vendor that provided most of the staff for the USWDS team. These were the people who did most of the day-to-day work building and maintaining USWDS, as well as supporting the community of users. USWDS went from a team of about 12 to a team of four, all of whom were feds. Within a month, the fed team was down to two: our design lead who then became product lead, and me.

Obviously these drastic changes to the team composition necessitated drastic changes to the product roadmap. At that point, we effectively abandoned the big plans we had at the end of 2024, and shifted to a maintenance mode, where we mostly just kept the lights on. (We did ship a release in that time, including USWDS's first web component, designed to coincide with the rollout of the Federal Website Standards, but that's another story for another blog post.)

In August of 2025, Trump signed the [Executive Order creating the National Design Studio](https://www.whitehouse.gov/presidential-actions/2025/08/improving-our-nation-through-better-design/). Ostensibly this EO required NDS to work with USWDS, but NDS's early output fully ignored not just USWDS, but also the [basics of making a halfway decent website](https://www.washingtonsun.com/trump-white-house/silicon-valley-government-websites-national-design-studio). 

Around this time, Technology Transformation Service, the part of GSA that houses USWDS, was about to undergo a reorganization. The rumor was that the reorg would put USWDS closer to Cloud.gov. We were excited about the possibility of better support, and started collaborating with our Cloud colleagues on an informal basis. In light of the anticipated changes, the USWDS team switched gears again to start reimagining how USWDS could integrate with Cloud. It was actually exciting, and it was the first time since the carnage at the start of the year that it seemed like USWDS had a path forward.

That hope proved illusory. The reorg didn't happen as planned, and despite my being engineering lead for USWDS, I was detailed to a DOGE project in an entirely separate part of GSA. Then the shutdown happened, during which I was furloughed for a while before being reclassified as essential and brought back. The product lead remained furloughed for the duration of the shutdown. 

In November of 2025, I left GSA shortly after returning from furlough, so from then on I can't say first-hand what was going on inside TTS. But USWDS did get some limited engineering support, and was even given some unofficial indication that NDS was going to leave the project alone. By Spring of this year, USWDS created clearer pathways for open source community contributions (I got to be the first non-fed maintainer, which meant a lot to me). Things looked like they were stabilizing as well as they could under the circumstances.

Then in August, USWDS's product lead and only full-time team member (Fed or otherwise) was placed on administrative leave by TTS's new director, Sam Corcos. A couple weeks later, all of the open source contributors and maintainers were booted out of the repo, the product lead was "officially" ousted ([fired by diff](https://github.com/uswds/uswds/commit/c11d2ad42fd8d2c8dcdacee931fbac78f214e6ef#diff-393e4aae2d355a937ead0caae1b909035a5c2901edd0554036d482aac053ad7dL17)), [corcos installed Ryan Parker as USWDS Lead](https://www.nextgov.com/people/2026/09/gsas-web-design-system-head-replaced-treasury-ai-engineer/416035/?oref=ng-skybox-hp).

### USWDS enters its slop era

It wasn't immediately clear what Corcos and Parker intended to do with USWDS. My assumption was that they'd simply replace it with a shadcn theme, as that had been the rumored approach in the early NDS days. Instead, Parker threw AI at every corner of the project. It started small with a [pull request to add automated PR reviews](https://github.com/uswds/uswds/pull/6920), but then took off at AI scale. Some highlights of the AI takeover of USWDS:

- The [project discussion board](https://github.com/uswds/uswds/discussions) has been flooded with AI-generated posts. This includes new posts, as well as AI-generated responses to old posts.
- Old PRs and issues were closed *en masse* with pro forma legalistic AI-generated responses.
- Many new PRs, including several with breaking changes, appeared at a rapid non-human-reviewable pace.
- Machine-generated architectural decision records were being created (some based on my own half-baked germs of ideas I'd left on the project board). Presumably these ADRs, once approved (approved by whom? Ryan? Sam? CodeRabbit? Claude?), would then be fed back into AI to generate the implementation and complete the machine ouroubouros.

Because these changes all took place over the course of about 24 hours, and are continuing at the same breakneck pace, it's been challenging to follow along with them. But having mentioned just a few of them, a few trends are already emerging:

**AI is making changes faster than humans can meaningfully track.** USWDS has always moved slowly, even to the point where it could fairly be criticized for it. But faster doesn't necessarily mean better. New features need to be thoroughly tested before they're rolled out to unsuspecting (and risk-averse) .gov sites. If a change could have accessibility implications, it needs to be vetted by expert testing, and ideally validated with real assistive technology users. Obviously none of that is happening when a bot submits two dozen PRs overnight.

**AI is crowding out real human community discussion.** When every open PR, issue, or discussion thread gets updated at once, it makes it impossible to follow for anyone inclined to do so. If someone is inclined to try, they'll be rewarded with walls of brain-numbing machine prose.

**Relying on AI to direct and implement the work shifts the risk and responsibility of testing onto the community of human users.** For just one example, look at [this comment](https://github.com/uswds/uswds/discussions/5771#discussioncomment-18493270) (emphasis mine):

> Before selecting an implementation, we should establish the user need and how definitions would be discoverable and operable with keyboard, touch, zoom, and screen readers. *Please share examples or findings here, including cases where an inline definition works better than a glossary page.* No tooltip design or delivery date has been selected, and closing the parallel issue does not mean the need is resolved.

While USWDS has always benefited from the user community submitting use cases for particular components or other changes to the system, the team was ultimately responsible for testing and creating "findings." Even in a world where AI is used in conducting user research, AI doesn't *itself* conduct user research. A comment like this shows that nu-SWDS (if I can coin that), like so many other AI-first projects, has to be built on top of of human work (willingly or not). With just one human on the team, it's up to you now to do the work to make sure a change is good or functional or accessible. If you're on a small federal team, probably made even smaller in the DOGE era, you can't do that even if you could've before. This is worse than useless.

**Humans are not in the loop.** [This PR](https://github.com/uswds/uswds/pull/6956/), adding a machine-written ADR, presumably to be implemented by a machine as well, came from [this germ of an idea](https://github.com/uswds/uswds/issues/6516) I created an issue stub for last year. The PR is closed now, but for a couple of hours until the bots did a bit of a rethink, it appeared the AI was going to one-shot a product decision for itself based on one random sentence I tossed off with no further support. I just happened to see this one because of my involvement with it, but what other examples are in there where the PR machine continues to go brrrrr? 

There are more examples, and I'm sure more big picture takeaways here, but I believe this gives a sense of how quickly things have deteriorated.

### So now what?

No one should use nu-SWDS. Or at least, if you choose to use it, you should understand that it is no longer the project it used to be, and you will not have the same assurance of accessibility or usability that you used to have. It won't have been tested with real users, and it won't have been battle-tested on thousands of .gov sites. If I can repurpose a line I used on bluesky, it's the private equity husk of USWDS.

If you want to continue using USWDS, the pre-slop code is all available on [Codeberg](https://codeberg.org/uswds) (npm release TK). An archived version of [the documentation site](https://uswds.18f.org) is up on the 18f.org domain.

A group of USWDS users, civic technologists, and fellow travelers are working on standing up an organization to ensure this critical infrastructure remains available. That effort is very much a work in progress, so I won't say more about it at this time, but stay tuned.

USWDS is dead. Long live USWDS.
