

export class ShowApplicationReleaseRepositoriesRequest {
    private 'X-Language'?: ShowApplicationReleaseRepositoriesRequestXLanguageEnum | string;
    private 'application_id'?: string;
    private 'parent_id'?: string;
    public keyword?: string;
    public limit?: number;
    public offset?: number;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: ShowApplicationReleaseRepositoriesRequestXLanguageEnum | string): ShowApplicationReleaseRepositoriesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowApplicationReleaseRepositoriesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowApplicationReleaseRepositoriesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): ShowApplicationReleaseRepositoriesRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withParentId(parentId: string): ShowApplicationReleaseRepositoriesRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withKeyword(keyword: string): ShowApplicationReleaseRepositoriesRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withLimit(limit: number): ShowApplicationReleaseRepositoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowApplicationReleaseRepositoriesRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowApplicationReleaseRepositoriesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
