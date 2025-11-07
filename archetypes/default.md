---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
description: "{{ replace .Name "-" " " | title }}"
noindex: false
featured: false
pinned: false
# comments: true
series:
#  - 
categories:
#  - 
tags:
#  - 
images:
#  - 
# menu:
#   main:
#     weight: 100
#     params:
#       icon:
#         vendor: bs
#         name: book
#         color: '#e24d0e'
alt_text: "{{ replace .Name "-" " " | title }}"
---

Content.
