

export class VocabInfo {
    private 'vocabulary_id'?: string;
    public name?: string;
    public language?: VocabInfoLanguageEnum | string;
    public description?: string;
    public constructor(vocabularyId?: string, name?: string, language?: string, description?: string) { 
        this['vocabulary_id'] = vocabularyId;
        this['name'] = name;
        this['language'] = language;
        this['description'] = description;
    }
    public withVocabularyId(vocabularyId: string): VocabInfo {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string  | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId(): string | undefined {
        return this['vocabulary_id'];
    }
    public withName(name: string): VocabInfo {
        this['name'] = name;
        return this;
    }
    public withLanguage(language: VocabInfoLanguageEnum | string): VocabInfo {
        this['language'] = language;
        return this;
    }
    public withDescription(description: string): VocabInfo {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VocabInfoLanguageEnum {
    CHINESE_MANDARIN = 'chinese_mandarin',
    ENGLISH = 'english'
}
