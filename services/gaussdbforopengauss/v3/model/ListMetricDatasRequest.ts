

export class ListMetricDatasRequest {
    private 'X-Language'?: ListMetricDatasRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'instance_id'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListMetricDatasRequestXLanguageEnum | string): ListMetricDatasRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListMetricDatasRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListMetricDatasRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListMetricDatasRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMetricDatasRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListMetricDatasRequest {
        this['name'] = name;
        return this;
    }
    public withInstanceId(instanceId: string): ListMetricDatasRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMetricDatasRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
