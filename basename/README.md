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

# reBasename

> [Regular expression][regexp] to capture the last part of a path.

<section class="usage">

## Usage

```javascript
var reBasename = require( '@stdlib/regexp/basename' );
```

#### reBasename( \[platform] )

Returns a [regular expression][regexp] to capture the last part of a path.

```javascript
var RE = reBasename();
// returns <RegExp>

RE = reBasename( 'posix' );
// returns <RegExp>

var base = RE.exec( '/foo/bar/index.js' )[ 1 ];
// returns 'index.js'

RE = reBasename( 'win32' );
// returns <RegExp>

base = RE.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
// returns 'index.js'
```

#### reBasename.REGEXP

[Regular expression][regexp] to capture the last part of a path.

```javascript
var bool = ( reBasename.REGEXP.toString() === reBasename().toString() );
// returns true
```

#### reBasename.REGEXP_POSIX

[Regular expression][@stdlib/regexp/basename-posix] to capture the last part of a [POSIX][posix] path. 

```javascript
var base = reBasename.REGEXP_POSIX.exec( '/foo/bar/index.js' )[ 1 ];
// returns 'index.js'
```

#### reBasename.REGEXP_WIN32

[Regular expression][@stdlib/regexp/basename-windows] to capture the last part of a Windows path. 

```javascript
var base = reBasename.REGEXP_WIN32.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
// returns 'index.js'
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
var reBasename = require( '@stdlib/regexp/basename' );
var RE_BASENAME = reBasename();

// Assuming a POSIX platform...
var base = RE_BASENAME.exec( '/foo/bar/index.js' )[ 1 ];
// returns 'index.js'

base = reBasename.REGEXP_POSIX.exec( '/foo/bar/home.html' )[ 1 ];
// returns 'home.html'

base = reBasename.REGEXP_WIN32.exec( 'C:\\foo\\bar\\home.html' )[ 1 ];
// returns 'home.html'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp/basename-posix`][@stdlib/regexp/basename-posix]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture the last part of a POSIX path.</span>
-   <span class="package-name">[`@stdlib/regexp/basename-windows`][@stdlib/regexp/basename-windows]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture the last part of a Windows path.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[posix]: https://en.wikipedia.org/wiki/POSIX

[@stdlib/assert/is-windows]: https://github.com/stdlib-js/assert-is-windows

<!-- <related-links> -->

[@stdlib/regexp/basename-posix]: https://github.com/stdlib-js/regexp/tree/main/basename-posix

[@stdlib/regexp/basename-windows]: https://github.com/stdlib-js/regexp/tree/main/basename-windows

<!-- </related-links> -->

</section>

<!-- /.links -->
