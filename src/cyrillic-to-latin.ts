import { Logger } from "tslog";

const logger = new Logger({ name: "translitaration-logger" });

export function cyrillic_to_latin(input: string):string {
    /*
        Translitarates from Cyrillic to latin
        @param input: The text to transliterate
    */
    const cyrillicToLatinMap: { [key: string]: string } = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'ѓ': 'gj', 'е': 'e', 'ж': 'zh', 'з': 'z', 'ѕ': 'dz', 'и': 'i',
        'ј': 'j', 'к': 'k', 'л': 'l', 'љ': 'lj', 'м': 'm', 'н': 'n', 'њ': 'nj', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
        'т': 't', 'ќ': 'kj', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'џ': 'dzh', 'ш': 'sh',
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Ѓ': 'Gj', 'Е': 'E', 'Ж': 'Zh', 'З': 'Z', 'Ѕ': 'Dz', 'И': 'I',
        'Ј': 'J', 'К': 'K', 'Л': 'L', 'Љ': 'Lj', 'М': 'M', 'Н': 'N', 'Њ': 'Nj', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S',
        'Т': 'T', 'Ќ': 'Kj', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch', 'Џ': 'Dzh', 'Ш': 'Sh'
    };

    let convertedText = '';
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (cyrillicToLatinMap[char]) {
            logger.info(`${cyrillicToLatinMap[char]} found in string`);
            convertedText += cyrillicToLatinMap[char];
        } else {
            logger.info(`${cyrillicToLatinMap[char]} found in string`);
            convertedText += char;
        }
    }
    return convertedText;
}
