/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var pkg = require( './../package.json' ).name;
var reDirnamePosix = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var out;
	var str;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = '/foo/bar/beep/boop'+fromCodePoint( 97 + (i%26) )+'.js';
		out = reDirnamePosix.REGEXP.exec( str );
		if ( !out || !isString( out[ 1 ] ) ) {
			b.fail( 'should capture a dirname' );
		}
	}
	b.toc();
	if ( !out || !isString( out[ 1 ] ) ) {
		b.fail( 'should capture a dirname' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
