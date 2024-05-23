import { LanguageEnum } from './LanguageEnum';


export class CreateSisHotWords {
    private 'vocabulary_id'?: string;
    private 'sis_project_id'?: string;
    public region?: number;
    public language?: LanguageEnum;
    public constructor(vocabularyId?: string, sisProjectId?: string, region?: number, language?: LanguageEnum) { 
        this['vocabulary_id'] = vocabularyId;
        this['sis_project_id'] = sisProjectId;
        this['region'] = region;
        this['language'] = language;
    }
    public withVocabularyId(vocabularyId: string): CreateSisHotWords {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string  | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId(): string | undefined {
        return this['vocabulary_id'];
    }
    public withSisProjectId(sisProjectId: string): CreateSisHotWords {
        this['sis_project_id'] = sisProjectId;
        return this;
    }
    public set sisProjectId(sisProjectId: string  | undefined) {
        this['sis_project_id'] = sisProjectId;
    }
    public get sisProjectId(): string | undefined {
        return this['sis_project_id'];
    }
    public withRegion(region: number): CreateSisHotWords {
        this['region'] = region;
        return this;
    }
    public withLanguage(language: LanguageEnum): CreateSisHotWords {
        this['language'] = language;
        return this;
    }
}