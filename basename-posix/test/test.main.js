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
var reBasenamePosix = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reBasenamePosix, 'function', 'main export is a function' );
	t.end();
});

tape( 'the returned regular expression captures the last part of a POSIX path (basename)', function test( t ) {
	var expected;
	var values;
	var base;
	var RE;
	var i;

	RE = reBasenamePosix();

	values = [
		'index.js',
		'/foo/bar/home.html',
		'/foo/bar/home',
		'foo/file.pdf',
		'./foo/file',
		'./index.js/',
		'foo/bar/home.html/',
		'.gitigno.re',
		'/foo/bar/.editorconf.ig',
		'main/.travis.yml',
		'./foo foo foo/bar bar_bar/',
		'./../../foo/bar',
		'./../../',
		'./',
		'.',
		'boop.'
	];

	expected = [
		'index.js',
		'home.html',
		'home',
		'file.pdf',
		'file',
		'index.js',
		'home.html',
		'.gitigno.re',
		'.editorconf.ig',
		'.travis.yml',
		'bar bar_bar',
		'bar',
		'..',
		'.',
		'.',
		'boop.'
	];

	for ( i = 0; i < values.length; i++ ) {
		base = RE.exec( values[ i ] )[ 1 ];
		t.strictEqual( base, expected[ i ], values[ i ] );
	}
	t.end();
});
