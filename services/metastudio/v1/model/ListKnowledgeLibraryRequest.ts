

export class ListKnowledgeLibraryRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    public offset?: number;
    public limit?: number;
    public language?: ListKnowledgeLibraryRequestLanguageEnum | string;
    private 'knowledge_type'?: ListKnowledgeLibraryRequestKnowledgeTypeEnum | string;
    public name?: string;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListKnowledgeLibraryRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListKnowledgeLibraryRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListKnowledgeLibraryRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ListKnowledgeLibraryRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withOffset(offset: number): ListKnowledgeLibraryRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListKnowledgeLibraryRequest {
        this['limit'] = limit;
        return this;
    }
    public withLanguage(language: ListKnowledgeLibraryRequestLanguageEnum | string): ListKnowledgeLibraryRequest {
        this['language'] = language;
        return this;
    }
    public withKnowledgeType(knowledgeType: ListKnowledgeLibraryRequestKnowledgeTypeEnum | string): ListKnowledgeLibraryRequest {
        this['knowledge_type'] = knowledgeType;
        return this;
    }
    public set knowledgeType(knowledgeType: ListKnowledgeLibraryRequestKnowledgeTypeEnum | string  | undefined) {
        this['knowledge_type'] = knowledgeType;
    }
    public get knowledgeType(): ListKnowledgeLibraryRequestKnowledgeTypeEnum | string | undefined {
        return this['knowledge_type'];
    }
    public withName(name: string): ListKnowledgeLibraryRequest {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListKnowledgeLibraryRequestLanguageEnum {
    CN = 'CN',
    EN = 'EN'
}
/**
    * @export
    * @enum {string}
    */
export enum ListKnowledgeLibraryRequestKnowledgeTypeEnum {
    QUESTION_ANSWER = 'QUESTION_ANSWER',
    DOCUMENT = 'DOCUMENT'
}
