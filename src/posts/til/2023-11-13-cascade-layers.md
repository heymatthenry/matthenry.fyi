---
tags: ['post','til','css']
title: "Cascade layers are real and they're spectacular"
date: 2023-11-13
---

Are you sick and tired of fighting specificity in your CSS selectors? Have you ever wished you could tell the browser: "hey, my components' styles should take precedence over competing design system rules"? Well friend, do I have news for you. [Cascade layers](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers) are here, and they basically let you do just that. 

I knew these were a thing, but hadn't had occasion to really do anything with them yet. Then layers came up on the most recent episode of [Shoptalk](https://shoptalkshow.com/591/), and since I have a web project in progress *right now* (this. It's this website), I thought "ok let's do this."

The layers usage here is pretty simple, which oughtn't surprise, given that it's a simple site, but I think it still shows some of what the feature can do. All I'm doing is putting the third-party styles (in this case, normalize.css) in its own layer, and my styles in a layer on top. Even here you can see the utility: if I'm overriding something in the third party styles, I can stack (pun not intended) the deck in my styles' favor without having to arbitrarily increase the specificity. And if I wanted to add another 3rd-party library, like OpenProps or something, I could give that its own layer between the reset and my stuff.

```css
@layer normalize, mh;
@import 'normalize.css' layer(normalize); 
@layer mh {
	/* ...all of my other CSS goes here */
}
```
