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

// TypeScript Version: 2.0

/**
* Interface for a regular expression to parse a regular expression string.
*/
interface ReNativeFunction {
	/**
	* Returns a regular expression to parse a regular expression string.
	*
	* @returns regular expression
	*
	* @example
	* var RE_REGEXP = reRegExp();
	*
	* var bool = RE_REGEXP.test( '/^beep$/' );
	* // returns true
	*
	* bool = RE_REGEXP.test( '' );
	* // returns false
	*/
	(): RegExp;

	/**
	* Regular expression to parse a regular expression string.
	*
	* @example
	* var bool = reRegExp.REGEXP.test( '/^beep$/' );
	* // returns true
	*/
	REGEXP: RegExp;
}

/**
* Returns a regular expression to parse a regular expression string.
*
* @returns regular expression
*
* @example
* var RE_REGEXP = reRegExp();
*
* var bool = RE_REGEXP.test( '/^beep$/' );
* // returns true
*
* bool = RE_REGEXP.test( '' );
* // returns false
*
* @example
* var bool = reRegExp.REGEXP.test( '/^beep$/' );
* // returns true
*/
declare var reRegExp: ReNativeFunction;


// EXPORTS //

export = reRegExp;
