

export class ListRecycleInstancesRequest {
    private 'X-Language'?: ListRecycleInstancesRequestXLanguageEnum | string;
    private 'instance_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListRecycleInstancesRequestXLanguageEnum | string): ListRecycleInstancesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListRecycleInstancesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListRecycleInstancesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceName(instanceName: string): ListRecycleInstancesRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withOffset(offset: number): ListRecycleInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRecycleInstancesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRecycleInstancesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
