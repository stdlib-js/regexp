<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# reviveRegExp

> Revive a JSON-serialized [regular expression][mdn-regexp].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reviveRegExp = require( '@stdlib/regexp/reviver' );
```

#### reviveRegExp( key, value )

Revives a JSON-serialized [regular expression][mdn-regexp].

```javascript
var parseJSON = require( '@stdlib/utils/parse-json' );

var str = '{"type":"RegExp","pattern":"ab+c","flags":""}';

var re = parseJSON( str, reviveRegExp );
// returns <RegExp>
```

For details on the JSON serialization format, see [`@stdlib/regexp/to-json`][@stdlib/regexp/to-json].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="examples">

## Examples

```javascript
var parseJSON = require( '@stdlib/utils/parse-json' );
var regexp2json = require( '@stdlib/regexp/to-json' );
var reviveRegExp = require( '@stdlib/regexp/reviver' );

var re1 = /ab+c/;
var json = regexp2json( re1 );

var str = JSON.stringify( json );
// returns '{"type":"RegExp","pattern":"ab+c","flags":""}'

var re2 = parseJSON( str, reviveRegExp );
// returns <RegExp>

var bool = ( re1.toString() === re2.toString() );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp/to-json`][@stdlib/regexp/to-json]</span><span class="delimiter">: </span><span class="description">return a JSON representation of a regular expression.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[@stdlib/regexp/to-json]: https://github.com/stdlib-js/regexp/tree/main/to-json

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
