import { LanguageEnum } from './LanguageEnum';


export class CreateMobvoiHotWords {
    private 'vocabulary_id'?: string;
    public language?: LanguageEnum;
    public constructor(vocabularyId?: string, language?: LanguageEnum) { 
        this['vocabulary_id'] = vocabularyId;
        this['language'] = language;
    }
    public withVocabularyId(vocabularyId: string): CreateMobvoiHotWords {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string  | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId(): string | undefined {
        return this['vocabulary_id'];
    }
    public withLanguage(language: LanguageEnum): CreateMobvoiHotWords {
        this['language'] = language;
        return this;
    }
}