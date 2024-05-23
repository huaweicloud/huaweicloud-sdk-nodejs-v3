import { LanguageEnum } from './LanguageEnum';


export class UpdateSisHotWords {
    private 'vocabulary_id'?: string;
    private 'sis_project_id'?: string;
    public region?: number;
    public language?: LanguageEnum;
    public constructor() { 
    }
    public withVocabularyId(vocabularyId: string): UpdateSisHotWords {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string  | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId(): string | undefined {
        return this['vocabulary_id'];
    }
    public withSisProjectId(sisProjectId: string): UpdateSisHotWords {
        this['sis_project_id'] = sisProjectId;
        return this;
    }
    public set sisProjectId(sisProjectId: string  | undefined) {
        this['sis_project_id'] = sisProjectId;
    }
    public get sisProjectId(): string | undefined {
        return this['sis_project_id'];
    }
    public withRegion(region: number): UpdateSisHotWords {
        this['region'] = region;
        return this;
    }
    public withLanguage(language: LanguageEnum): UpdateSisHotWords {
        this['language'] = language;
        return this;
    }
}