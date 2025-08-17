---
theme: ./
layout: intro
title: Minerva Theme
author: Hao Zhu
hideInToc: true
favicon: /favicon.svg
titleTemplate: "%s"
class: "flex items-center justify-center"
---


::left::

<div text-right>
<h1> Academic Talk Template </h1>
<div>
  Try this template for your academic talks

</div>


</div>

::right::
  <div @click="next" class="mt-auto ml-auto p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
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
layout: definition
title: Definition layout
---
::term::

<h2>
What is Minerva Theme?
</h2>
::definition::

<div class="flex flex-col h-full justify-between p-4">
  <h3>
  <span font-bold>Minerva Theme</span> (n.)
  </h3>

  <div class="italic">
  An opinionated theme for academic talks.
  </div>

  <div>
  -- me
  </div>

</div>

---
layout: explanation
title: Explanation layout
---

::term::
What is the explanation layout?
::explanation::

It is very similar to the definition layout, but the goal is to use non-text methods to explain a term.

---
layout: two-figures
title: 2 Figures Layout
---

::term::
# Two figures layout

::text1::
<h2 text-center>
The first Figure
</h2>

::text2::
<h2 text-center>
The second Figure
</h2>

---
layout: three-figures
title: 3 Figures Layout
---

::term::
# Three figures layout

::text1::
<h2 text-center>
The first Figure
</h2>

::text2::
<h2 text-center>
The second Figure
</h2>

::text3::
<h2 text-center>
The third Figure
</h2>

---
layout: figure-bottom
title: Figure Bottom Text
---

::text::
# This is the text below the figure

---
layout: figure-bottom-left
title: Figure + left text + bottom text
---

::text::
# This is the text below the figure

::figure-left::
## Text on the left

<Arrow v-bind="{ x1:250, y1:280, x2:400, y2:350 }" />

---
layout: onetwo
routAlias: Navigation
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
