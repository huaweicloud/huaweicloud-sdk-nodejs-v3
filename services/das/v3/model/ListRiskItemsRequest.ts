

export class ListRiskItemsRequest {
    private 'X-Language'?: ListRiskItemsRequestXLanguageEnum | string;
    private 'datastore_type'?: string;
    public page?: number;
    public limit?: number;
    public constructor(datastoreType?: string) { 
        this['datastore_type'] = datastoreType;
    }
    public withXLanguage(xLanguage: ListRiskItemsRequestXLanguageEnum | string): ListRiskItemsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListRiskItemsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListRiskItemsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withDatastoreType(datastoreType: string): ListRiskItemsRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withPage(page: number): ListRiskItemsRequest {
        this['page'] = page;
        return this;
    }
    public withLimit(limit: number): ListRiskItemsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRiskItemsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
