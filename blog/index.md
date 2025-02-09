---
layout: blog
title: ブログ記事一覧
permalink: /blog/
---

<div class="post-list">
  {% for post in site.posts %}
    <div class="post-item">
      <h3>
        <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
      </h3>
      <span class="post-date">{{ post.date | date: "%Y年%m月%d日" }}</span>
    </div>
  {% endfor %}
</div> 