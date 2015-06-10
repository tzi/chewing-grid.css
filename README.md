ChewingGrid
======

An ideal CSS Grid for card design:

 * Adapt to any layout, there is no media-query
 * Fluid card size, thanks to Flexbox (<3) or the float fallback
 * Minimum & maximum width on card

You can play with it: [Live demo](http://tzi.github.io/ChewingGrid/example/index.html)!

 
Index
------

1. [Quick start](#1-quick-start)
2. [Limit the column number](#2-limit-the-column-number)
3. [Set a minimum card width](#3-set-a-minimum-card-width)
4. [Set a maximum card width](#3-set-a-maximum-card-width)
5. [Prevent last row expansion](#5-prevent-last-row-expansion)


1. Quick start
-------

Let sart with the minimum markup: 

```html
<div class="chew-row">
    <div class="chew-cell">1</div>
    <div class="chew-cell">2</div>
    <div class="chew-cell">3</div>
    ...
</div>
```


2. Limit the column number
-------

Add the `chew-row--{n}` markup, to set the column limit: 

```html
<div class="chew-row chew-row--5">
    <div class="chew-cell">1</div>
    <div class="chew-cell">2</div>
    <div class="chew-cell">3</div>
    ...
</div>
```

Or add a percent `flex-basis` and a width on cell:

```css
.chew-cell {
    flex-basis: 25%; /* 4 columns */
    width: 25%; /* float fallback */
}
```


3. Set a minimum card width
-------

Override the default minimum width (200px) by adding this CSS rule:

```css
.chew-row {
    min-width: 300px
}
```


4. Set a maximum card width
-------

Add the `chew-card` markup: 

```html
<div class="chew-row">
    <div class="chew-cell">
        <div class="chew-card">1</div>
    </div>
    <div class="chew-cell">
        <div class="chew-card">2</div>
    </div>
    <div class="chew-cell">
        <div class="chew-card">3</div>
    </div>
    ...
</div>
```

Override the default maximum width (300px) by adding this CSS rule:

```css
.chew-card {
    min-width: 250px
}
```


5. Prevent last row expansion
-------

Add some `chew-cell--ghost` markup.

```html
<div class="chew-row chew-row--3">
    <div class="chew-cell">
        <div class="chew-card">1</div>
    </div>
    <div class="chew-cell">
        <div class="chew-card">2</div>
    </div>
    <div class="chew-cell">
        <div class="chew-card">3</div>
    </div>
    ...
    <div class="chew-cell chew-cell--ghost"></div>
    <div class="chew-cell chew-cell--ghost"></div>
</div>
```

You have to add at least `column-max-count - 1` columns.