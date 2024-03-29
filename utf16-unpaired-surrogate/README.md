<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# reUtf16UnpairedSurrogate

> [Regular expression][mdn-regexp] to match an unpaired [UTF-16][utf-16] surrogate.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var reUtf16UnpairedSurrogate = require( '@stdlib/regexp/utf16-unpaired-surrogate' );
```

#### reUtf16UnpairedSurrogate()

Returns a [regular expression][mdn-regexp] to match an unpaired [UTF-16][utf-16] surrogate. 

<!-- eslint-disable id-length -->

```javascript
var RE_UTF16_UNPAIRED_SURROGATE = reUtf16UnpairedSurrogate();

var bool = RE_UTF16_UNPAIRED_SURROGATE.test( 'abc\uD800def' );
// returns true
```

#### reUtf16UnpairedSurrogate.REGEXP

[Regular expression][mdn-regexp] to match an unpaired [UTF-16][utf-16] surrogate. 

```javascript
var bool = reUtf16UnpairedSurrogate.REGEXP.test( 'abc\uD800def' );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var reUtf16UnpairedSurrogate = require( '@stdlib/regexp/utf16-unpaired-surrogate' );

var RE_UTF16_UNPAIRED_SURROGATE = reUtf16UnpairedSurrogate();

var bool = RE_UTF16_UNPAIRED_SURROGATE.test( '\uD800' );
// returns true

bool = RE_UTF16_UNPAIRED_SURROGATE.test( '\uDC00' );
// returns true

bool = RE_UTF16_UNPAIRED_SURROGATE.test( 'abc' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp/utf16-surrogate-pair`][@stdlib/regexp/utf16-surrogate-pair]</span><span class="delimiter">: </span><span class="description">return a regular expression to match a UTF-16 surrogate pair.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[utf-16]: https://en.wikipedia.org/wiki/UTF-16

<!-- <related-links> -->

[@stdlib/regexp/utf16-surrogate-pair]: https://github.com/stdlib-js/regexp/tree/main/utf16-surrogate-pair

<!-- </related-links> -->

</section>

<!-- /.links -->
