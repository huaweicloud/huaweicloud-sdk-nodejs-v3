

export class ListRecycleInstancesDetailsRequest {
    private 'X-Language'?: ListRecycleInstancesDetailsRequestXLanguageEnum | string;
    private 'instance_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListRecycleInstancesDetailsRequestXLanguageEnum | string): ListRecycleInstancesDetailsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListRecycleInstancesDetailsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListRecycleInstancesDetailsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceName(instanceName: string): ListRecycleInstancesDetailsRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withOffset(offset: number): ListRecycleInstancesDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRecycleInstancesDetailsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRecycleInstancesDetailsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
