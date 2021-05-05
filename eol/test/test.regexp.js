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

var tape = require( 'tape' );
var RE = require( './../lib/regexp.js' );


// TESTS //

tape( 'main export is a regular expression', function test( t ) {
	t.ok( true, __filename );
	t.equal( RE instanceof RegExp, true, 'main export is a regular expression' );
	t.end();
});

tape( 'the regular expression matches newline character sequences', function test( t ) {
	var values;
	var i;

	values = [
		'\r\n',
		'\n'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( RE.test( values[ i ] ), true, 'matches when provided '+values[i] );
	}
	t.end();
});

tape( 'the regular expression does not match escaped sequences or non-matching strings', function test( t ) {
	var values;
	var i;

	values = [
		'\\r\\n',
		'\\n',
		'beep'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( RE.test( values[ i ] ), false, 'does not match when provided '+values[i] );
	}
	t.end();
});
