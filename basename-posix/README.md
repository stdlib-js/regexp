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

# reBasenamePosix

> [Regular expression][regexp] to capture the last part of a [POSIX][posix] path.

<section class="usage">

## Usage

```javascript
var reBasenamePosix = require( '@stdlib/regexp/basename-posix' );
```

#### reBasenamePosix()

Returns a [regular expression][regexp] to capture the last part of a [POSIX][posix] path. 

```javascript
var RE_BASENAME_POSIX = reBasenamePosix();
var base = RE_BASENAME_POSIX.exec( 'foo/bar/index.js' )[ 1 ];
// returns 'index.js'
```

#### reBasenamePosix.REGEXP

[Regular expression][regexp] to capture the last part of a [POSIX][posix] path. 

```javascript
var base = reBasenamePosix.REGEXP.exec( 'foo/bar/index.js' )[ 1 ];
// returns 'index.js'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reBasenamePosix = require( '@stdlib/regexp/basename-posix' );

var RE_BASENAME_POSIX = reBasenamePosix();
var base = RE_BASENAME_POSIX.exec( 'index.js' )[ 1 ];
// returns 'index.js'

base = RE_BASENAME_POSIX.exec( '/foo/bar/home.html' )[ 1 ];
// returns 'home.html'

base = RE_BASENAME_POSIX.exec( 'foo/file.pdf' )[ 1 ];
// returns 'file.pdf'

base = RE_BASENAME_POSIX.exec( 'beep.' )[ 1 ];
// returns 'beep.'

base = RE_BASENAME_POSIX.exec( '' )[ 1 ];
// returns ''

base = RE_BASENAME_POSIX.exec( '/foo/bar/file' )[ 1 ];
// returns 'file'

base = RE_BASENAME_POSIX.exec( '/foo/bar/.gitignore' )[ 1 ];
// returns '.gitignore'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp/basename`][@stdlib/regexp/basename]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture the last part of a path.</span>
-   <span class="package-name">[`@stdlib/regexp/basename-windows`][@stdlib/regexp/basename-windows]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture the last part of a Windows path.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[posix]: https://en.wikipedia.org/wiki/POSIX

<!-- <related-links> -->

[@stdlib/regexp/basename]: https://github.com/stdlib-js/regexp/tree/main/basename

[@stdlib/regexp/basename-windows]: https://github.com/stdlib-js/regexp/tree/main/basename-windows

<!-- </related-links> -->

</section>

<!-- /.links -->
