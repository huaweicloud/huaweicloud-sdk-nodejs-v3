

export class ListAsrVocabularyRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    public offset?: number;
    public limit?: number;
    private 'vocabulary_type'?: ListAsrVocabularyRequestVocabularyTypeEnum | string;
    public language?: ListAsrVocabularyRequestLanguageEnum | string;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListAsrVocabularyRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListAsrVocabularyRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListAsrVocabularyRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ListAsrVocabularyRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withOffset(offset: number): ListAsrVocabularyRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAsrVocabularyRequest {
        this['limit'] = limit;
        return this;
    }
    public withVocabularyType(vocabularyType: ListAsrVocabularyRequestVocabularyTypeEnum | string): ListAsrVocabularyRequest {
        this['vocabulary_type'] = vocabularyType;
        return this;
    }
    public set vocabularyType(vocabularyType: ListAsrVocabularyRequestVocabularyTypeEnum | string  | undefined) {
        this['vocabulary_type'] = vocabularyType;
    }
    public get vocabularyType(): ListAsrVocabularyRequestVocabularyTypeEnum | string | undefined {
        return this['vocabulary_type'];
    }
    public withLanguage(language: ListAsrVocabularyRequestLanguageEnum | string): ListAsrVocabularyRequest {
        this['language'] = language;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAsrVocabularyRequestVocabularyTypeEnum {
    MOBVOI = 'MOBVOI'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAsrVocabularyRequestLanguageEnum {
    CN = 'CN',
    EN = 'EN',
    ESP = 'ESP',
    POR = 'por',
    ARABIC = 'Arabic',
    THAI = 'Thai'
}
