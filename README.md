# 📏 📐 tachyons-msrd

A set of higher order components for creating stateless functional UI components using tachyons.

- [Usage & Example](#)
- [API](#api)
  - [Media Query Support](#media-query-support)
  - [Higher Order Components](#higher-order-components)
  - [Eager Evaluation](#eager-evaluation)
- [Why?](#why?)
- [Inspired by and Related to](#inspired-by-and-related-to)

### Usage & Example

## API

### Media Query Support
The following properties support the media query syntax:
- `r`, `rounded`, `bw`
- `f`, `lh`
- `h`, `w`
- `pa`, `pl`, `pr`, `pb`, `pt`, `pv`, `ph`
- `ma`, `ml`, `mr`, `mb`, `mt`, `mv`, `mh`
- `na`, `nl`, `nr`, `nb`, `nt`

This means that you can either provide regular values – such as a scale step number and literal values – or an object which specifies values by breakpoints.

For example: `<Text f={1} />` or `<Text f={{ all: 3, ns: 2, m: 1, l: 'headline' }} />`

`all`: All breakpoints (unless otherwise specified with another breakpoint)
`ns`: Not small
`m`: Medium
`l`: Large

### Higher Order Components

- [`withBaseStyles`](#withbasestyles)
- [`withSpacing`](#withspacing)
- [`withBackgroundColor`](#withbackgroundcolor)
- [`withColor`](#withcolor)
- [`withSize`](#withsize)
- [`withTypography`](#withtypography)
- [`withBorder`](#withborder)
- [`withDefaults`](#withdefaults)
- [`withMsrd`](#withmsrd)

#### `withBaseStyles`
```js
withBaseStyles(
  baseStyles: Array<string> or string
): HigherOrderComponent
```
HOC for creating a styled component with a set of classNames applied to it.

```js
const ButtonLink = compose('f6 link dim br1 ph3 pv2 mb2 dib white bg-black')('a');

<ButtonLink>Link Text</ButtonLink>
```


#### `withSpacing`
```js
withSpacing(): HigherOrderComponent
```
Exposes the [spacing scale](http://tachyons.io/docs/layout/spacing) as props.

```js
const Div = withSpacing('div');

<Div
  mh={3} mv={{ l: 4, m: 3, ns: 2, all: 1 }}
  nl={{ l: 3, m: 2, ns: 4, all: 1 }}
  pr={4} pl={4} pv={2}
  className="myClass my-other-class"
/>
```

| Prop | Type | MQ Support |
|---|---|---|
| `ma` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `mt` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `ml` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `mr` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `mb` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `mv` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `mh` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `na` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `nt` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `nl` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `nr` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `nb` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `pa` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `pt` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `pl` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `pr` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `pb` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `pv` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `ph` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |


#### `withBackgroundColor`
```js
withBackgroundColor(
  colors: Array<string>
): HigherOrderComponent
```
Allows you to set the background color using the `bg` prop. You will have to provide it a list of colour names that you are using in your project.

```js
const clrs = ['red', 'green', 'blue', 'washed-yellow'];
const Div = withBackgroundColor(clrs)('div');

<Div
  bg="washed-yellow"
  className="myClass my-other-class"
/>
```

| Prop | Type | MQ Support |
|---|---|---|
| `bg` | `oneOf([...<list of colors provided>])` | 🚫 |


#### `withColor`
```js
withColor(
  colors: Array<string>
): HigherOrderComponent
```
Allows you to set the font color using the `color` prop. You will have to provide it a list of colour names that you are using in your project.

```js
const clrs = ['medium-gray', 'red', 'green', 'blue'];
const Text = withColor(clrs)('p');

<Text
  color="medium-gray"
  className="myClass my-other-class"
/>
```

| Prop | Type | MQ Support |
|---|---|---|
| `color` | `oneOf([...<list of colors provided>])` | 🚫 |


#### `withSize`
```js
withSize(): HigherOrderComponent
```
Exposes [widths](http://tachyons.io/docs/layout/widths/) & [heights](http://tachyons.io/docs/layout/heights/) as props.

```js
const Div = withSize('div');;

<Div
  w={{ l: 5, m: 4, ns: 'third', all: 3 }}
  h={5}
  className="myClass my-other-class"
/>
```

| Prop | Type | MQ Support |
|---|---|---|
| `w` | `oneOf([1, 2, 3, 4, 5, 10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75, 80, 90, 100, 'third', 'two-thirds', 'auto'])` | ✅ |
| `h` | `oneOf([1, 2, 3, 4, 5, 25, 50, 75, 100, 'auto'])` | ✅ |


#### `withTypography`
```js
withTypography(): HigherOrderComponent
```
Allows you to set the [font size](http://tachyons.io/docs/typography/scale) and [line-height](http://tachyons.io/docs/typography/line-height) using the `f` and `lh` props respectively.

```js
const Text = withTypography('p');;

<Text
  f={{ l: 4, m: 3, ns: 2, all: 1 }}
  lh="copy"
  className="myClass my-other-class"
/>
```

| Prop | Type | MQ Support |
|---|---|---|
| `f` | `oneOf([1, 2, 3, 4, 5, 6, 7, 'headline', 'subheadline'])` | ✅ |
| `lh` | `oneOf(['solid', 'title', 'copy'])` | ✅ |


#### `withBorder`
```js
withBorder(
  colors: Array<string>
): HigherOrderComponent
```
Allows you to set border styles using props. You will have to provide it a list of colour names that you are using in your project.

```js
const clrs = ['medium-gray', 'red', 'green', 'blue'];
const Div = withBorder(clrs)('div');

<Div
  ba="gray" bw={2}
  radius={{ l: 1, m: 2, ns: 100, all: 4 }}
  rounded={{ l: 'bottom', m: 'top', ns: 'right', all: 'left' }}
  className="myClass my-other-class"
/>
```

| Prop | Type | MQ Support |
|---|---|---|
| `ba` | boolean or `oneOf([...<list of colors provided>])` | 🚫 |
| `bl` | boolean or `oneOf([...<list of colors provided>])` | 🚫 |
| `br` | boolean or `oneOf([...<list of colors provided>])` | 🚫 |
| `bt` | boolean or `oneOf([...<list of colors provided>])` | 🚫 |
| `bb` | boolean or `oneOf([...<list of colors provided>])` | 🚫 |
| `bn` | boolean | 🚫 |
| `bw`  | `oneOf([[0, 1, 2, 3, 4, 5]])` | ✅ |
| `radius` | `oneOf([0, 1, 2, 3, 4, 100, 'pill'])` | ✅ |
| `rounded` | `oneOf(['bottom', 'top', 'right', 'left'])` | ✅ |


#### `withDefaults`
```js
withDefaults(
  defaultsForProps: Object
): HigherOrderComponent
```
Allows you to provide default values for any props.

```js
const Title = compose(
  withTypography,
  withDefaults({ f: 1, lh: 'title' }),
)('h1');

// Will receive f as 1 and lh as 'title'
<Title className="myClass my-other-class" />
// Will receive f as 2 and lh as 'title'
<Title f={2} className="myClass my-other-class" />
```


#### `withMsrd`
```js
withMsrd(
  colors: Array<string>
): HigherOrderComponent
```
A composition of `withSpacing`, `withBackgroundColor(colors)`, `withColor(colors)`, `withSize`, `withBorder(colors)` and `withTypography`.

```js
const clrs = ['white', 'red', 'green', 'blue'];
export const Block = withMsrd(clrs)('div');

<Block
  f={{ l: 4, m: 3, ns: 2, all: 1 }}
  lh="copy"
  mh={3} mv={2} mt={4} nl={3}
  pa={{ l: 4, m: 4, ns: 3, all: 2 }}
  bg="blue"
  color="white"
  w={5}
  h={{ l: 50, m: 4, ns: 3, all: 2 }}
  bb="gray" bw={{ l: 1, m: 2, ns: 3, all: 4 }}
  radius="pill"
  rounded="top"
/>
```

## Why?

1. It allows you to quickly create styled and/or stateless functional UI components which use tachyons for styling.

2. It helps break up the styles into multiple props. This avoids `className` from becoming long and hard to read.

    ```js
    <Button
      f={4} lh="solid"
      bg="near-white" color="black-60"
      br="3" rounded="top"
      mv={0} pv={2} ph={3}
    />
    ```

3. It enforces typechecking using `propTypes`. This helps catch values not supported by tachyons.

4. It makes it easier to provide defaults (see the explanation below).

When building components we often want to provide some base styling and then allow the user to override some of that styling. This can be challenging to achieve by providing all the overriding-styles through one prop. For example:

```js
const Button = ({ className, ...props}) => {
  const styles = classNames('f6', 'link', 'dim', 'br1', 'bn',
    'ph3', 'pv2', 'mb2', 'dib', 'bg-green', 'white', className);

  return (
    <a className={styles} {...props} />
  );
};
```

This component provides all the base-styles. Including the default background and text colours. There are many ways to do this however, for this particular example I'm using `classNames`.

```js
// Will render with green background and white text
<Button className="mr3">Button Text</Button>
// Will render with blue background and white text
<Button className="bg-blue mr3">Button Text</Button>
// Will render with green background and white text
<Button className="bg-red">Button Text</Button>
```

You might notice a problem with the above scenario. The first two buttons will render as expected however, the third one will not. This is because in tachyons CSS `.bg-green` is defined after `.bg-red` so it will take precedence.

```css
/* Background colors */
.bg-red { background-color: #ff4136; }
  ...
.bg-green { background-color: #19a974; }
  ...
.bg-blue { background-color: #357edd; }
```

In order to get around this we can expose `background` and `color` as props.

```js
const Button = ({
  bgColor = 'bg-green',
  color = 'white',
  className,
  ...props
}) => {
  const styles = classNames('f6', 'link', 'dim', 'br1', 'bn',
    'ph3', 'pv2', 'mb2', 'dib', bgColor, color, className);

  return (
    <a className={styles} {...props} />
  );
};
```

full example: [codepen.io/winkerVSbecks/pen/LWBLYb](http://codepen.io/winkerVSbecks/pen/LWBLYb?editors=0010)


### Inspired by and Related to

+ [tachyons-react](https://github.com/tachyons-react/tachyons-react)
+ [github.com/tachyons-css/tachyons](https://github.com/tachyons-css/tachyons)
+ [github.com/jxnblk/rebass](https://github.com/jxnblk/rebass)
+ [github.com/acdlite/recompose](https://github.com/acdlite/recompose)
