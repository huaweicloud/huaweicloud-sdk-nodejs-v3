

export class ShowApplicationDependentResourcesRequest {
    private 'X-Language'?: ShowApplicationDependentResourcesRequestXLanguageEnum | undefined;
    private 'application_id': string | undefined;
    public constructor(applicationId?: any) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: ShowApplicationDependentResourcesRequestXLanguageEnum): ShowApplicationDependentResourcesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowApplicationDependentResourcesRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): ShowApplicationDependentResourcesRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId() {
        return this['application_id'];
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
