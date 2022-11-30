

export class ShowApplicationReleaseRepositoriesRequest {
    private 'X-Language'?: ShowApplicationReleaseRepositoriesRequestXLanguageEnum | undefined;
    private 'application_id': string | undefined;
    private 'parent_id'?: string | undefined;
    public keyword?: string;
    public limit?: number;
    public offset?: number;
    public constructor(applicationId?: any) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: ShowApplicationReleaseRepositoriesRequestXLanguageEnum): ShowApplicationReleaseRepositoriesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowApplicationReleaseRepositoriesRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): ShowApplicationReleaseRepositoriesRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId() {
        return this['application_id'];
    }
    public withParentId(parentId: string): ShowApplicationReleaseRepositoriesRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
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
