---
layout: page
title: Esben Kran
id: home
permalink: /
---

Welcome to the future — we're at a crossroads. We face an AI ban and a surveillance dystopia or incredible luck. I'm here to bet on the present, to create and execute positive visions for a secure AI future.

{% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
{% for note in recent_notes limit: 1 %}
{% capture note_content %}

  <h2>{{note.title}}</h2>
  <div class="muted small pb font-ui">
    {% if note.date %} <time datetime="{{ note.date | date_to_xmlschema }}">{{ note.date | date: "%B %-d, %Y"}}</time>{%else%}<time datetime="{{ note.last_modified_at | date_to_xmlschema }}">{{ note.last_modified_at | date: "%B %-d, %Y"}}</time>{% endif%}
    {% if note.read_time %} · <span class="reading-time" title="Estimated read time">{{ note.read_time }}</span>{% endif %}
  </div>
  <div class="small muted">
    {{ note.content | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip | truncate: 125 }} Keep&nbsp;reading&nbsp;→
  </div>
{% endcapture %}
<div>
<a href="{{ note.url }}" class="internal-link plain">
  {{ note_content | strip }}
</a>
</div>

{% endfor %}

<hr>

<!-- TOP NOTES AS DEFINED BY SIMPLEANALYTICS -->

<h2>Most popular reads</h2>

<ul>
{% assign top_notes = site.notes | sort: "pageviews" | reverse %}
{% for note in top_notes limit: 100 %}
<li><time datetime="{{ note.date | date_to_xmlschema }}">{{ note.date | date: "%b %-d '%y"}}</time>, <a href="{{note.url}}">{{note.title}}</a> ({{note.pageviews}} reads)</li>

{% endfor %}

</ul>

<h2>Currently popular</h2>

<!-- CURRENTLY POPULAR NOTE -->

<ul>
{% assign popular_notes = site.notes | sort: "currentpageviews" | reverse %}
{% for note in popular_notes %}

<li><time datetime="{{ note.date | date_to_xmlschema }}">{{ note.date | date: "%b %-d '%y"}}</time>, <a href="{{note.url}}">{{note.title}}</a> ({{note.currentpageviews}} recent reads)</li>

{% endfor %}

</ul>
