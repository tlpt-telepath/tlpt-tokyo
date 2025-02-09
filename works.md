---
layout: default
title: 作品
permalink: /works/
---

<h1>作品一覧</h1>

<div class="works-list">
  {% for work in site.works %}
    <article class="work-preview">
      <h2>
        <a href="{{ site.baseurl }}{{ work.url }}">{{ work.title }}</a>
      </h2>
      {% if work.description %}
        <p>{{ work.description }}</p>
      {% endif %}
    </article>
  {% endfor %}
</div> 