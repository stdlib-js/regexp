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

# reExtname

> [Regular expression][regexp] to capture a filename extension.

<section class="usage">

## Usage

```javascript
var reExtname = require( '@stdlib/regexp/extname' );
```

#### reExtname( \[platform] )

Returns a [regular expression][regexp] to capture a filename extension.

```javascript
var RE = reExtname();
// returns <RegExp>

RE = reExtname( 'posix' );
// returns <RegExp>

var ext = RE.exec( '/foo/bar/index.js' )[ 1 ];
// returns '.js'

RE = reExtname( 'win32' );
// returns <RegExp>

ext = RE.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
// returns '.js'
```

#### reExtname.REGEXP

[Regular expression][regexp] to capture a filename extension.

```javascript
var bool = ( reExtname.REGEXP.toString() === reExtname().toString() );
// returns true
```

#### reExtname.REGEXP_POSIX

[Regular expression][@stdlib/regexp/extname-posix] to capture a [POSIX][posix] filename extension.

```javascript
var ext = reExtname.REGEXP_POSIX.exec( '/foo/bar/index.js' )[ 1 ];
// returns '.js'
```

#### reExtname.REGEXP_WIN32

[Regular expression][@stdlib/regexp/extname-windows] to capture a Windows filename extension.

```javascript
var ext = reExtname.REGEXP_WIN32.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
// returns '.js'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The as `REGEXP` exported [regular expression][regexp] is [platform][@stdlib/assert/is-windows]-dependent. If the current process is running on Windows, `REGEXP === REGEXP_WIN32`; otherwise, `REGEXP === REGEXP_POSIX`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reExtname = require( '@stdlib/regexp/extname' );
var RE_EXTNAME = reExtname();
var ext;

// Assuming a POSIX platform...
ext = RE_EXTNAME.exec( '/foo/bar/index.js' )[ 1 ];
// returns '.js'

ext = reExtname.REGEXP_WIN32.exec( '/foo/bar/home.html' )[ 1 ];
// returns '.html'

ext = reExtname.REGEXP_WIN32.exec( 'C:\\foo\\bar\\home.html' )[ 1 ];
// returns '.html'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp/extname-posix`][@stdlib/regexp/extname-posix]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture a POSIX filename extension.</span>
-   <span class="package-name">[`@stdlib/regexp/extname-windows`][@stdlib/regexp/extname-windows]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture a Windows filename extension.</span>
-   <span class="package-name">[`@stdlib/utils/extname`][@stdlib/utils/extname]</span><span class="delimiter">: </span><span class="description">return a filename extension.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[posix]: https://en.wikipedia.org/wiki/POSIX

[@stdlib/assert/is-windows]: https://github.com/stdlib-js/assert-is-windows

<!-- <related-links> -->

[@stdlib/regexp/extname-posix]: https://github.com/stdlib-js/regexp/tree/main/extname-posix

[@stdlib/regexp/extname-windows]: https://github.com/stdlib-js/regexp/tree/main/extname-windows

[@stdlib/utils/extname]: https://github.com/stdlib-js/utils-extname

<!-- </related-links> -->

</section>

<!-- /.links -->
