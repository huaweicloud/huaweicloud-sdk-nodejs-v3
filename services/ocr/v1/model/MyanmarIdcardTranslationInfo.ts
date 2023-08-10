

export class MyanmarIdcardTranslationInfo {
    private 'name_translation'?: string;
    private 'father_name_translation'?: string;
    private 'nrc_id_translation'?: string;
    private 'birth_translation'?: string;
    public constructor() { 
    }
    public withNameTranslation(nameTranslation: string): MyanmarIdcardTranslationInfo {
        this['name_translation'] = nameTranslation;
        return this;
    }
    public set nameTranslation(nameTranslation: string  | undefined) {
        this['name_translation'] = nameTranslation;
    }
    public get nameTranslation(): string | undefined {
        return this['name_translation'];
    }
    public withFatherNameTranslation(fatherNameTranslation: string): MyanmarIdcardTranslationInfo {
        this['father_name_translation'] = fatherNameTranslation;
        return this;
    }
    public set fatherNameTranslation(fatherNameTranslation: string  | undefined) {
        this['father_name_translation'] = fatherNameTranslation;
    }
    public get fatherNameTranslation(): string | undefined {
        return this['father_name_translation'];
    }
    public withNrcIdTranslation(nrcIdTranslation: string): MyanmarIdcardTranslationInfo {
        this['nrc_id_translation'] = nrcIdTranslation;
        return this;
    }
    public set nrcIdTranslation(nrcIdTranslation: string  | undefined) {
        this['nrc_id_translation'] = nrcIdTranslation;
    }
    public get nrcIdTranslation(): string | undefined {
        return this['nrc_id_translation'];
    }
    public withBirthTranslation(birthTranslation: string): MyanmarIdcardTranslationInfo {
        this['birth_translation'] = birthTranslation;
        return this;
    }
    public set birthTranslation(birthTranslation: string  | undefined) {
        this['birth_translation'] = birthTranslation;
    }
    public get birthTranslation(): string | undefined {
        return this['birth_translation'];
    }
}