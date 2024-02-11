---
tags: ['post','til','vim','markdown']
title: "Jumping around in vim"
date: 2024-01-21
---

I always knew that `<C-o>` would let you jump back to the previous cursor position, even if it was in another file. (And when I say always, I mean always. Like Meno always knew geometry.) While I was backtracking around with `<C-o>` today, it occurred to me that there must be a way to jump forwards again, and of course there is. It's `<C-i>`. The one right next to `o` on my keyboard.

### Bonus tip

I didn't learn this *today*, but it's still a good tip: similarly to `<C-o>` and `<C-i>`, you can jump to the last-edited line with `'.`, and the last-edited part of the last-edited line with `` `. `` These marks are built into vim. But that's not the tip. The tip is that if you use [which-key](https://github.com/folke/which-key.nvim), which-key ships with plugins to display the current contents of your marks and registers when you hit `'` or `"`, respectively. Marks and registers were both things I always meant to use more frequently, and this has helped me get there.

### Lol ok another bonus

Ok this i really did also learn today--mere moments ago, in fact. If you want to escape a backtick in a markdown inline code block, use double backticks with space around them, like so:

```
`` `. ``
```
