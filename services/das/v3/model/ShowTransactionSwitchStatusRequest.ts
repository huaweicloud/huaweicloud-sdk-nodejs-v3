

export class ShowTransactionSwitchStatusRequest {
    private 'instance_id'?: string;
    private 'datastore_type'?: ShowTransactionSwitchStatusRequestDatastoreTypeEnum | string;
    private 'X-Language'?: ShowTransactionSwitchStatusRequestXLanguageEnum | string;
    public constructor(instanceId?: string, datastoreType?: string) { 
        this['instance_id'] = instanceId;
        this['datastore_type'] = datastoreType;
    }
    public withInstanceId(instanceId: string): ShowTransactionSwitchStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatastoreType(datastoreType: ShowTransactionSwitchStatusRequestDatastoreTypeEnum | string): ShowTransactionSwitchStatusRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: ShowTransactionSwitchStatusRequestDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): ShowTransactionSwitchStatusRequestDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
    public withXLanguage(xLanguage: ShowTransactionSwitchStatusRequestXLanguageEnum | string): ShowTransactionSwitchStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowTransactionSwitchStatusRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowTransactionSwitchStatusRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTransactionSwitchStatusRequestDatastoreTypeEnum {
    MYSQL = 'MySQL'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowTransactionSwitchStatusRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
