---
layout: page
title: ホーム
---

このサイトでは、以下のコンテンツを提供しています：

- [プロフィール]({{ '/about' | relative_url }})
- [作ったもの]({{ '/works' | relative_url }})
- [ブログ](./blog/)

## 最近の記事(ブログ)

<div class="post-list">
  {% for post in site.posts limit:5 %}
    <div class="post-item">
      <h3>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </h3>
      <span class="post-date">{{ post.date | date: "%Y年%m月%d日" }}</span>
    </div>
  {% endfor %}
</div>

<p class="view-all">
  <a href="/blog/" class="view-all-link">全ての記事を見る</a>
</p> 