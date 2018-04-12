# Grx
## Grx is a layout grid powered by CSS3's flexbox module.

**Grx** allows you to implement scalable layouts in a dependable, declarative manner. The syntax is lightweight, relying on defaults as much as possible for easy rapid prototyping.

## Demo page:
http://mike-shtil.com/grx/

## Installation:
```bash
npm install grx
```
```bash
bower install grx
```

## Use Example:
### grx-row align direct children horizontally. grx-col aligns direct children vertically.
```html
<div class="grx-row">
  <div>I'm a child, showing alongside my siblings</div>
  <div>I'm another child, showing alongside my siblings</div>
  <div>I'm another child, showing alongside my siblings</div>
</div>
```
### simple column. Children align one below another.
```html
<div class="grx-col">
  <div>I'm a child, showing below/above my siblings</div>
  <div>I'm another child, showing below/above my siblings</div>
  <div>I'm another child, showing below/above my siblings</div>
</div>
```

### children can have implicit/explicit sizes:
```html
<div class="grx-row">
  <div>
    <!-- no size specified; takes up amount of space required for the content space. -->
    <!-- if the logo is 128px wide, that's the div's width -->
    <img src="logo.png"></img>
  </div>
  <div class="size-4">
    <!-- one number - fraction out of 12; here, 4/12 or a third of the parent width -->
    <input type="text" placeholder="Search">

  </div>
  <div class="size-2-5">
    <!-- two numbers are nominator/denominator; here, 2/5 of the parent width -->
    <button>Clear</button>
  </div>
  <div class="size-auto">
    <!-- 'auto' children will take up all the remaining free space in the parent -->
    <!-- multiple 'auto' children will split share space equally -->
    <button>Submit</button>
  </div>
</div>
```
### items can be aligned by using directions as you see them
```html
items-[direction1]-[optional:direction2]
<!-- directions can be: top, middle (vertical), bottom, left, center (horizontal), right -->
```
```html
<div class="grx-row items-right">
  <div>I'm aligned to right</div>
  <div>I'm also aligned to right</div>
</div>
```
```html
<div class="grx-row items-middle-right">
  <div>I'm aligned to the right and also middle (vertically)</div>
</div>
```

## Author
Michael (Mike) Shtilerman

## License
This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
