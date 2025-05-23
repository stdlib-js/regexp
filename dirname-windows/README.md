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

# reDirnameWindows

> [Regular expression][regexp] to capture a Windows path [dirname][dirname].

<section class="usage">

## Usage

```javascript
var reDirnameWindows = require( '@stdlib/regexp/dirname-windows' );
```

#### reDirnameWindows()

Returns a [regular expression][regexp] to capture a Windows path [dirname][dirname].

```javascript
var RE_DIRNAME_WINDOWS = reDirnameWindows();
var dir = RE_DIRNAME_WINDOWS.exec( 'foo\\bar\\index.js' )[ 1 ];
// returns 'foo\bar'
```

#### reDirnameWindows.REGEXP

[Regular expression][regexp] to capture a Windows path [dirname][dirname].

```javascript
var dir = reDirnameWindows.REGEXP.exec( 'foo\\bar\\index.js' )[ 1 ];
// returns 'foo\bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reDirnameWindows = require( '@stdlib/regexp/dirname-windows' );

var RE_DIRNAME_WINDOWS = reDirnameWindows();

var dir = RE_DIRNAME_WINDOWS.exec( 'index.js' )[ 1 ];
// returns ''

dir = RE_DIRNAME_WINDOWS.exec( 'C:\\foo\\bar\\home.html' )[ 1 ];
// returns 'C:\foo\bar'

dir = RE_DIRNAME_WINDOWS.exec( 'foo\\file.pdf' )[ 1 ];
// returns 'foo'

dir = RE_DIRNAME_WINDOWS.exec( 'beep\\boop.' )[ 1 ];
// returns 'beep'

dir = RE_DIRNAME_WINDOWS.exec( '' )[ 1 ];
// returns ''

dir = RE_DIRNAME_WINDOWS.exec( '\\foo\\bar\\file' )[ 1 ];
// returns '\foo\bar'

dir = RE_DIRNAME_WINDOWS.exec( 'C:\\foo\\bar\\.gitignore' )[ 1 ];
// returns 'C:\foo\bar'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp/dirname`][@stdlib/regexp/dirname]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture a path dirname.</span>
-   <span class="package-name">[`@stdlib/regexp/dirname-posix`][@stdlib/regexp/dirname-posix]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture a POSIX path dirname.</span>
-   <span class="package-name">[`@stdlib/utils/dirname`][@stdlib/utils/dirname]</span><span class="delimiter">: </span><span class="description">return a directory name.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[dirname]: https://en.wikipedia.org/wiki/Dirname

<!-- <related-links> -->

[@stdlib/regexp/dirname]: https://github.com/stdlib-js/regexp/tree/main/dirname

[@stdlib/regexp/dirname-posix]: https://github.com/stdlib-js/regexp/tree/main/dirname-posix

[@stdlib/utils/dirname]: https://github.com/stdlib-js/utils-dirname

<!-- </related-links> -->

</section>

<!-- /.links -->
