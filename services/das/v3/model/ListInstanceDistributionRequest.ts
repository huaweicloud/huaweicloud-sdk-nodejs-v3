

export class ListInstanceDistributionRequest {
    private 'datastore_type'?: string;
    private 'X-Language'?: ListInstanceDistributionRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withDatastoreType(datastoreType: string): ListInstanceDistributionRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withXLanguage(xLanguage: ListInstanceDistributionRequestXLanguageEnum | string): ListInstanceDistributionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListInstanceDistributionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListInstanceDistributionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceDistributionRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
