/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import reBasename = require( './../../basename' );
import reBasenamePosix = require( './../../basename-posix' );
import reBasenameWindows = require( './../../basename-windows' );
import reColorHexadecimal = require( './../../color-hexadecimal' );
import reDecimalNumber = require( './../../decimal-number' );
import reDirname = require( './../../dirname' );
import reDirnamePosix = require( './../../dirname-posix' );
import reDirnameWindows = require( './../../dirname-windows' );
import reDurationString = require( './../../duration-string' );
import reEOL = require( './../../eol' );
import reExtendedLengthPath = require( './../../extended-length-path' );
import reExtname = require( './../../extname' );
import reExtnamePosix = require( './../../extname-posix' );
import reExtnameWindows = require( './../../extname-windows' );
import reFilename = require( './../../filename' );
import reFilenamePosix = require( './../../filename-posix' );
import reFilenameWindows = require( './../../filename-windows' );
import reFunctionName = require( './../../function-name' );
import reNativeFunction = require( './../../native-function' );
import reRegExp = require( './../../regexp' );
import reviveRegExp = require( './../../reviver' );
import reSemVer = require( './../../semver' );
import regexp2json = require( './../../to-json' );
import reUncPath = require( './../../unc-path' );
import reUtf16SurrogatePair = require( './../../utf16-surrogate-pair' );
import reUtf16UnpairedSurrogate = require( './../../utf16-unpaired-surrogate' );
import reWhitespace = require( './../../whitespace' );

/**
* Interface describing the `regexp` namespace.
*/
interface Namespace {
	/**
	* Returns a regular expression to capture the last part of a path.
	*
	* @param platform - path platform (`win32` or `posix`)
	* @returns regular expression
	*
	* @example
	* var RE_BASENAME = ns.reBasename();
	* // returns <RegExp>
	*
	* @example
	* var RE_BASENAME = ns.reBasename( 'posix' );
	* var base = RE_BASENAME.exec( '/foo/bar/index.js' )[ 1 ];
	* // returns 'index.js'
	*
	* @example
	* var RE_BASENAME = ns.reBasename( 'win32' );
	* var base = RE_BASENAME.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
	* // returns 'index.js'
	*/
	reBasename: typeof reBasename;

	/**
	* Returns a regular expression to capture the last part of a POSIX path.
	*
	* @returns regular expression
	*
	* @example
	* var RE_BASENAME_POSIX = ns.reBasenamePosix();
	* var base = RE_BASENAME_POSIX.exec( 'foo/bar/index.js' )[ 1 ];
	* // returns 'index.js'
	*
	* @example
	* var base = ns.reBasenamePosix.REGEXP.exec( 'foo/bar/index.js' )[ 1 ]
	* // returns 'index.js'
	*/
	reBasenamePosix: typeof reBasenamePosix;

	/**
	* Returns a regular expression to capture a Windows path basename.
	*
	* @returns regular expression
	*
	* @example
	* var RE_BASENAME_WINDOWS = ns.reBasenameWindows();
	*
	* var bool = RE_BASENAME_WINDOWS.test( '\\\\?\\C:\\foo\\bar' );
	* // returns true
	*
	* @example
	* var match = ns.reBasenameWindows.REGEXP.exec( 'foo\\file.pdf' )[ 1 ];
	* // returns 'file.pdf'
	*/
	reBasenameWindows: typeof reBasenameWindows;

	/**
	* Returns a regular expression to match a hexadecimal color.
	*
	* @param mode - color format  (`full`, `shorthand`, or `either`)
	* @returns regular expression
	*
	* @example
	* var RE = ns.reColorHexadecimal();
	* // returns <RegExp>
	*
	* var bool = RE.test( 'ffffff' );
	* // returns true
	*
	* bool = RE.test( '000' );
	* // returns false
	*
	* @example
	* var bool = ns.reColorHexadecimal.REGEXP.test( 'ffffff' );
	* // returns true
	*/
	reColorHexadecimal: typeof reColorHexadecimal;

	/**
	* Returns a regular expression to match a decimal number.
	*
	* @param options - function options
	* @param options.flags - regular expression flags (default: '')
	* @param options.capture - boolean indicating whether to create a capture group for the match (default: false)
	* @returns regular expression
	*
	* @example
	* var RE_DECIMAL_NUMBER = ns.reDecimalNumber();
	*
	* var bool = RE_DECIMAL_NUMBER.test( 'beep 1.0 boop' );
	* // returns true
	*
	* @example
	* var RE_DECIMAL_NUMBER = ns.reDecimalNumber({
	*     'flags': 'gm'
	* });
	* var bool = RE_DECIMAL_NUMBER.test( 'beep 1.0 boop' );
	* // returns true
	*
	* @example
	* var bool = ns.reDecimalNumber.REGEXP.test( '2:3' );
	* // returns false
	*/
	reDecimalNumber: typeof reDecimalNumber;

	/**
	* Returns a regular expression to capture a path dirname.
	*
	* @param platform - path platform (`win32` or `posix`)
	* @returns regular expression
	*
	* @example
	* var RE_DIRNAME = ns.reDirname();
	* // returns <RegExp>
	*
	* @example
	* var RE_DIRNAME = ns.reDirname( 'posix' );
	* var dir = RE_DIRNAME.exec( '/foo/bar/index.js' )[ 1 ];
	* // returns '/foo/bar/'
	*
	* @example
	* var RE_DIRNAME = ns.reDirname( 'win32' );
	* var dir = RE_DIRNAME.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
	* // returns 'C:\foo\bar'
	*/
	reDirname: typeof reDirname;

	/**
	* Returns a regular expression to capture a POSIX path dirname.
	*
	* @returns regular expression
	*
	* @example
	* var RE_DIRNAME_POSIX = ns.reDirnamePosix();
	* var dir = RE_DIRNAME_POSIX.exec( 'foo/bar/index.js' )[ 1 ];
	* // returns 'foo/bar'
	*
	* @example
	* var dir = ns.reDirnamePosix.REGEXP.exec( 'foo/bar/index.js' )[ 1 ];
	* // returns 'foo/bar'
	*/
	reDirnamePosix: typeof reDirnamePosix;

	/**
	* Returns a regular expression to capture a Windows path dirname.
	*
	* @returns regular expression
	*
	* @example
	* var RE_DIRNAME_WINDOWS = ns.reDirnameWindows();
	* var dir = RE_DIRNAME_WINDOWS.exec( 'foo\\bar\\index.js' )[ 1 ];
	* // returns 'foo\bar'
	*
	* @example
	* var dir = ns.reDirnameWindows.REGEXP.exec( 'foo\\bar\\index.js' )[ 1 ];
	* // returns 'foo\bar'
	*/
	reDirnameWindows: typeof reDirnameWindows;

	/**
	* Returns a regular expression to match a duration string.
	*
	* ## Notes
	*
	* -   A duration string is a string containing a sequence of time units. A time unit is a nonnegative integer followed by a unit identifier. The following unit identifiers are supported:
	*
	*     -   `d`: days
	*     -   `h`: hours
	*     -   `m`: minutes
	*     -   `s`: seconds
	*     -   `ms`: milliseconds
	*
	*     For example, the string `1m3s10ms` is a duration string containing three time units: `1m` (1 minute), `3s` (3 seconds), and `10ms` (10 milliseconds). The string `60m` is a duration string containing a single time unit: `60m` (60 minutes). Time units must be supplied in descending order of magnitude (i.e., days, hours, minutes, seconds, milliseconds).
	*
	* -   Duration strings are case insensitive. For example, the string `1M3S10MS` is equivalent to `1m3s10ms`.
	*
	* -   The regular expression captures the following groups:
	*
	*     1.  The days component.
	*     2.  The hours component.
	*     3.  The minutes component.
	*     4.  The seconds component.
	*     5.  The milliseconds component.
	*
	* @returns regular expression
	*
	* @example
	* var RE_DURATION = ns.reDurationString();
	* // returns <RegExp>
	*
	* var bool = RE_DURATION.test( '3d23h' );
	* // returns true
	*
	* bool = RE_DURATION.test( '2H30M' );
	* // returns true
	*
	* bool = RE_DURATION.test( 'abc' );
	* // returns false
	*
	* bool = RE_DURATION.test( 'foo bar' );
	* // returns false
	*/
	reDurationString: typeof reDurationString;

	/**
	* Returns a regular expression to match a newline character sequence.
	*
	* @param options - function options
	* @param options.flags - regular expression flags (default: '')
	* @param options.capture - boolean indicating whether to create a capture group for the match (default: false)
	* @returns regular expression
	*
	* @example
	* var RE_EOL = ns.reEOL();
	*
	* var bool = RE_EOL.test( '\n' );
	* // returns true
	*
	* bool = RE_EOL.test( '\\r\\n' );
	* // returns false
	*
	* @example
	* var replace = require( '@stdlib/string/replace' );
	*
	* var RE_EOL = ns.reEOL({
	*     'flags': 'g'
	* });
	* var str = '1\n2\n3';
	* var out = replace( str, RE_EOL, '' );
	* // returns '123'
	*
	* @example
	* var bool = ns.reEOL.REGEXP.test( '\r\n' );
	* // returns true
	*/
	reEOL: typeof reEOL;

	/**
	* Returns a regular expression to test if a string is an extended-length path.
	*
	* @returns regular expression
	*
	* @example
	* var RE_EXTENDED_LENGTH_PATH = ns.reExtendedLengthPath();
	*
	* var bool = RE_EXTENDED_LENGTH_PATH.test( '\\\\?\\C:\\foo\\bar' );
	* // returns true
	*
	* @example
	* var bool = ns.reExtendedLengthPath.REGEXP.test( 'C:\\foo\\bar' );
	* // returns false
	*/
	reExtendedLengthPath: typeof reExtendedLengthPath;

	/**
	* Returns a regular expression to capture a filename extension.
	*
	* @param platform - path platform (`win32` or `posix`)
	* @returns regular expression
	*
	* @example
	* var RE_EXTNAME = ns.reExtname();
	* // returns <RegExp>
	*
	* @example
	* var RE_EXTNAME = ns.reExtname( 'posix' );
	* var dir = RE_EXTNAME.exec( '/foo/bar/index.js' )[ 1 ];
	* // returns '.js'
	*
	* @example
	* var RE_EXTNAME = ns.reExtname( 'win32' );
	* var dir = RE_EXTNAME.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
	* // returns '.js'
	*/
	reExtname: typeof reExtname;

	/**
	* Returns a regular expression to capture a POSIX filename extension.
	*
	* @returns regular expression
	*
	* @example
	* var RE_EXTNAME_POSIX = ns.reExtnamePosix();
	* var ext = RE_EXTNAME_POSIX.exec( 'index.js' )[ 1 ];
	* // returns '.js'
	*
	* @example
	* var ext = ns.reExtnamePosix.REGEXP.exec( 'index.js' )[ 1 ];
	* // returns '.js'
	*/
	reExtnamePosix: typeof reExtnamePosix;

	/**
	* Returns a regular expression to capture a Windows filename extension.
	*
	* @returns regular expression
	*
	* @example
	* var RE_EXTNAME_WINDOWS = ns.reExtnameWindows();
	* var ext = RE_EXTNAME_WINDOWS.exec( 'index.js' )[ 1 ];
	* // returns '.js'
	*
	* @example
	* var ext = ns.reExtnameWindows.REGEXP.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
	* // returns '.js'
	*/
	reExtnameWindows: typeof reExtnameWindows;

	/**
	* Returns a regular expression to split a filename.
	*
	* @param platform - path platform (`win32` or `posix`)
	* @returns regular expression
	*
	* @example
	* var RE_FILENAME = ns.reFilename();
	* // returns <RegExp>
	*
	* @example
	* var RE_FILENAME = ns.reFilename( 'posix' );
	* var parts = RE_FILENAME.exec( '/foo/bar/index.js' )[ 1 ];
	* // returns [ '/foo/bar/index.js', '/', 'foo/bar/', 'index.js', '.js' ]
	*
	* @example
	* var RE_FILENAME = ns.reFilename( 'win32' );
	* var parts = RE_FILENAME.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
	* // returns [ 'C:\\foo\\bar\\index.js', 'C:', '\\', 'foo\\bar\\', 'index.js', '.js' ]
	*/
	reFilename: typeof reFilename;

	/**
	* Returns a regular expression to split a POSIX filename.
	*
	* @returns regular expression
	*
	* @example
	* var RE_FILENAME_POSIX = ns.reFilenamePosix();
	* var parts = RE_FILENAME_POSIX.exec( '/foo/bar/index.js' ).slice();
	* // returns [ '/foo/bar/index.js', '/', 'foo/bar/', 'index.js', '.js' ]
	*
	* @example
	* var parts = ns.reFilenamePosix.REGEXP.exec( '/foo/bar/index.js' ).slice();
	* // returns [ '/foo/bar/index.js', '/', 'foo/bar/', 'index.js', '.js' ]
	*/
	reFilenamePosix: typeof reFilenamePosix;

	/**
	* Returns a regular expression to split a Windows filename.
	*
	* @returns regular expression
	*
	* @example
	* var RE_FILENAME_WINDOWS = ns.reFilenameWindows();
	* var parts = RE_FILENAME_WINDOWS.exec( 'C:\\foo\\bar\\index.js' ).slice();
	* // returns [ 'C:\\foo\\bar\\index.js', 'C:', '\\', 'foo\\bar\\', 'index.js', '.js' ]
	*
	* @example
	* var parts = ns.reFilenameWindows.REGEXP.exec( 'C:\\foo\\bar\\index.js' ).slice();
	* // returns [ 'C:\\foo\\bar\\index.js', 'C:', '\\', 'foo\\bar\\', 'index.js', '.js' ]
	*/
	reFilenameWindows: typeof reFilenameWindows;

	/**
	* Returns a regular expression to capture everything that is not a space immediately after the `function` keyword and before the first left parenthesis.
	*
	* @returns regular expression
	*
	* @example
	* var RE_FUNCTION_NAME = ns.reFunctionName();
	* function beep() {
	*     return 'boop';
	* }
	*
	* var str = RE_FUNCTION_NAME.exec( beep.toString() )[ 1 ];
	* // returns 'beep'
	*
	* @example
	* var str = ns.reFunctionName.REGEXP.exec( Math.sqrt.toString() )[ 1 ];
	* // returns 'sqrt'
	*/
	reFunctionName: typeof reFunctionName;

	/**
	* Returns a regular expression to match a native function.
	*
	* @returns regular expression
	*
	* @example
	* var RE_NATIVE_FUNCTION = ns.reNativeFunction();
	* var bool = RE_NATIVE_FUNCTION.test( Date.toString() );
	* // returns true
	*
	* @example
	* var bool = ns.reNativeFunction.REGEXP.test( Date.toString() );
	* // returns true
	*/
	reNativeFunction: typeof reNativeFunction;

	/**
	* Returns a regular expression to parse a regular expression string.
	*
	* @returns regular expression
	*
	* @example
	* var RE_REGEXP = ns.reRegExp();
	*
	* var bool = RE_REGEXP.test( '/^beep$/' );
	* // returns true
	*
	* bool = RE_REGEXP.test( '' );
	* // returns false
	*
	* @example
	* var bool = ns.reRegExp.REGEXP.test( '/^beep$/' );
	* // returns true
	*/
	reRegExp: typeof reRegExp;

	/**
	* Revives a JSON-serialized regular expression.
	*
	* @param key - key
	* @param value - value
	* @returns value
	*
	* @example
	* var parseJSON = require( '@stdlib/utils/parse-json' );
	*
	* var str = '{"type":"RegExp","pattern":"ab+c","flags":""}';
	*
	* var re = parseJSON( str, ns.reviveRegExp );
	* // returns <RegExp>
	*
	* @example
	* var parseJSON = require( '@stdlib/utils/parse-json' );
	*
	* var str = '{"beep":"boop"}';
	*
	* var o = parseJSON( str, ns.reviveRegExp );
	* // returns { 'beep': 'boop' }
	*/
	reviveRegExp: typeof reviveRegExp;

	/**
	* Returns a regular expression to match a semantic version string.
	*
	* @returns regular expression
	*
	* @example
	* var RE_SEMVER = ns.reSemVer();
	* // returns <RegExp>
	*
	* var bool = RE_SEMVER.test( '1.0.0' );
	* // returns true
	*
	* bool = RE_SEMVER.test( '1.0.0-alpha.1' );
	* // returns true
	*
	* bool = RE_SEMVER.test( 'abc' );
	* // returns false
	*
	* bool = RE_SEMVER.test( '1.0.0-alpha.1+build.1' );
	* // returns true
	*/
	reSemVer: typeof reSemVer;

	/**
	* Returns a JSON representation of a regular expression.
	*
	* @param re - regular expression to serialize
	* @returns JSON representation
	*
	* @example
	* var json = ns.regexp2json( /ab+c/ );
	* // returns {...}
	*/
	regexp2json: typeof regexp2json;

	/**
	* Returns a regular expression to parse a UNC path.
	*
	* @returns regular expression
	*
	* @example
	* var RE_UNC_PATH = ns.reUncPath();
	* var bool = RE_UNC_PATH.test( '\\\\server\\share' );
	* // returns true
	*
	* bool = RE_UNC_PATH.test( 'C:\\foo\\bar\\baz' );
	* // returns false
	*
	* @example
	* var parts = ns.reUncPath.REGEXP.exec( '\\\\server\\share\\foo\\bar\\baz' )[ 1 ];
	* // returns 'server'
	*/
	reUncPath: typeof reUncPath;

	/**
	* Returns a regular expression to match a UTF-16 surrogate pair.
	*
	* @returns regular expression
	*
	* @example
	* var RE_UTF16_SURROGATE_PAIR = ns.reUtf16SurrogatePair();
	*
	* var bool = RE_UTF16_SURROGATE_PAIR.test( '\uD800\uDC00' );
	* // returns true
	*
	* bool = RE_UTF16_SURROGATE_PAIR.test( 'abc\uD800\uDC00def' );
	* // returns true
	*
	* bool = RE_UTF16_SURROGATE_PAIR.test( 'abc' );
	* // returns false
	*/
	reUtf16SurrogatePair: typeof reUtf16SurrogatePair;

	/**
	* Returns a regular expression to match a UTF-16 unpaired surrogate.
	*
	* @returns regular expression
	*
	* @example
	* var RE_UTF16_UNPAIRED_SURROGATE = ns.reUtf16UnpairedSurrogate();
	*
	* var bool = RE_UTF16_UNPAIRED_SURROGATE.test( '\uD800' );
	* // returns true
	*
	* bool = RE_UTF16_UNPAIRED_SURROGATE.test( '\uDC00' );
	* // returns true
	*
	* bool = RE_UTF16_UNPAIRED_SURROGATE.test( 'abc' );
	* // returns false
	*/
	reUtf16UnpairedSurrogate: typeof reUtf16UnpairedSurrogate;

	/**
	* Returns a regular expression to match a white space character.
	*
	* @param options - function options
	* @param options.flags - regular expression flags (default: '')
	* @param options.capture - boolean indicating whether to wrap the regular expression matching a white space character with a capture group (default: false)
	* @returns regular expression
	*
	* @example
	* var RE_WHITESPACE = ns.reWhitespace();
	*
	* var bool = RE_WHITESPACE.test( ' ' );
	* // returns true
	*
	* @example
	* var RE_WHITESPACE = ns.reWhitespace({
	*     'flags': 'gm'
	* });
	*
	* var bool = RE_WHITESPACE.test( '\t' );
	* // returns true
	*
	* @example
	* var bool = ns.reWhitespace.REGEXP.test( 'a' );
	* // returns false
	*/
	reWhitespace: typeof reWhitespace;
}

/**
* Regular expressions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
