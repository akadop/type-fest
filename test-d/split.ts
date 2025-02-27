import {expectType} from 'tsd';
import type {Split, StringRepeat} from '../index';
import type {BuildTuple} from '../source/internal';

declare function split<
	S extends string,
	Delimiter extends string,
>(string: S, separator: Delimiter): Split<S, Delimiter>;

const items = 'foo,bar,baz,waldo';

// General use.
expectType<['foo', 'bar', 'baz', 'waldo']>(split(items, ','));

// Missing replacement character in original string.
expectType<['foo,bar,baz,waldo']>(split(items, ' '));

// Empty string split (every character).
expectType<[
	'f', 'o', 'o', ',', 'b', 'a', 'r', ',',
	'b', 'a', 'z', ',', 'w', 'a', 'l', 'd', 'o',
]>(split(items, ''));

// Split single same character.
expectType<['', '']>(split(' ', ' '));

// Split empty string by empty string.
expectType<[]>(split('', ''));

// Split empty string by any string.
expectType<['']>(split('', ' '));

// Recursion depth at which a non-tail recursive implementation starts to fail.
type FiftyZeroes = StringRepeat<'0', 50>;
expectType<BuildTuple<50, '0'>>({} as Split<FiftyZeroes, ''>);

// Maximum allowed recursion depth for a tail recursive implementation.
type NineHundredNinetyNineZeroes = StringRepeat<'0', 999>;
expectType<BuildTuple<999, '0'>>({} as Split<NineHundredNinetyNineZeroes, ''>);
