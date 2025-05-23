export type Whitespace =
	| '\u{9}' // '\t'
	| '\u{A}' // '\n'
	| '\u{B}' // '\v'
	| '\u{C}' // '\f'
	| '\u{D}' // '\r'
	| '\u{20}' // ' '
	| '\u{85}'
	| '\u{A0}'
	| '\u{1680}'
	| '\u{2000}'
	| '\u{2001}'
	| '\u{2002}'
	| '\u{2003}'
	| '\u{2004}'
	| '\u{2005}'
	| '\u{2006}'
	| '\u{2007}'
	| '\u{2008}'
	| '\u{2009}'
	| '\u{200A}'
	| '\u{2028}'
	| '\u{2029}'
	| '\u{202F}'
	| '\u{205F}'
	| '\u{3000}'
	| '\u{FEFF}';

export type WordSeparators = '-' | '_' | Whitespace;

export type AsciiPunctuation =
	| '!'
	| '"'
	| '#'
	| '$'
	| '%'
	| '&'
	| '\''
	| '('
	| ')'
	| '*'
	| '+'
	| ','
	| '-'
	| '.'
	| '/'
	| ':'
	| ';'
	| '<'
	| '='
	| '>'
	| '?'
	| '@'
	| '['
	| '\\'
	| ']'
	| '^'
	| '_'
	| '`'
	| '{'
	| '|'
	| '}'
	| '~';
