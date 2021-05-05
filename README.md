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

# Regular Expressions

> Standard library regular expressions.

<section class="installation">

## Installation

``` bash
$ npm install @stdlib/regexp
```

</section>

<section class="usage">

## Usage

```javascript
var regexp = require( '@stdlib/regexp' );
```

#### regexp

Standard library regular expressions.

```javascript
var re = regexp;
// returns {...}
```

The following regular expressions are currently exported:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`reBasenamePosix()`][@stdlib/regexp/basename-posix]</span><span class="delimiter">: </span><span class="description">regular expression to capture the last part of a POSIX path.</span>
-   <span class="signature">[`reBasenameWindows()`][@stdlib/regexp/basename-windows]</span><span class="delimiter">: </span><span class="description">regular expression to capture the last part of a Windows path.</span>
-   <span class="signature">[`reBasename( [platform] )`][@stdlib/regexp/basename]</span><span class="delimiter">: </span><span class="description">regular expression to capture the last part of a path.</span>
-   <span class="signature">[`reColorHexadecimal( [mode] )`][@stdlib/regexp/color-hexadecimal]</span><span class="delimiter">: </span><span class="description">regular expression to match a hexadecimal color.</span>
-   <span class="signature">[`reDecimalNumber( [options] )`][@stdlib/regexp/decimal-number]</span><span class="delimiter">: </span><span class="description">regular expression to match a decimal number.</span>
-   <span class="signature">[`reDirnamePosix()`][@stdlib/regexp/dirname-posix]</span><span class="delimiter">: </span><span class="description">regular expression to capture a POSIX path dirname.</span>
-   <span class="signature">[`reDirnameWindows()`][@stdlib/regexp/dirname-windows]</span><span class="delimiter">: </span><span class="description">regular expression to capture a Windows path dirname.</span>
-   <span class="signature">[`reDirname( [platform] )`][@stdlib/regexp/dirname]</span><span class="delimiter">: </span><span class="description">regular expression to capture a path dirname.</span>
-   <span class="signature">[`reEOL( [options] )`][@stdlib/regexp/eol]</span><span class="delimiter">: </span><span class="description">regular expression to match a newline character sequence.</span>
-   <span class="signature">[`reExtendedLengthPath()`][@stdlib/regexp/extended-length-path]</span><span class="delimiter">: </span><span class="description">regular expression to detect an extended-length path.</span>
-   <span class="signature">[`reExtnamePosix()`][@stdlib/regexp/extname-posix]</span><span class="delimiter">: </span><span class="description">regular expression to capture a POSIX filename extension.</span>
-   <span class="signature">[`reExtnameWindows()`][@stdlib/regexp/extname-windows]</span><span class="delimiter">: </span><span class="description">regular expression to capture a Windows filename extension.</span>
-   <span class="signature">[`reExtname( [platform] )`][@stdlib/regexp/extname]</span><span class="delimiter">: </span><span class="description">regular expression to capture a filename extension.</span>
-   <span class="signature">[`reFilenamePosix()`][@stdlib/regexp/filename-posix]</span><span class="delimiter">: </span><span class="description">regular expression to split a POSIX filename.</span>
-   <span class="signature">[`reFilenameWindows()`][@stdlib/regexp/filename-windows]</span><span class="delimiter">: </span><span class="description">regular expression to split a Windows filename.</span>
-   <span class="signature">[`reFilename( [platform] )`][@stdlib/regexp/filename]</span><span class="delimiter">: </span><span class="description">regular expression to split a filename.</span>
-   <span class="signature">[`reFunctionName`][@stdlib/regexp/function-name]</span><span class="delimiter">: </span><span class="description">regular expression to capture a function name.</span>
-   <span class="signature">[`reNativeFunction()`][@stdlib/regexp/native-function]</span><span class="delimiter">: </span><span class="description">regular expression to match a native function.</span>
-   <span class="signature">[`reRegExp()`][@stdlib/regexp/regexp]</span><span class="delimiter">: </span><span class="description">regular expression to parse a regular expression string.</span>
-   <span class="signature">[`reUncPath()`][@stdlib/regexp/unc-path]</span><span class="delimiter">: </span><span class="description">regular expression to parse a UNC path.</span>
-   <span class="signature">[`reUtf16SurrogatePair()`][@stdlib/regexp/utf16-surrogate-pair]</span><span class="delimiter">: </span><span class="description">regular expression to match a UTF-16 surrogate pair.</span>
-   <span class="signature">[`reUtf16UnpairedSurrogate()`][@stdlib/regexp/utf16-unpaired-surrogate]</span><span class="delimiter">: </span><span class="description">regular expression to match an unpaired UTF-16 surrogate.</span>
-   <span class="signature">[`reWhitespace( [options] )`][@stdlib/regexp/whitespace]</span><span class="delimiter">: </span><span class="description">regular expression to match a white space character.</span>

</div>

<!-- </toc> -->

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var regexp = require( '@stdlib/regexp' );

console.log( objectKeys( regexp ) );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/regexp/main/LICENSE

<!-- <toc-links> -->

[@stdlib/regexp/basename-posix]: https://github.com/stdlib-js/regexp/tree/main/basename-posix

[@stdlib/regexp/basename-windows]: https://github.com/stdlib-js/regexp/tree/main/basename-windows

[@stdlib/regexp/basename]: https://github.com/stdlib-js/regexp/tree/main/basename

[@stdlib/regexp/color-hexadecimal]: https://github.com/stdlib-js/regexp/tree/main/color-hexadecimal

[@stdlib/regexp/decimal-number]: https://github.com/stdlib-js/regexp/tree/main/decimal-number

[@stdlib/regexp/dirname-posix]: https://github.com/stdlib-js/regexp/tree/main/dirname-posix

[@stdlib/regexp/dirname-windows]: https://github.com/stdlib-js/regexp/tree/main/dirname-windows

[@stdlib/regexp/dirname]: https://github.com/stdlib-js/regexp/tree/main/dirname

[@stdlib/regexp/eol]: https://github.com/stdlib-js/regexp/tree/main/eol

[@stdlib/regexp/extended-length-path]: https://github.com/stdlib-js/regexp/tree/main/extended-length-path

[@stdlib/regexp/extname-posix]: https://github.com/stdlib-js/regexp/tree/main/extname-posix

[@stdlib/regexp/extname-windows]: https://github.com/stdlib-js/regexp/tree/main/extname-windows

[@stdlib/regexp/extname]: https://github.com/stdlib-js/regexp/tree/main/extname

[@stdlib/regexp/filename-posix]: https://github.com/stdlib-js/regexp/tree/main/filename-posix

[@stdlib/regexp/filename-windows]: https://github.com/stdlib-js/regexp/tree/main/filename-windows

[@stdlib/regexp/filename]: https://github.com/stdlib-js/regexp/tree/main/filename

[@stdlib/regexp/function-name]: https://github.com/stdlib-js/regexp/tree/main/function-name

[@stdlib/regexp/native-function]: https://github.com/stdlib-js/regexp/tree/main/native-function

[@stdlib/regexp/regexp]: https://github.com/stdlib-js/regexp/tree/main/regexp

[@stdlib/regexp/unc-path]: https://github.com/stdlib-js/regexp/tree/main/unc-path

[@stdlib/regexp/utf16-surrogate-pair]: https://github.com/stdlib-js/regexp/tree/main/utf16-surrogate-pair

[@stdlib/regexp/utf16-unpaired-surrogate]: https://github.com/stdlib-js/regexp/tree/main/utf16-unpaired-surrogate

[@stdlib/regexp/whitespace]: https://github.com/stdlib-js/regexp/tree/main/whitespace

<!-- </toc-links> -->

</section>

<!-- /.links -->
