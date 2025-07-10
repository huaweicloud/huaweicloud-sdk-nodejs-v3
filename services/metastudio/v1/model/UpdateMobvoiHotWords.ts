import { LanguageEnum } from './LanguageEnum';


export class UpdateMobvoiHotWords {
    private 'vocabulary_id'?: string;
    public language?: LanguageEnum;
    public constructor() { 
    }
    public withVocabularyId(vocabularyId: string): UpdateMobvoiHotWords {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string  | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId(): string | undefined {
        return this['vocabulary_id'];
    }
    public withLanguage(language: LanguageEnum): UpdateMobvoiHotWords {
        this['language'] = language;
        return this;
    }
}