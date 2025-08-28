

export class ListCloudDbaInstancesRequest {
    private 'datastore_type'?: string;
    public offset?: number;
    public limit?: number;
    private 'X-Language'?: ListCloudDbaInstancesRequestXLanguageEnum | string;
    public constructor(datastoreType?: string) { 
        this['datastore_type'] = datastoreType;
    }
    public withDatastoreType(datastoreType: string): ListCloudDbaInstancesRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withOffset(offset: number): ListCloudDbaInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCloudDbaInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withXLanguage(xLanguage: ListCloudDbaInstancesRequestXLanguageEnum | string): ListCloudDbaInstancesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListCloudDbaInstancesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListCloudDbaInstancesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCloudDbaInstancesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
