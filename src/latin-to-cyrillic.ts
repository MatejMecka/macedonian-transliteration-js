import { Logger } from "tslog";

const logger = new Logger({ name: "myLogger" });

export function latin_to_cyrillic(input: string) {
    /*  
        Translitarates from Latin to Cyrillic
        @param input - Input to transliterate
    */
    const latinToCyrillicMap : { [key: string]: string } = {
        'a': 'а', 'b': 'б', 'c': 'ц', 'd': 'д', 'e': 'е', 'f': 'ф', 'g': 'г',
        'h': 'х', 'i': 'и', 'j': 'ј', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н',
        'o': 'о', 'p': 'п', 'q': 'ќ', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у',
        'v': 'в', 'w': 'в', 'x': 'џ', 'y': 'ѕ', 'z': 'з',
        'A': 'А', 'B': 'Б', 'C': 'Ц', 'D': 'Д', 'E': 'Е', 'F': 'Ф', 'G': 'Г',
        'H': 'Х', 'I': 'И', 'J': 'Ј', 'K': 'К', 'L': 'Л', 'M': 'М', 'N': 'Н',
        'O': 'О', 'P': 'П', 'Q': 'Ќ', 'R': 'Р', 'S': 'С', 'T': 'Т', 'U': 'У',
        'V': 'В', 'W': 'В', 'X': 'Џ', 'Y': 'Ѕ', 'Z': 'З',
        'sh': 'ш', 'Sh': 'Ш', 'SH': 'Ш', 'sH': 'Ш',
        'ch': 'ч', 'Ch': 'Ч', 'CH': 'Ч', 'cH': 'Ч',
        'dzh': 'џ', 'Dzh': 'Џ', 'DZH': 'Џ', 'dZH': 'Џ', 'DzH': 'Џ',
        'nj': 'њ', 'Nj': 'Њ',
        'Lj': 'Љ', 'LJ': 'Љ', 'lj': 'љ',
        'Kj': 'Ќ', 'KJ': 'Ќ', 'kj': 'ќ',
        'Gj': 'Ѓ', 'GJ': 'Ѓ', 'gj': 'ѓ',
        'Zh': 'Ж', 'ZH': 'Ж', 'zh': 'ж',
        'Dz': 'S', 'DZ':'S', 'dz': 'ѕ'
    };
  
    let output = '';
    let i = 0;
    while (i < input.length) {
        let char = input[i];
        let nextTwoChars = input.substr(i, 2);
        let nextThreeChars = input.substr(i, 3);

        if (latinToCyrillicMap.hasOwnProperty(nextThreeChars)) {
            logger.info(`${latinToCyrillicMap[nextThreeChars]} found in string`);
            output += latinToCyrillicMap[nextThreeChars];
            i += 3;
        } else if (latinToCyrillicMap.hasOwnProperty(nextTwoChars)) {
            logger.info(`${latinToCyrillicMap[nextTwoChars]} found in string`);
            output += latinToCyrillicMap[nextTwoChars];
            i += 2;
        } else if (latinToCyrillicMap.hasOwnProperty(char)) {
            logger.info(`${latinToCyrillicMap[char]} found in string`);
            output += latinToCyrillicMap[char];
            i++;
        } else {
            logger.info("Character not found in Character Map");
            output += char;
            i++;
        }
    }
    return output;
}