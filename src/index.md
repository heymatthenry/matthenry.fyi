---
title: FYI
layout: home.njk
---

<header>
	<div class="site-title">
		MH, FYI
	</div>
</header>

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

<!-- <article> -->
<!--   <h1><abbr title="Today I learned">TIL</abbr> A post title</h1> -->
<!--   <time datetime="2023-11-12">11 Nov 2023</time> -->

<!--   <p>Pellentesque condimentum sed dolor sit amet pharetra. Curabitur sollicitudin orci eget eleifend aliquet. Nam molestie dui neque, placerat rutrum erat consectetur vitae. Sed congue odio ut lorem posuere feugiat. <a href="#">Aliquam sed venenatis nibh</a>, eu pharetra ex. Cras accumsan tortor eget massa dapibus, ut sollicitudin nisi gravida. Praesent eros ipsum, placerat non neque ut, blandit viverra dolor. Morbi aliquet faucibus ligula, sit amet tempor ipsum tempor a. Nunc convallis tellus a aliquam laoreet. Nullam vitae sodales dui. Aliquam in risus facilisis, varius tortor nec, iaculis neque.</p> -->
<!-- </article> -->
