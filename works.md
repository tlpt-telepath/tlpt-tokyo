---
layout: page
title: 作ったもの
permalink: /works/
---

<div class="works-list">
  {% for work in site.works %}
    <div class="work-item">
      <h3>
        <a href="{{ work.url }}">{{ work.title }}</a>
      </h3>
      {% if work.description %}
        <p class="work-description">{{ work.description }}</p>
      {% endif %}
      <span class="work-date">{{ work.date | date: "%Y年%m月" }}</span>
    </div>
  {% endfor %}
</div> 