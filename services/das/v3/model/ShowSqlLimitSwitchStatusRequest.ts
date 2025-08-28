

export class ShowSqlLimitSwitchStatusRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ShowSqlLimitSwitchStatusRequestXLanguageEnum | string;
    private 'datastore_type'?: ShowSqlLimitSwitchStatusRequestDatastoreTypeEnum | string;
    public constructor(instanceId?: string, datastoreType?: string) { 
        this['instance_id'] = instanceId;
        this['datastore_type'] = datastoreType;
    }
    public withInstanceId(instanceId: string): ShowSqlLimitSwitchStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ShowSqlLimitSwitchStatusRequestXLanguageEnum | string): ShowSqlLimitSwitchStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowSqlLimitSwitchStatusRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowSqlLimitSwitchStatusRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withDatastoreType(datastoreType: ShowSqlLimitSwitchStatusRequestDatastoreTypeEnum | string): ShowSqlLimitSwitchStatusRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: ShowSqlLimitSwitchStatusRequestDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): ShowSqlLimitSwitchStatusRequestDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSqlLimitSwitchStatusRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSqlLimitSwitchStatusRequestDatastoreTypeEnum {
    MYSQL = 'MySQL',
    POSTGRESQL = 'PostgreSQL'
}
