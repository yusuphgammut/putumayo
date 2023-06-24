<div align="center">

<h1>
<picture id="putumayo">
  <source media="(prefers-color-scheme: dark)" srcset="_assets/gh-header-midnight.svg">
  <source media="(prefers-color-scheme: light)" srcset="_assets/gh-header-midnight.svg">
  <img alt="Putumayo" src="_assets/gh-header-midnight.png">
</picture>
</h1>

[![GitHub Release](https://img.shields.io/github/v/release/yusuphgammut/putumayo)](https://github.com/yusuphgammut/putumayo/releases/latest)
[![GitHub contributors](https://img.shields.io/github/contributors/yusuphgammut/putumayo)](https://github.com/yusuphgammut/putumayo/graphs/contributors)

Putumayo is a a rainforest-inspired color theme for CLI-oriented software developers.

</div>

## Features

- 🌓 Dark theme (light theme will be created in the future).
- 🎨 Meticulously crafted and balanced selection of colors.
- 📺 Focused on CLI products to give a pleasant experience for terminal users.
- 👥 AA accessibility in most cases.
- 🌳 Inspired by nature.

## Table of contents

  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Variants](#variants)
  - [Accessibility](#accessibility)
  - [Color scheme](#color-scheme)
  - [Concept](#concept)
  
## Variants

Currently Putumayo has only a dark variant, but I'm expecting to develop a bright variant in the future.

The name of the dark variant is __Putumayo Midnight__, while the bright variant is referred to as __Putumayo Sunlight__.

## Accessibility 

Most of the foreground colors meet the WCAG 2.0 AA Conformance Level of color contrast when tested against the base background color bg10. The only ones that fail this criteria are _steel_ and _nightfog_ for the Putumayo Midnight variant, which are mostly recommended for low-contrast UI elements like disabled text, code comments, and line numbers.

## Color scheme

The color palette was meticulously crafted to expose a balanced collection of swatches along with a simple but effective pattern of usage for them. This configuration avoids visual fatigue during long coding sessions, while asisting focus.

This was achieved by observing the following principles:

- Background colors should admit a reasonable contrast between them and the main foreground color to ensure a clear readability while preventing long term visual exhaustion.

- Foreground colors should represent all main sections of the color wheel, with additional variations, to allow for an heterogeneous but cohesive arrangement.

- All colors in the palette should be defined using precise values of hue, saturation and brightness to obtain a harmonic set of easily distinguishable swatches.

- There should be a design guide to ensure that frequent/large elements are styled using calming/muted tones, while occasional/small elements are styled with distinctive/saturated ones, to aim for a unique balance between sobriety and enthusiasm.

| Midnight | Sunlight |
| -------- | -------- |
| ![#3d5866](https://fakeimg.pl/12x12/3d5866/3d5866/ "nightfog - #3d5866") __nightfog__ `#3d5866` `O/S`<br />__UI usage:__ Terminal black. Line numbers. Inactive text. Window/panel separators. Prominent hidden text.<br />__Code usage:__ No usage. |  |
| ![#f2d2c2](https://fakeimg.pl/12x12/f2d2c2/f2d2c2/ "beige - #f2d2c2") __beige__ `#f2d2c2` `O/S`<br />__UI usage:__ Terminal white.<br />__Code usage:__ Highlights. |  |
![#c689e6](https://fakeimg.pl/12x12/c689e6/c689e6/ "amethyst - #c689e6") __amethyst__ `#c689e6` `O/S`
- __UI usage:__ Terminal magenta. Hint text.
- __Code usage:__ All keywords except storage-related ones, like `if`, `else`, `for`, `while`, `import`, `export`, `return`, `try`, `catch`, `or`, `and`, `in`, `of`, `from`, etc.
![#e67d7d](https://fakeimg.pl/12x12/e67d7d/e67d7d/ "cherry - #e67d7d") __cherry__ `#e67d7d` `O/S`
- __UI usage:__ Terminal red. Error text. Select/visual mode in modal editors.
- __Code usage:__ Bold text in markup.
![#d9d282](https://fakeimg.pl/12x12/d9d282/d9d282/ "amber - #d9d282") __amber__ `#d9d282` `O/S`
- __UI usage:__ Terminal yellow.
- __Code usage:__ Bla bla bla.
![#aecc8f](https://fakeimg.pl/12x12/aecc8f/aecc8f/ "paramo - #aecc8f") __paramo__ `#aecc8f` `F/L`
- __UI usage:__ Terminal green.
- __Code usage:__ Bla bla bla.
![#8fccb8](https://fakeimg.pl/12x12/8fccb8/8fccb8/ "lichen - #8fccb8") __lichen__ `#8fccb8` `F/L`
- __UI usage:__ Terminal cyan.
- __Code usage:__ Bla bla bla.
![#99a9ff](https://fakeimg.pl/12x12/99a9ff/99a9ff/ "denim - #99a9ff") __denim__ `#99a9ff` `O/S`
- __UI usage:__ Terminal blue.
- __Code usage:__ All data and procedure storage-related keywords like `var`, `let`, `const`, `mut`, `ref`, `def`, `class`, `function`, etc.
![#d977b7](https://fakeimg.pl/12x12/d977b7/d977b7/ "fuchia - #d977b7") __fuchia__ `#d977b7` `O/S`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#d9916d](https://fakeimg.pl/12x12/d9916d/d9916d/ "orange - #d9916d") __orange__ `#d9916d` `O/S`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#85cc85](https://fakeimg.pl/12x12/85cc85/85cc85/ "forest - #85cc85") __forest__ `#85cc85` `F/L`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#70bccc](https://fakeimg.pl/12x12/70bccc/70bccc/ "teal - #70bccc") __teal__ `#70bccc` `O/S`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#ccb1a3](https://fakeimg.pl/12x12/ccb1a3/ccb1a3/ "khaki - #ccb1a3") __khaki__ `#ccb1a3` `F/L`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#95a69e](https://fakeimg.pl/12x12/95a69e/95a69e/ "mist - #95a69e") __mist__ `#95a69e` `F/L`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#b39b6b](https://fakeimg.pl/12x12/b39b6b/b39b6b/ "arequipe - #b39b6b") __arequipe__ `#b39b6b` `F/L`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#b3b36b](https://fakeimg.pl/12x12/b3b36b/b3b36b/ "olive - #b3b36b") __olive__ `#b3b36b` `F/L`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#99857a](https://fakeimg.pl/12x12/99857a/99857a/ "tan - #99857a") __tan__ `#99857a` `F/L`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#996b6b](https://fakeimg.pl/12x12/996b6b/996b6b/ "terracota - #996b6b") __terracota__ `#996b6b` `F/L`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#806f4c](https://fakeimg.pl/12x12/806f4c/806f4c/ "umber - #806f4c") __umber__ `#806f4c` `F/L`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#518c83](https://fakeimg.pl/12x12/518c83/518c83/ "slate - #518c83") __slate__ `#518c83` `F/L`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#517373](https://fakeimg.pl/12x12/517373/517373/ "steel - #517373") __steel__ `#517373` `F/L`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#131d1f](https://fakeimg.pl/12x12/131d1f/131d1f/ "bg00 - #131d1f") __bg00__ `#131d1f`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#172226](https://fakeimg.pl/12x12/172226/172226/ "bg05 - #172226") __bg05__ `#172226`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#1c282e](https://fakeimg.pl/12x12/1c282e/1c282e/ "bg10 - #1c282e") __bg10__ `#1c282e`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#212d36](https://fakeimg.pl/12x12/212d36/212d36/ "bg15 - #212d36") __bg15__ `#212d36`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#25313d](https://fakeimg.pl/12x12/25313d/25313d/ "bg20 - #25313d") __bg20__ `#25313d`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#2a3545](https://fakeimg.pl/12x12/2a3545/2a3545/ "bg25 - #2a3545") __bg25__ `#2a3545`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#2f394d](https://fakeimg.pl/12x12/2f394d/2f394d/ "bg30 - #2f394d") __bg30__ `#2f394d`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#363e54](https://fakeimg.pl/12x12/363e54/363e54/ "bg35 - #363e54") __bg35__ `#363e54`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#3c415c](https://fakeimg.pl/12x12/3c415c/3c415c/ "bg40 - #3c415c") __bg40__ `#3c415c`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#414463](https://fakeimg.pl/12x12/414463/414463/ "bg45 - #414463") __bg45__ `#414463`
- __UI usage:__ Bla bla bla.
- __Code usage:__ Bla bla bla.
![#403f37](https://fakeimg.pl/12x12/403f37/403f37/ "yellowBg - #403f37") __yellowBg__ `#403f37`
- __UI usage:__ Warning background.
- __Code usage:__ Bla bla bla.
![#453434](https://fakeimg.pl/12x12/453434/453434/ "redBg - #453434") __redBg__ `#453434`
- __UI usage:__ Error background.
- __Code usage:__ Bla bla bla.
![#334455](https://fakeimg.pl/12x12/334455/334455/ "blueBg - #334455") __blueBg__ `#334455`
- __UI usage:__ Info background.
- __Code usage:__ Bla bla bla.
![#473947](https://fakeimg.pl/12x12/473947/473947/ "magentaBg - #473947") __magentaBg__ `#473947`
- __UI usage:__ Hints background.
- __Code usage:__ Bla bla bla.
![#3c4841](https://fakeimg.pl/12x12/3c4841/3c4841/ "greenBg - #3c4841") __greenBg__ `#3c4841`
- __UI usage:__ Success background.
- __Code usage:__ Bla bla bla.

<!-- Swatches -->
[nightfog]: https://fakeimg.pl/18x18/3d5866/3d5866/ "nightfog - #3d5866"
[beige]: https://fakeimg.pl/18x18/f2d2c2/f2d2c2/ "beige - #f2d2c2"
[amethyst]: https://fakeimg.pl/18x18/c689e6/c689e6/ "amethyst - #c689e6"
[cherry]: https://fakeimg.pl/18x18/e67d7d/e67d7d/ "cherry - #e67d7d"
[amber]: https://fakeimg.pl/18x18/d9d282/d9d282/ "amber - #d9d282"
[paramo]: https://fakeimg.pl/18x18/aecc8f/aecc8f/ "paramo - #aecc8f"
[lichen]: https://fakeimg.pl/18x18/8fccb8/8fccb8/ "lichen - #8fccb8"
[denim]: https://fakeimg.pl/18x18/99a9ff/99a9ff/ "denim - #99a9ff"
[fuchia]: https://fakeimg.pl/18x18/d977b7/d977b7/ "fuchia - #d977b7"
[orange]: https://fakeimg.pl/18x18/d9916d/d9916d/ "orange - #d9916d"
[forest]: https://fakeimg.pl/18x18/85cc85/85cc85/ "forest - #85cc85"
[teal]: https://fakeimg.pl/18x18/70bccc/70bccc/ "teal - #70bccc"
[khaki]: https://fakeimg.pl/18x18/ccb1a3/ccb1a3/ "khaki - #ccb1a3"
[mist]: https://fakeimg.pl/18x18/95a69e/95a69e/ "mist - #95a69e"
[arequipe]: https://fakeimg.pl/18x18/b39b6b/b39b6b/ "arequipe - #b39b6b"
[olive]: https://fakeimg.pl/18x18/b3b36b/b3b36b/ "olive - #b3b36b"
[tan]: https://fakeimg.pl/18x18/99857a/99857a/ "tan - #99857a"
[terracota]: https://fakeimg.pl/18x18/996b6b/996b6b/ "terracota - #996b6b"
[umber]: https://fakeimg.pl/18x18/806f4c/806f4c/ "umber - #806f4c"
[slate]: https://fakeimg.pl/18x18/518c83/518c83/ "slate - #518c83"
[steel]: https://fakeimg.pl/18x18/517373/517373/ "steel - #517373"
[bg00]: https://fakeimg.pl/18x18/131d1f/131d1f/ "bg00 - #131d1f"
[bg05]: https://fakeimg.pl/18x18/172226/172226/ "bg05 - #172226"
[bg10]: https://fakeimg.pl/18x18/1c282e/1c282e/ "bg10 - #1c282e"
[bg15]: https://fakeimg.pl/18x18/212d36/212d36/ "bg15 - #212d36"
[bg20]: https://fakeimg.pl/18x18/25313d/25313d/ "bg20 - #25313d"
[bg25]: https://fakeimg.pl/18x18/2a3545/2a3545/ "bg25 - #2a3545"
[bg30]: https://fakeimg.pl/18x18/2f394d/2f394d/ "bg30 - #2f394d"
[bg35]: https://fakeimg.pl/18x18/363e54/363e54/ "bg35 - #363e54"
[bg40]: https://fakeimg.pl/18x18/3c415c/3c415c/ "bg40 - #3c415c"
[bg45]: https://fakeimg.pl/18x18/414463/414463/ "bg45 - #414463"
[yellowBg]: https://fakeimg.pl/18x18/403f37/403f37/ "yellowBg - #403f37"
[redBg]: https://fakeimg.pl/18x18/453434/453434/ "redBg - #453434"
[blueBg]: https://fakeimg.pl/18x18/334455/334455/ "blueBg - #334455"
[magentaBg]: https://fakeimg.pl/18x18/473947/473947/ "magentaBg - #473947"
[greenBg]: https://fakeimg.pl/18x18/3c4841/3c4841/ "greenBg - #3c4841"

## Concept

In the jungle you find yourself surrounded by millions of leaves displaying a multitude of green shades, from yellowish to bluish to brownish. The soil and the trunks exhibit an abundance of browns and greys. These colors give you a sense of serenity and recharge. But if you keep a watchful eye around, you'll start finding little treasures of color: a magnificent deep blue butterfly appears from nowhere; a little bright yellow frog stands still in a leave; a beautiful purple orchid hangs from a branch; a bunch of noisy red guacamayas fly from one tree to another.

That was the feeling I had when I visited the Putumayo rainforest in Colombia. Some weeks later, when I returned to work, I wondered if it was possible to somehow recall that sensation in my day to day use of the terminal. And that's how the Putumayo project was born. I decided to create a theme that balanced the muted main colors of the rainforest, with the vibrant ocasional colors of the exuberant little creatures that inhabit it.

In practice, this means that frequent/large elements in the UI or code should use various shades of green and brown —emulating the leaves, trunks, and soil—, while occasional/small elements should use shades of blue, magenta, red, orange, and yellow —emulating the flowers, butterflies, birds, and amphibians living inside—.

The result is a beautiful and pleasant color scheme that mixes both the calming tones and prismatic diversity of the rainforests of our planet.
