

export class ShowSqlSwitchStatusRequest {
    private 'instance_id'?: string;
    public type?: string;
    private 'datastore_type'?: string;
    private 'X-Language'?: ShowSqlSwitchStatusRequestXLanguageEnum | string;
    public constructor(instanceId?: string, type?: string, datastoreType?: string) { 
        this['instance_id'] = instanceId;
        this['type'] = type;
        this['datastore_type'] = datastoreType;
    }
    public withInstanceId(instanceId: string): ShowSqlSwitchStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: string): ShowSqlSwitchStatusRequest {
        this['type'] = type;
        return this;
    }
    public withDatastoreType(datastoreType: string): ShowSqlSwitchStatusRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withXLanguage(xLanguage: ShowSqlSwitchStatusRequestXLanguageEnum | string): ShowSqlSwitchStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowSqlSwitchStatusRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowSqlSwitchStatusRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSqlSwitchStatusRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
