---
tags: ['post']
title: The Best Project I've Ever Worked on
date: 2025-03-03
description: A love letter to cross-functional teams and learning from users
---
My favorite project that I've ever worked on is one from my early days at 18F. It's the one that really helped me *get* what the work was. I'm going to talk about everything I was lucky enough to work on on this project and some of the things I learned doing it. I'd love it if you took away some lessons about how great projects work, but I'd be lying if I said I didn't hope you'd read it and think about what a shame it is that the group who did this work no longer exists.

I won't name the partner for this project, and I'll leave out some details so as to not identify them. Given [everything](/posts/18f), I don't really want to call extra attention to 18F's partners, and honestly I don't chase down all of the things I would need to get permission to go into more detail. Besides, the work and methods I'll talk about here would've been employed on so many different projects with so many amazing agency partners.

### The background

This agency had a ton of data, going back over a century, scattered across multiple databases, in multiple formats, with multiple schemas. They needed to consolidate these in some way in order to make those data usable. In addition to the data wrangling, they also needed a new frontend to give their users access to those data. Naturally, with all of those data on the backend, and a new frontend in the works, they also needed an API to get data back & forth.

In addition to the technical challenges, this agency served a huge variety of users, including research scientists, internal customers, and members of the public who used the data for recreational purposes. Whatever solutions the agency deployed would need to serve these vastly different users and use cases.

### The team

The team from 18F included a backend dev, a strategist, a visual designer/user researcher, and yours truly as the frontend dev. The backend dev and strategist also shared project lead responsibilities. On the partner side, we worked regularly with the product owners as well as two engineers. Since this was one of my first projects at 18F, it was also one of my first experiences working closely with career feds.

One of the first things that made this project such a great experience was having such engaged and empowered product owners on the partner side. They participated in all of our standups and sprint ceremonies. If there was a blocker, they would hear about it immediately and help get unstuck. It also really helped build a sense of shared ownership of and responsibility for the success of the project. I'll talk a lot about secret sauce in this post, but I think if there's one thing that can make or break a consulting project, this is it: having an engaged and empowered product owner work as closely as possible with the team.

### The work

#### Backend

We had a good sample of a few data sources we were going to have to pool together, but not enough to make big conclusions about a schema for the whole system. Basically we had enough to start prototyping with. Our backend dev whipped up a simple Flask app as a first draft REST API. However, given the complexity of the data and the wide variety of queries the API would have to support, we wanted to test out alternative alternatives that might be more flexible, and landed on GraphQL. 

This was my first time working with GraphQL, and at the time I had what I called "podcast knowledge" of it, meaning I'd heard a lot about it on podcasts but didn't know much else. Since there were bigger questions about what we were going to do with all of the data–questions better-suited toward someone with real backend chops–I took point on adapting our Flask API to support GraphQL. It ended up being a pretty straightforward job of adding [graphene](https://graphene-python.org/) to the Flask app and wiring it to the existing endpoints. Out of the box, this gave us the [graphiQL in-browser interface](https://github.com/graphql/graphiql) to demonstrate the kinds of queries the API could support so we could get confident that it would be flexible enough to do what we needed, to do user research on the queries with technical users, and to continue to get buy-in from stakeholders. 

#### Frontend

The earliest designs were clickable wireframes, and these were what we used for the first user research sessions. At this point, I don't remember what tool they were built in (probably would've been Sketch or Adobe XD), but they were fairly low-fidelity. For user testing purposes, they were extremely path-dependent and so were very brittle. These artifacts were hard to test with and hard to iterate on, so we made the decision pretty early on to switch to a live in-browser prototype. I'd say this was another of those secret sauce decisions that really helped the project on the path to success (paths don't *typically* involve sauce but I'm leaving the mixed metaphor.

Once we made that decision, we had one last Sketch-based comp to get something slightly higher fidelity to work from, but the rest of the design happened in the browser, where the designer & I paired on everything. Having [a great design system](https://designsystem.digital.gov) as a starting point made this process *so much* easier. From this point on, all of the user research happened with a live prototype, talking to a real (prototype) API. After synthesizing each round of research, we could immediately iterate and fold updates right back into the prototype. The dream.

#### User research

I mentioned before that the product was going to need to support a huge variety of users with vastly different expectations for what data they would need and how they should be able to get it. Given that, it was important to get representatives from as many types of users as possible into our research interviews. Recreational users would need to be able to easily get hyperlocal data and see it in a way that would be understandable and meaningful to them. Expert users would need to be able to get all and only the data they need, ideally through UI-driven queries. In the event that the UI didn't do what a user needed, we could test queries in the graphiQL interface to see what they needed that we couldn't yet do. And finally, for those who needed it, we added in bulk download options that would let users get everything and crunch it as they saw fit in their own tooling.


Making something that worked for all of theses users required lots of interviews, and thuse required access to lots of users. This is one of those areas where having a product owner closely involved was critical. First, having someone at the partner agency who knew exactly what we needed was critical for recruiting the right research participants. And having someone with domain expertise in the interviews themselves helped us drill down into questions we hadn't necessarily anticipated exploring, and this expertise was also super helpful when it came time to synthesize the research.

### Takeaways

At the end of a few sprints, we had a great prototype of a new interface to this massive store of data. And we knew it would work really well for a wide range of users, because we'd asked a lot of them. All in all, this was about 90 days of work, and it helped the agency set a course for the next several years of development on this project. For me, it showed how much a small cross-functional team could do

* Find a product owner who can be a real part of your team, and get them as invlolved as you can.
* Get real, working code in front of users as soon as you can.
* Do as many interviews as you can with real users. Until you get something in front of users, you might have ideas about what can work, but you don't actually *know* anything.

As excited as I was to join 18F, I admit that before this project I didn't fully understand what was so great about 18F's methods. Once I saw these practices in action and the kinds of results they could bring about, not only did I get it, but honestly I wouldn't shut up about it. I preached this gospel with the zeal of the converted. Maybe most importantly, I spent the rest of my time at 18F trying to put these lessons into practice and doing what I could to help the org keep doing this critical work.

I'm grateful I got to work on this project, and a bunch more like it during my time at 18F. And while I'm sorry to end this post on a bummer note, revisiting this just drives home for me just what how much was lost when 18F was shuttered.

Also, if you want to learn more about these pracices so you can use them in your own work, the former 18F team rescued [all the 18F Guides](https://18f.org/guides/) and added them to 18F.org.
