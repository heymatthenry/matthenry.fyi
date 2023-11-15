---
title: FYI
layout: home.njk
---

{%- for post in collections.post -%}
	<article>
	  <h1>
		  {%- if 'til' in post.tags -%}
			<abbr title="Today I learned">TIL</abbr> 
		  {%- endif -%}
		  {{ post.data.title }}
	  </h1>
	  <time datetime="{{ post.date | timestamp }}">{{ post.date | postDate }}</time>
	  {{ post.content }}
	</article>
{%- endfor -%}
