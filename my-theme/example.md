---
theme: ./
layout: halfnhalf
font:
    sans: "Geist"
    serif: "EB Garamond"
title: Hao's Template
author: Hao Zhu
hideInToc: true
favicon: /favicon.svg
titleTemplate: "%s"
---


::left::
# Slidev Theme Starter

Presentation slides for developers

::right::
<div class="pt-12">
  <span @click="next" class="px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>


---
layout: halfnhalf
title: Table of Content
hideInToc: true
---


::left::
# Table of Content 

::right::

<Toc />

---
layout: halfnhalf
routeAlias: available-layouts
title: Available Layouts
---

::left::

<h1>
Available Layouts
</h1>

::right::

| Layout | Description |
| --- | --- |
| `halfnhalf` | Two columns layout |
| `thirds` | Three columns layout |
| `onetwo` | 1/3 and 2/3 |
| `one` | Full width layout |

---
layout: onetwo
routAlias: Navigation
# title: Navigation
---

::left::
# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

::right::
## Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---
layout: onetwo
---

::left::

# How to write a page

You can easily write a page with a block of markdown

::right::
```markdown
---
theme: ./
layout: halfnhalf
font:
    sans: "Geist"
    serif: "EB Garamond"
title: Hao's Template # will used for rendering the right header
author: Hao Zhu # will used for rendering the left header
hideInToc: true
---
::left::

The content on the left side

::right::

The content on the right side

```
---
layout: one
class: "text-center flex items-center justify-center"
title: Learn More
---

<div>

[Hao Zhu](https://zhuhao.me) / [GitHub](https://github.com/prokil/talk)
</div>
