# Macedonian Transliteration

[![codecov](https://codecov.io/github/MatejMecka/macedonian-transliteration-js/graph/badge.svg?token=VS6G3M00T6)](https://codecov.io/github/MatejMecka/macedonian-transliteration-js)

A simple transliteration module for converting the macedonian cyrillic alphabet into latin, and vice versa.

# Installation

```js
npm i macedonian-transliteration
```

# Example

```js
import { cyrillic_to_latin } from "macedonian-transliteration";
import { latin_to_cyrillic } from "macedonian-transliteration";

cyrillic_to_latin('Една мечка ти вика здраво!') // Edna mechka ti vika zdravo!

latin_to_cyrillic('Edna mechka ti vika zdravo!') // Една мечка ти вика здраво!
```
