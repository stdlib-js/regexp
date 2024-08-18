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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Regular Expressions

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Regular expressions.



<section class="usage">

## Usage

```javascript
import regexp from 'https://cdn.jsdelivr.net/gh/stdlib-js/regexp@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { reBasename, reBasenamePosix, reBasenameWindows, reColorHexadecimal, reDecimalNumber, reDirname, reDirnamePosix, reDirnameWindows, reDurationString, reEOL, reExtendedLengthPath, reExtname, reExtnamePosix, reExtnameWindows, reFilename, reFilenamePosix, reFilenameWindows, reFunctionName, reNativeFunction, reRegExp, reSemVer, reUncPath, reUtf16SurrogatePair, reUtf16UnpairedSurrogate, reWhitespace, regexp2json, reviveRegExp } from 'https://cdn.jsdelivr.net/gh/stdlib-js/regexp@esm/index.mjs';
```

#### regexp

Namespace containing regular expressions.

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
-   <span class="signature">[`reDurationString()`][@stdlib/regexp/duration-string]</span><span class="delimiter">: </span><span class="description">regular expression to match a duration string.</span>
-   <span class="signature">[`reEOL( [options] )`][@stdlib/regexp/eol]</span><span class="delimiter">: </span><span class="description">regular expression to match a newline character sequence.</span>
-   <span class="signature">[`reExtendedLengthPath()`][@stdlib/regexp/extended-length-path]</span><span class="delimiter">: </span><span class="description">regular expression to detect an extended-length path.</span>
-   <span class="signature">[`reExtnamePosix()`][@stdlib/regexp/extname-posix]</span><span class="delimiter">: </span><span class="description">regular expression to capture a POSIX filename extension.</span>
-   <span class="signature">[`reExtnameWindows()`][@stdlib/regexp/extname-windows]</span><span class="delimiter">: </span><span class="description">regular expression to capture a Windows filename extension.</span>
-   <span class="signature">[`reExtname( [platform] )`][@stdlib/regexp/extname]</span><span class="delimiter">: </span><span class="description">regular expression to capture a filename extension.</span>
-   <span class="signature">[`reFilenamePosix()`][@stdlib/regexp/filename-posix]</span><span class="delimiter">: </span><span class="description">regular expression to split a POSIX filename.</span>
-   <span class="signature">[`reFilenameWindows()`][@stdlib/regexp/filename-windows]</span><span class="delimiter">: </span><span class="description">regular expression to split a Windows filename.</span>
-   <span class="signature">[`reFilename( [platform] )`][@stdlib/regexp/filename]</span><span class="delimiter">: </span><span class="description">regular expression to split a filename.</span>
-   <span class="signature">[`reFunctionName()`][@stdlib/regexp/function-name]</span><span class="delimiter">: </span><span class="description">regular expression to capture a function name.</span>
-   <span class="signature">[`reNativeFunction()`][@stdlib/regexp/native-function]</span><span class="delimiter">: </span><span class="description">regular expression to match a native function.</span>
-   <span class="signature">[`reRegExp()`][@stdlib/regexp/regexp]</span><span class="delimiter">: </span><span class="description">regular expression to parse a regular expression string.</span>
-   <span class="signature">[`reviveRegExp( key, value )`][@stdlib/regexp/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized regular expression.</span>
-   <span class="signature">[`reSemVer()`][@stdlib/regexp/semver]</span><span class="delimiter">: </span><span class="description">regular expression to match a semantic version string.</span>
-   <span class="signature">[`regexp2json( regexp )`][@stdlib/regexp/to-json]</span><span class="delimiter">: </span><span class="description">return a JSON representation of a regular expression.</span>
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils/keys@esm/index.mjs';
import regexp from 'https://cdn.jsdelivr.net/gh/stdlib-js/regexp@esm/index.mjs';

console.log( objectKeys( regexp ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/regexp.svg
[npm-url]: https://npmjs.org/package/@stdlib/regexp

[test-image]: https://github.com/stdlib-js/regexp/actions/workflows/test.yml/badge.svg?branch=v0.3.1
[test-url]: https://github.com/stdlib-js/regexp/actions/workflows/test.yml?query=branch:v0.3.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/regexp/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/regexp?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/regexp.svg
[dependencies-url]: https://david-dm.org/stdlib-js/regexp/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/regexp/tree/deno
[deno-readme]: https://github.com/stdlib-js/regexp/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/regexp/tree/umd
[umd-readme]: https://github.com/stdlib-js/regexp/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/regexp/tree/esm
[esm-readme]: https://github.com/stdlib-js/regexp/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/regexp/blob/main/branches.md

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

[@stdlib/regexp/duration-string]: https://github.com/stdlib-js/regexp/tree/main/duration-string

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

[@stdlib/regexp/reviver]: https://github.com/stdlib-js/regexp/tree/main/reviver

[@stdlib/regexp/semver]: https://github.com/stdlib-js/regexp/tree/main/semver

[@stdlib/regexp/to-json]: https://github.com/stdlib-js/regexp/tree/main/to-json

[@stdlib/regexp/unc-path]: https://github.com/stdlib-js/regexp/tree/main/unc-path

[@stdlib/regexp/utf16-surrogate-pair]: https://github.com/stdlib-js/regexp/tree/main/utf16-surrogate-pair

[@stdlib/regexp/utf16-unpaired-surrogate]: https://github.com/stdlib-js/regexp/tree/main/utf16-unpaired-surrogate

[@stdlib/regexp/whitespace]: https://github.com/stdlib-js/regexp/tree/main/whitespace

<!-- </toc-links> -->

</section>

<!-- /.links -->
