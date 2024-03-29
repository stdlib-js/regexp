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

# reFilename

> [Regular expression][mdn-regexp] to split a filename.

<section class="usage">

## Usage

```javascript
var reFilename = require( '@stdlib/regexp/filename' );
```

#### reFilename( \[platform] )

Returns a [regular expression][mdn-regexp] to split a filename.

```javascript
var RE = reFilename();
// returns <RegExp>

RE = reFilename( 'posix' );
// returns <RegExp>

var parts = RE.exec( '/foo/bar/index.js' ).slice();
/* returns
    [
        '/foo/bar/index.js',  // input value
        '/',                  // root
        'foo/bar/',           // dirname
        'index.js',           // basename
        '.js'                 // extname
    ]
*/

RE = reFilename( 'win32' );
// returns <RegExp>

parts = RE.exec( 'C:\\foo\\bar\\index.js' ).slice();
/* returns
    [
        'C:\\foo\\bar\\index.js',   // input value
        'C:',                       // device
        '\\',                       // slash
        'foo\\bar\\',               // dirname
        'index.js',                 // basename
        '.js'                       // extname
    ]
*/
```

#### reFilename.REGEXP

[Regular expression][mdn-regexp] to split a filename.

```javascript
var bool = ( reFilename.REGEXP.toString() === reFilename().toString() );
// returns true
```

#### reFilename.REGEXP_POSIX

[Regular expression][@stdlib/regexp/filename-posix] to split a [POSIX][posix] filename. 

```javascript
var parts = reFilename.REGEXP_POSIX.exec( '/foo/bar/index.js' ).slice();
/* returns
    [
        '/foo/bar/index.js',  // input value
        '/',                  // root
        'foo/bar/',           // dirname
        'index.js',           // basename
        '.js'                 // extname
    ]
*/
```

#### reFilename.REGEXP_WIN32

[Regular expression][@stdlib/regexp/filename-windows] to split a Windows filename.

```javascript
var parts = reFilename.REGEXP_WIN32.exec( 'C:\\foo\\bar\\index.js' ).slice();
/* returns
    [
        'C:\\foo\\bar\\index.js',   // input value
        'C:',                       // device
        '\\',                       // slash
        'foo\\bar\\',               // dirname
        'index.js',                 // basename
        '.js'                       // extname
    ]
*/
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The as `REGEXP` exported [regular expression][mdn-regexp] is [platform][@stdlib/assert/is-windows]-dependent. If the current process is running on Windows, `REGEXP === REGEXP_WIN32`; otherwise, `REGEXP === REGEXP_POSIX`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reFilename = require( '@stdlib/regexp/filename' );
var RE_FILENAME = reFilename();

// Assuming a POSIX platform...
var parts = RE_FILENAME.exec( '/foo/bar/index.js' ).slice();
/* returns
    [
        '/foo/bar/index.js',
        '/',
        'foo/bar/',
        'index.js',
        '.js'
    ]
*/

parts = reFilename.REGEXP_POSIX.exec( '/foo/bar/home.html' ).slice();
/* returns
    [
        '/foo/bar/home.html',
        '/',
        'foo/bar/',
        'home.html',
        '.html'
    ]
*/

parts = reFilename.REGEXP_WIN32.exec( 'C:\\foo\\bar\\home.html' ).slice();
/* returns
    [
        'C:\\foo\\bar\\home.html',
        'C:',
        '\\',
        'foo\\bar\\',
        'home.html',
        '.html'
    ]
*/
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp/filename-posix`][@stdlib/regexp/filename-posix]</span><span class="delimiter">: </span><span class="description">return a regular expression to split a POSIX filename.</span>
-   <span class="package-name">[`@stdlib/regexp/filename-windows`][@stdlib/regexp/filename-windows]</span><span class="delimiter">: </span><span class="description">return a regular expression to split a Windows filename.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[posix]: https://en.wikipedia.org/wiki/POSIX

[@stdlib/assert/is-windows]: https://github.com/stdlib-js/assert-is-windows

<!-- <related-links> -->

[@stdlib/regexp/filename-posix]: https://github.com/stdlib-js/regexp/tree/main/filename-posix

[@stdlib/regexp/filename-windows]: https://github.com/stdlib-js/regexp/tree/main/filename-windows

<!-- </related-links> -->

</section>

<!-- /.links -->
