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

# reDirname

> [Regular expression][regexp] to capture a path [dirname][dirname].

<section class="usage">

## Usage

```javascript
var reDirname = require( '@stdlib/regexp/dirname' );
```

#### reDirname( \[platform] )

Returns a [regular expression][regexp] to capture a path [dirname][dirname].

```javascript
var RE = reDirname();
// returns <RegExp>

RE = reDirname( 'posix' );
// returns <RegExp>

var dir = RE.exec( '/foo/bar/index.js' )[ 1 ];
// returns '/foo/bar'

RE = reDirname( 'win32' );
// returns <RegExp>

dir = RE.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
// returns 'C:\foo\bar'
```

#### reBasename.REGEXP

[Regular expression][regexp] to capture a path dirname.

```javascript
var bool = ( reDirname.REGEXP.toString() === reDirname().toString() );
// returns true
```

#### reDirname.REGEXP_POSIX

[Regular expression][@stdlib/regexp/dirname-posix] to capture a [POSIX][posix] path dirname. 

```javascript
var dir = reDirname.REGEXP_POSIX.exec( '/foo/bar/index.js' )[ 1 ];
// returns '/foo/bar'
```

#### reDirname.REGEXP_WIN32

[Regular expression][@stdlib/regexp/dirname-windows] to capture a Windows path dirname. 

```javascript
var dir = reDirname.REGEXP_WIN32.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
// returns 'C:\foo\bar'
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
var reDirname = require( '@stdlib/regexp/dirname' );
var RE_DIRNAME = reDirname();
var dir;

// Assuming a POSIX platform...
dir = RE_DIRNAME.exec( '/foo/bar/index.js' )[ 1 ];
// returns '/foo/bar'

dir = reDirname.REGEXP_POSIX.exec( '/foo/bar/home.html' )[ 1 ];
// returns '/foo/bar'

dir = reDirname.REGEXP_WIN32.exec( 'C:\\foo\\bar\\home.html' )[ 1 ];
// returns 'C:\foo\bar'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp/dirname-posix`][@stdlib/regexp/dirname-posix]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture a POSIX path dirname.</span>
-   <span class="package-name">[`@stdlib/regexp/dirname-windows`][@stdlib/regexp/dirname-windows]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture a Windows path dirname.</span>
-   <span class="package-name">[`@stdlib/utils/dirname`][@stdlib/utils/dirname]</span><span class="delimiter">: </span><span class="description">return a directory name.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[dirname]: https://en.wikipedia.org/wiki/Dirname

[posix]: https://en.wikipedia.org/wiki/POSIX

[@stdlib/assert/is-windows]: https://github.com/stdlib-js/assert-is-windows

<!-- <related-links> -->

[@stdlib/regexp/dirname-posix]: https://github.com/stdlib-js/regexp/tree/main/dirname-posix

[@stdlib/regexp/dirname-windows]: https://github.com/stdlib-js/regexp/tree/main/dirname-windows

[@stdlib/utils/dirname]: https://github.com/stdlib-js/utils-dirname

<!-- </related-links> -->

</section>

<!-- /.links -->
