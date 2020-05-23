<h1 align="center">Vue Toggles</h1>

<p align="center">
<img src="./vue-toggles.jpg" alt="Vue Toggles Logo"/>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/vue-toggles"><img src="https://img.shields.io/npm/v/vue-toggles.svg?style=flat-square"/> <img src="https://img.shields.io/npm/dm/vue-toggles.svg?style=flat-square"/></a> <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.x-brightgreen.svg?style=flat-square"/></a>
</p>

<p align="center">
The only toggle library you need.
</p>

<p align="center">
  <a href="https://www.buymeacoff.ee/Nifel">
    <img
         width="140"
         alt="Buy me a coffee"
         src="https://user-images.githubusercontent.com/1577802/36840220-21beb89c-1d3c-11e8-98a4-45fc334842cf.png">
  </a>
</p>

## Demo

[Demo](https://vue-toggles.netlify.app/)

## Installation

```
npm i vue-toggles
```

## Import

Import plugin:

```javascript
import Vue from 'vue';
import VueToggles from 'vue-toggles';

Vue.component('VueToggles', VueToggles);
```

## Usage

The toggle is very easy to use out of the box. The bare minimum for it to work is a `@click`-function and a `:value`-prop.

```html
<VueToggles @click="value = !value" :value="value" />
```

## Options

You can also add more props to customize things like color and width/height.

```html
<VueToggles
  @click="value = !value"
  :value="value"
  height="30"
  width="90"
  checked="On"
  unchecked="Off"
  uncheckedBgColor="lightgrey"
  checkedBgColor="#b4d455"
  fontColor="#000"
/>
```

## Properties

| Name             | Type             | Default   |
| ---------------- | ---------------- | --------- |
| value            | Boolean          | false     |
| height           | [String, Number] | 25        |
| width            | [String, Number] | 75        |
| checked          | String           | null      |
| unchecked        | String           | null      |
| dotColor         | String           | `#ffffff` |
| uncheckedBgColor | String           | `#939393` |
| checkedBgColor   | String           | `#5850ec` |
| disabledBg       | String           | `#939393` |
| disabled         | Boolean          | false     |
| fontColor        | String           | `#ffffff` |
| fontSize         | [String, Number] | 14        |
| fontWeight       | [Number, String] | normal    |

### Browser compatibility

- Chrome: 40+
- Firefox: 25+
- Safari: 10+
- IE: 11+
