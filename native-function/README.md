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

# reNativeFunction

> [Regular expression][regexp] to match a native function.

<section class="usage">

## Usage

```javascript
var reNativeFunction = require( '@stdlib/regexp/native-function' );
```

#### reNativeFunction()

Returns a [regular expression][regexp] to match a native `function`.

```javascript
var RE_NATIVE_FUNCTION = reNativeFunction();
var bool = RE_NATIVE_FUNCTION.test( Date.toString() );
// returns true
```

#### reNativeFunction.REGEXP

[Regular expression][regexp] to match a native `function`.

```javascript
var bool = reNativeFunction.REGEXP.test( Date.toString() );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-empty-function, stdlib/no-builtin-math -->

<!-- eslint no-undef: "error" -->

```javascript
var Int8Array = require( '@stdlib/array/int8' );
var reNativeFunction = require( '@stdlib/regexp/native-function' );

var RE_NATIVE_FUNCTION = reNativeFunction();
function isNativeFunction( fcn ) {
    return RE_NATIVE_FUNCTION.test( fcn.toString() );
}

var bool = isNativeFunction( Math.sqrt );
// returns true

bool = isNativeFunction( String );
// returns true

bool = isNativeFunction( Int8Array );
// returns true

bool = isNativeFunction( Date );
// returns true

bool = isNativeFunction( function noop() {} );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp/function-name`][@stdlib/regexp/function-name]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture a function name.</span>
-   <span class="package-name">[`@stdlib/utils/function-name`][@stdlib/utils/function-name]</span><span class="delimiter">: </span><span class="description">determine a function's name.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/regexp/function-name]: https://github.com/stdlib-js/regexp/tree/main/function-name

[@stdlib/utils/function-name]: https://github.com/stdlib-js/utils-function-name

<!-- </related-links> -->

</section>

<!-- /.links -->
