Documentation chewing-grid.css
======

1. [Installation](#1-installation)

2. [Atomic classes] (#2-atomic-classes)  
    2.A [Quick start] (#2a-quick-start)  
    2.B [Add a gutter](#2b-add-a-gutter)  
    2.C [Limit the column number](#2c-limit-the-column-number)  
    2.D [Set a minimum card width](#2d-set-a-minimum-card-width)  
    2.E [Set a maximum card width](#2e-set-a-maximum-card-width)  
    2.F [Prevent last row expansion](#2f-prevent-last-row-expansion)
    
3. [CSS Rules] (#3-css-rules)  
    3.A [Quick start] (#3a-quick-start)  
    3.B [Add a gutter](#3b-add-a-gutter)  
    3.C [Limit the column number](#3c-limit-the-column-number)  
    3.D [Set a minimum card width](#3d-set-a-minimum-card-width)  
    3.E [Set a maximum card width](#3e-set-a-maximum-card-width)  
    3.F [Prevent last row expansion](#3f-prevent-last-row-expansion)
    
4. [Sass] (#4-sass)  
    4.A [Quick start] (#4a-quick-start)  
    4.B [Prevent last row expansion](#4b-prevent-last-row-expansion)

5. [Browser Compatibility] (#browser-compatibility)


1. Installation
-------

Install chewing-grid via bower and add it to bower.json dependencies

```sh
bower install chewing-grid --save
```


2. Atomic classes
-------

### 2.A. Quick start

Let sart with the minimum markup: 

```html
<link rel="stylesheet" type="text/css" href="build/chewing-grid-atomic.css"/>
<ul class="chew-row">
    <li class="chew-cell">
        <div class="chew-card">1</div>
    </li>
    <li class="chew-cell">
        <div class="chew-card">2</div>
    </li>
    <li class="chew-cell">
        <div class="chew-card">3</div>
    </li>
    <!-- [...] -->
</ul>
```


### 2.B. Add a gutter

Add a `chew-row--gutter` markup, to add a gutter between cards: 

```html
<!-- Ex: Add a 1em gutter -->
<ul class="chew-row chew-row--gutter">
    <!-- [...] -->
</ul>
```


### 2.C. Limit the column number

Add a `chew-row--col-{n}` markup, to set a  column limit: 

```html
<!-- Ex: 4 columns maximum -->
<ul class="chew-row chew-row--col-4">
    <!-- [...] -->
</ul>
```


### 2.D. Set a minimum card width

Add a `chew-row--card-min-{width}` markup, to set a minimum card width: 

```html
<!-- Ex: card width of 300px minimum -->
<ul class="chew-row chew-row--card-min-300">
    <!-- [...] -->
</ul>
```


### 2.E. Set a maximum card width

Add a `chew-row--card-max-{width}` markup, to set a maximum card width: 

```html
<!-- Ex: card width of 500px maximum -->
<ul class="chew-row chew-row--card-max-500">
    <!-- [...] -->
</ul>
```


### 2.F. Prevent last row expansion
-------

Add some `chew-cell--ghost` markup.

```html
<ul class="chew-row chew-row--col-3">
    <li class="chew-cell">
        <div class="chew-card">1</div>
    </li>
    <li class="chew-cell">
        <div class="chew-card">2</div>
    </li>
    <li class="chew-cell">
        <div class="chew-card">3</div>
    </li>
    <!-- [...] -->
    <li class="chew-cell chew-cell--ghost"></li>
    <li class="chew-cell chew-cell--ghost"></li>
</ul>
```

You have to add at least `column-max-count - 1` items.


3. CSS Rules
-------

### 3.A. Quick start

Let sart with the minimum markup: 

```html
<link rel="stylesheet" type="text/css" href="build/chewing-grid.css"/>
<ul class="chew-row myCardLit">
    <li class="chew-cell">
        <div class="chew-card">1</div>
    </li>
    <li class="chew-cell">
        <div class="chew-card">2</div>
    </li>
    <li class="chew-cell">
        <div class="chew-card">3</div>
    </li>
    <!-- [...] -->
</ul>
```


### 3.B. Add a gutter

Change the cell `padding`, to add a gutter between cards: 

```css
.myCardLit .chew-cell {
    padding: 0.5em; /* vertical & horizontal gutter of 1em (= 2 * 0.5em) */
}
```


### 3.C. Limit the column number

Change the cell `width` to set a column limit: 

```css
.myCardLit .chew-cell {
    width: 25%; /* 4 columns */
}
```


### 3.D. Set a minimum card width

Change the *cell* `min-width` to set a card width constraint (including gutter):

```css
.myCardLit .chew-cell {
    min-width: 300px
}
```


### 3.E. Set a maximum card width

Change the *card* `max-width` to set a card width constraint:

```css
.myCardLit .chew-card {
    max-width: 300px
}
```


### 3.F. Prevent last row expansion
-------

Add some `chew-cell--ghost` markup.

```html
<ul class="chew-row chew-row--col-3">
    <li class="chew-cell">
        <div class="chew-card">1</div>
    </li>
    <li class="chew-cell">
        <div class="chew-card">2</div>
    </li>
    <li class="chew-cell">
        <div class="chew-card">3</div>
    </li>
    <!-- [...] -->
    <li class="chew-cell chew-cell--ghost"></li>
    <li class="chew-cell chew-cell--ghost"></li>
</ul>
```

You have to add at least `column-max-count - 1` items.


4. Sass
-------

### 4.A. Quick start

Let sart with the our custom markup: 

```html
<ul class="character-row">
    <li class="character-cell">
        <div class="character-card">1</div>
    </li>
    <li class="character-cell">
        <div class="character-card">2</div>
    </li>
    <li class="character-cell">
        <div class="character-card">3</div>
    </li>
    <!-- [...] -->
</ul>
```

Generate our associated custom classes:

```scss
@import 'src/mixins/grid.mixin';
@include chewing-grid(
    $prefix: 'character-',
    $column-max-count: 4,
    $card-gutter: 1em,
    $card-min-width: 200px,
    $card-max-width: 300px
);
```


### 4.B. Prevent last row expansion
-------

Add some `chew-cell--ghost` markup.

```html
<ul class="chew-row chew-row--col-3">
    <li class="chew-cell">
        <div class="chew-card">1</div>
    </li>
    <li class="chew-cell">
        <div class="chew-card">2</div>
    </li>
    <li class="chew-cell">
        <div class="chew-card">3</div>
    </li>
    <!-- [...] -->
    <li class="chew-cell chew-cell--ghost"></li>
    <li class="chew-cell chew-cell--ghost"></li>
</ul>
```

You have to add at least `column-max-count - 1` items.


Browser compatibility
--------

chewing-grid have some workarounds to improve compatibility:
 
 * **no `-webkit-` prefix:**  
 Safari does not handle `flex-wrap` property when a flex item has a `min-width` and a percent `flex-basis`.
 cf. [bug tracking](https://bugs.webkit.org/show_bug.cgi?id=136041).
 * **no use of `calc()`:**  
 IE 10-11 ignore `calc()` functions used in `flex` shorthand declarations.
 cf. [bug documentation](https://github.com/philipwalton/flexbugs#8-flex-basis-doesnt-support-calc).
 * **no use of `flex-basis`:**  
 IE 10-11 ignore `box-sizing: border-box` when size set with `flex-basis`.
 cf. [bug documentation](https://github.com/philipwalton/flexbugs#7-flex-basis-doesnt-account-for-box-sizingborder-box).
 * **no `height: 100%` on card:**  
 Chrome doesn't support percent height on felx items childs.
 cf. [bug tracking](http://code.google.com/p/chromium/issues/detail?id=346275).
 * **Use `display: inline-block` and `media-queries:**  
 To improve the user experience on browsers that doest not support flexbox.