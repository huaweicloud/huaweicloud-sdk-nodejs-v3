

export class ShowApplicationDependentResourcesRequest {
    private 'X-Language'?: ShowApplicationDependentResourcesRequestXLanguageEnum | string;
    private 'application_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: ShowApplicationDependentResourcesRequestXLanguageEnum | string): ShowApplicationDependentResourcesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowApplicationDependentResourcesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowApplicationDependentResourcesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): ShowApplicationDependentResourcesRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withLimit(limit: number): ShowApplicationDependentResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowApplicationDependentResourcesRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowApplicationDependentResourcesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
