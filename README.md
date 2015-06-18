ChewingGrid
======

An ideal CSS Grid for card design:

 * Adapt to any layout, there is no media-query
 * Fluid card size thanks to Flexbox (<3), or the float fallback
 * Minimum & maximum width on card

You can play with it: [Live demo](http://tzi.github.io/ChewingGrid)!

 
Index
------

1. [Installation](#1-installation)

2. [Atomic classes] (#2-atomic-classes)  
    2.A [Quick start] (#2a-quick-start)  
    2.B [Add a gutter](#2b-add-a-gutter)  
    2.C [Limit the column number](#2c-limit-the-column-number)  
    2.D [Set a minimum card width](#2d-set-a-minimum-card-width)  
    2.E [Set a maximum card width](#2e-set-a-maximum-card-width)
    
3. [CSS Rules] (#3-css-rules)  
    3.A [Quick start] (#3a-quick-start)  
    3.B [Add a gutter](#3b-add-a-gutter)  
    3.C [Limit the column number](#3c-limit-the-column-number)  
    3.D [Set a minimum card width](#3d-set-a-minimum-card-width)  
    3.E [Set a maximum card width](#3e-set-a-maximum-card-width)  
    
4. [Sass] (#4-sass)  
    
5. [Prevent last row expansion](#5-prevent-last-row-expansion)
6. [How to Contribute] (#how-to-contribute)
7. [Author & Community] (#author--community)


1. Installation
-------

Install ChewingGrid via bower and add it to bower.json dependencies

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
<ul class="chew-row chew-row--card-min-500">
    <!-- [...] -->
</ul>
```


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

Change the cell `flex-basis` and the `width` to set a column limit: 

```css
.myCardLit .chew-cell {
    flex-basis: 25%; /* 4 columns */
    width: 25%; /* float fallback */
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


4. Sass
-------

*Sass documentation is comming...*



5. Prevent last row expansion
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


How to Contribute
--------

1. [Star](https://github.com/tzi/ChewingGrid/stargazers) the project!
2. [Report a bug](https://github.com/tzi/ChewingGrid/issues/new) that you have found.
3. Tweet and blog about ChewingGrid and [Let me know](https://twitter.com/iamtzi) about it.
4. [Pull requests](https://github.com/tzi/ChewingGrid/blob/master/CONTRIBUTING.md) are also highly appreciated.


Author & Community
--------

ChewingGrid is under [MIT License](http://opensource.org/licenses/MIT).<br>
It was created & is maintained by [Thomas ZILLIOX](http://tzi.fr).