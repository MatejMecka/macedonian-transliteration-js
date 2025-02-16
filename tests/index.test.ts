import {cyrillic_to_latin, latin_to_cyrillic}  from "../dist/index";

describe('Testing Cyrillic to Latin - Macedonian Alphabet - uppercase letters', () => {
    // Capitalized letters
    test('Testing "А"', () => {
        expect(cyrillic_to_latin('А')).toBe('A');
    });
    test('Testing "Б"', () => {
        expect(cyrillic_to_latin('Б')).toBe('B');
    });
    test('Testing "В"', () => {
        expect(cyrillic_to_latin('В')).toBe('V');
    });
    test('Testing "Г"', () => {
        expect(cyrillic_to_latin('Г')).toBe('G');
    });
    test('Testing "Д"', () => {
        expect(cyrillic_to_latin('Д')).toBe('D');
    });
    test('Testing "Ѓ"', () => {
        expect(cyrillic_to_latin('Ѓ')).toBe('Gj');
    });
    test('Testing "Е"', () => {
        expect(cyrillic_to_latin('Е')).toBe('E');
    });
    test('Testing "Ж"', () => {
        expect(cyrillic_to_latin('Ж')).toBe('Zh');
    });
    test('Testing "З"', () => {
        expect(cyrillic_to_latin('З')).toBe('Z');
    });
    test('Testing "Ѕ"', () => {
        expect(cyrillic_to_latin('Ѕ')).toBe('Dz');
    });
    test('Testing "И"', () => {
        expect(cyrillic_to_latin('И')).toBe('I');
    });
    test('Testing "Ј"', () => {
        expect(cyrillic_to_latin('Ј')).toBe('J');
    });
    test('Testing "К"', () => {
        expect(cyrillic_to_latin('К')).toBe('K');
    });
    test('Testing "Л"', () => {
        expect(cyrillic_to_latin('Л')).toBe('L');
    });
    test('Testing "Љ"', () => {
        expect(cyrillic_to_latin('Љ')).toBe('Lj');
    });
    test('Testing "М"', () => {
        expect(cyrillic_to_latin('М')).toBe('M');
    });
    test('Testing "Н"', () => {
        expect(cyrillic_to_latin('Н')).toBe('N');
    });
    test('Testing "Њ"', () => {
        expect(cyrillic_to_latin('Њ')).toBe('Nj');
    });
    test('Testing "О"', () => {
        expect(cyrillic_to_latin('О')).toBe('O');
    });
    test('Testing "П"', () => {
        expect(cyrillic_to_latin('П')).toBe('P');
    });
    test('Testing "Р"', () => {
        expect(cyrillic_to_latin('Р')).toBe('R');
    });
    test('Testing "С"', () => {
        expect(cyrillic_to_latin('С')).toBe('S');
    });
    test('Testing "Т"', () => {
        expect(cyrillic_to_latin('Т')).toBe('T');
    });
    test('Testing "Ќ"', () => {
        expect(cyrillic_to_latin('Ќ')).toBe('Kj');
    });
    test('Testing "У"', () => {
        expect(cyrillic_to_latin('У')).toBe('U');
    });
    test('Testing "Ф"', () => {
        expect(cyrillic_to_latin('Ф')).toBe('F');
    });
    test('Testing "Х"', () => {
        expect(cyrillic_to_latin('Х')).toBe('H');
    });
    test('Testing "Ц"', () => {
        expect(cyrillic_to_latin('Ц')).toBe('C');
    });
    test('Testing "Ч"', () => {
        expect(cyrillic_to_latin('Ч')).toBe('Ch');
    });
    test('Testing "Џ"', () => {
        expect(cyrillic_to_latin('Џ')).toBe('Dzh');
    });
    test('Testing "Ш"', () => {
        expect(cyrillic_to_latin('Ш')).toBe('Sh');
    });
});

describe('Testing Cyrillic to Latin - Macedonian Alphabet lowercase letters', () => {
    // Lowercase letters
    test('Testing "а"', () => {
        expect(cyrillic_to_latin('а')).toBe('a');
    });
    test('Testing "б"', () => {
        expect(cyrillic_to_latin('б')).toBe('b');
    });
    test('Testing "в"', () => {
        expect(cyrillic_to_latin('в')).toBe('v');
    });
    test('Testing "г"', () => {
        expect(cyrillic_to_latin('г')).toBe('g');
    });
    test('Testing "д"', () => {
        expect(cyrillic_to_latin('д')).toBe('d');
    });
    test('Testing "ѓ"', () => {
        expect(cyrillic_to_latin('ѓ')).toBe('gj');
    });
    test('Testing "е"', () => {
        expect(cyrillic_to_latin('е')).toBe('e');
    });
    test('Testing "ж"', () => {
        expect(cyrillic_to_latin('ж')).toBe('zh');
    });
    test('Testing "з"', () => {
        expect(cyrillic_to_latin('з')).toBe('z');
    });
    test('Testing "ѕ"', () => {
        expect(cyrillic_to_latin('ѕ')).toBe('dz');
    });
    test('Testing "и"', () => {
        expect(cyrillic_to_latin('и')).toBe('i');
    });
    test('Testing "ј"', () => {
        expect(cyrillic_to_latin('ј')).toBe('j');
    });
    test('Testing "к"', () => {
        expect(cyrillic_to_latin('к')).toBe('k');
    });
    test('Testing "л"', () => {
        expect(cyrillic_to_latin('л')).toBe('l');
    });
    test('Testing "љ"', () => {
        expect(cyrillic_to_latin('љ')).toBe('lj');
    });
    test('Testing "м"', () => {
        expect(cyrillic_to_latin('м')).toBe('m');
    });
    test('Testing "н"', () => {
        expect(cyrillic_to_latin('н')).toBe('n');
    });
    test('Testing "њ"', () => {
        expect(cyrillic_to_latin('њ')).toBe('nj');
    });
    test('Testing "о"', () => {
        expect(cyrillic_to_latin('о')).toBe('o');
    });
    test('Testing "п"', () => {
        expect(cyrillic_to_latin('п')).toBe('p');
    });
    test('Testing "р"', () => {
        expect(cyrillic_to_latin('р')).toBe('r');
    });
    test('Testing "с"', () => {
        expect(cyrillic_to_latin('с')).toBe('s');
    });
    test('Testing "т"', () => {
        expect(cyrillic_to_latin('т')).toBe('t');
    });
    test('Testing "ќ"', () => {
        expect(cyrillic_to_latin('ќ')).toBe('kj');
    });
    test('Testing "у"', () => {
        expect(cyrillic_to_latin('у')).toBe('u');
    });
    test('Testing "ф"', () => {
        expect(cyrillic_to_latin('ф')).toBe('f');
    });
    test('Testing "х"', () => {
        expect(cyrillic_to_latin('х')).toBe('h');
    });
    test('Testing "ц"', () => {
        expect(cyrillic_to_latin('ц')).toBe('c');
    });
    test('Testing "ч"', () => {
        expect(cyrillic_to_latin('ч')).toBe('ch');
    });
    test('Testing "џ"', () => {
        expect(cyrillic_to_latin('џ')).toBe('dzh');
    });
    test('Testing "ш"', () => {
        expect(cyrillic_to_latin('ш')).toBe('sh');
    });
});

describe('Testing Latin to Cyrillic - Macedonian Alphabet - Uppercase Letters', () => {
    // Uppercase letters
    test('Testing "A"', () => {
        expect(latin_to_cyrillic('A')).toBe('А');
    });
    test('Testing "B"', () => {
        expect(latin_to_cyrillic('B')).toBe('Б');
    });
    test('Testing "C"', () => {
        expect(latin_to_cyrillic('C')).toBe('Ц');
    });
    test('Testing "D"', () => {
        expect(latin_to_cyrillic('D')).toBe('Д');
    });
    test('Testing "E"', () => {
        expect(latin_to_cyrillic('E')).toBe('Е');
    });
    test('Testing "F"', () => {
        expect(latin_to_cyrillic('F')).toBe('Ф');
    });
    test('Testing "G"', () => {
        expect(latin_to_cyrillic('G')).toBe('Г');
    });
    test('Testing "H"', () => {
        expect(latin_to_cyrillic('H')).toBe('Х');
    });
    test('Testing "I"', () => {
        expect(latin_to_cyrillic('I')).toBe('И');
    });
    test('Testing "J"', () => {
        expect(latin_to_cyrillic('J')).toBe('Ј');
    });
    test('Testing "K"', () => {
        expect(latin_to_cyrillic('K')).toBe('К');
    });
    test('Testing "L"', () => {
        expect(latin_to_cyrillic('L')).toBe('Л');
    });
    test('Testing "Lj"', () => {
        expect(latin_to_cyrillic('Lj')).toBe('Љ');
    });
    test('Testing "M"', () => {
        expect(latin_to_cyrillic('M')).toBe('М');
    });
    test('Testing "N"', () => {
        expect(latin_to_cyrillic('N')).toBe('Н');
    });
    test('Testing "Nj"', () => {
        expect(latin_to_cyrillic('Nj')).toBe('Њ');
    });
    test('Testing "O"', () => {
        expect(latin_to_cyrillic('O')).toBe('О');
    });
    test('Testing "P"', () => {
        expect(latin_to_cyrillic('P')).toBe('П');
    });
    test('Testing "R"', () => {
        expect(latin_to_cyrillic('R')).toBe('Р');
    });
    test('Testing "S"', () => {
        expect(latin_to_cyrillic('S')).toBe('С');
    });
    test('Testing "T"', () => {
        expect(latin_to_cyrillic('T')).toBe('Т');
    });
    test('Testing "U"', () => {
        expect(latin_to_cyrillic('U')).toBe('У');
    });
    test('Testing "V"', () => {
        expect(latin_to_cyrillic('V')).toBe('В');
    });
    test('Testing "Z"', () => {
        expect(latin_to_cyrillic('Z')).toBe('З');
    });
    test('Testing "Ch"', () => {
        expect(latin_to_cyrillic('Ch')).toBe('Ч');
    });
    test('Testing "Sh"', () => {
        expect(latin_to_cyrillic('Sh')).toBe('Ш');
    });
    test('Testing "Zh"', () => {
        expect(latin_to_cyrillic('Zh')).toBe('Ж');
    });
    test('Testing "Dzh"', () => {
        expect(latin_to_cyrillic('Dzh')).toBe('Џ');
    });
    test('Testing "Gj"', () => {
        expect(latin_to_cyrillic('Gj')).toBe('Ѓ');
    });
    test('Testing "Kj"', () => {
        expect(latin_to_cyrillic('Kj')).toBe('Ќ');
    });
    test('Testing "Dz"', () => {
        expect(latin_to_cyrillic('Dz')).toBe('S');
    });
    test('Testing "Sh"', () => {
        expect(latin_to_cyrillic('Sh')).toBe('Ш');
    });
});

describe('Testing Latin to Cyrillic - Macedonian Alphabet - Lowercase Letters', () => {
    // Lowercase letters
    test('Testing "a"', () => {
        expect(latin_to_cyrillic('a')).toBe('а');
    });
    test('Testing "b"', () => {
        expect(latin_to_cyrillic('b')).toBe('б');
    });
    test('Testing "c"', () => {
        expect(latin_to_cyrillic('c')).toBe('ц');
    });
    test('Testing "d"', () => {
        expect(latin_to_cyrillic('d')).toBe('д');
    });
    test('Testing "e"', () => {
        expect(latin_to_cyrillic('e')).toBe('е');
    });
    test('Testing "f"', () => {
        expect(latin_to_cyrillic('f')).toBe('ф');
    });
    test('Testing "g"', () => {
        expect(latin_to_cyrillic('g')).toBe('г');
    });
    test('Testing "h"', () => {
        expect(latin_to_cyrillic('h')).toBe('х');
    });
    test('Testing "i"', () => {
        expect(latin_to_cyrillic('i')).toBe('и');
    });
    test('Testing "j"', () => {
        expect(latin_to_cyrillic('j')).toBe('ј');
    });
    test('Testing "k"', () => {
        expect(latin_to_cyrillic('k')).toBe('к');
    });
    test('Testing "l"', () => {
        expect(latin_to_cyrillic('l')).toBe('л');
    });
    test('Testing "lj"', () => {
        expect(latin_to_cyrillic('lj')).toBe('љ');
    });
    test('Testing "m"', () => {
        expect(latin_to_cyrillic('m')).toBe('м');
    });
    test('Testing "n"', () => {
        expect(latin_to_cyrillic('n')).toBe('н');
    });
    test('Testing "nj"', () => {
        expect(latin_to_cyrillic('nj')).toBe('њ');
    });
    test('Testing "o"', () => {
        expect(latin_to_cyrillic('o')).toBe('о');
    });
    test('Testing "p"', () => {
        expect(latin_to_cyrillic('p')).toBe('п');
    });
    test('Testing "r"', () => {
        expect(latin_to_cyrillic('r')).toBe('р');
    });
    test('Testing "s"', () => {
        expect(latin_to_cyrillic('s')).toBe('с');
    });
    test('Testing "t"', () => {
        expect(latin_to_cyrillic('t')).toBe('т');
    });
    test('Testing "u"', () => {
        expect(latin_to_cyrillic('u')).toBe('у');
    });
    test('Testing "v"', () => {
        expect(latin_to_cyrillic('v')).toBe('в');
    });
    test('Testing "z"', () => {
        expect(latin_to_cyrillic('z')).toBe('з');
    });
    test('Testing "ch"', () => {
        expect(latin_to_cyrillic('ch')).toBe('ч');
    });
    test('Testing "sh"', () => {
        expect(latin_to_cyrillic('sh')).toBe('ш');
    });
    test('Testing "zh"', () => {
        expect(latin_to_cyrillic('zh')).toBe('ж');
    });
    test('Testing "dzh"', () => {
        expect(latin_to_cyrillic('dzh')).toBe('џ');
    });
    test('Testing "gj"', () => {
        expect(latin_to_cyrillic('gj')).toBe('ѓ');
    });
    test('Testing "kj"', () => {
        expect(latin_to_cyrillic('kj')).toBe('ќ');
    });
    test('Testing "dz"', () => {
        expect(latin_to_cyrillic('dz')).toBe('ѕ');
    });
    test('Testing "sh"', () => {
        expect(latin_to_cyrillic('sh')).toBe('ш');
    });
});

describe('Sentences', () => {
    test('Testing "Jas jadam pogacha so meso"', () => {
        expect(latin_to_cyrillic('Jas jadam pogacha so meso')).toBe('Јас јадам погача со месо');
    });

    test('Testing "Shtekjerot kaj e?"', () => {
        expect(latin_to_cyrillic('Shtekjerot kaj e?')).toBe('Штеќерот кај е?');
    });

    test('Testing "Dzvoni dzvonoto"', () => {
        expect(latin_to_cyrillic('Dzvoni dzvonoto')).toBe('Sвони ѕвоното');
    });

    test('Testing "Dzhole ima dzhamlii"', () => {
        expect(latin_to_cyrillic('Dzhole ima dzhamlii')).toBe('Џоле има џамлии');
    });
    test('Testing special chars', () => {
        expect(cyrillic_to_latin('@%$!.?')).toBe('@%$!.?');
    });
}) 
