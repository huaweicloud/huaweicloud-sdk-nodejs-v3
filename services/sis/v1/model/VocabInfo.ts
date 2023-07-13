

export class VocabInfo {
    private 'vocabulary_id': string | undefined;
    public name: string;
    public language: VocabInfoLanguageEnum;
    public description: string;
    public constructor(vocabularyId?: any, name?: any, language?: any, description?: any) { 
        this['vocabulary_id'] = vocabularyId;
        this['name'] = name;
        this['language'] = language;
        this['description'] = description;
    }
    public withVocabularyId(vocabularyId: string): VocabInfo {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId() {
        return this['vocabulary_id'];
    }
    public withName(name: string): VocabInfo {
        this['name'] = name;
        return this;
    }
    public withLanguage(language: VocabInfoLanguageEnum): VocabInfo {
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
