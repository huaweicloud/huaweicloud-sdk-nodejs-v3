

export class ShowTopObjectsRequest {
    private 'instance_id'?: string;
    public top?: number;
    private 'database_name'?: string;
    public order?: string;
    private 'X-Language'?: ShowTopObjectsRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowTopObjectsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTop(top: number): ShowTopObjectsRequest {
        this['top'] = top;
        return this;
    }
    public withDatabaseName(databaseName: string): ShowTopObjectsRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withOrder(order: string): ShowTopObjectsRequest {
        this['order'] = order;
        return this;
    }
    public withXLanguage(xLanguage: ShowTopObjectsRequestXLanguageEnum | string): ShowTopObjectsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowTopObjectsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowTopObjectsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ShowTopObjectsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowTopObjectsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTopObjectsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
