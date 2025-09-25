

export class ListFullSqlSwitchesRequest {
    private 'X-Language'?: ListFullSqlSwitchesRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(instanceId?: string, limit?: number, offset?: number) { 
        this['instance_id'] = instanceId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withXLanguage(xLanguage: ListFullSqlSwitchesRequestXLanguageEnum | string): ListFullSqlSwitchesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListFullSqlSwitchesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListFullSqlSwitchesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListFullSqlSwitchesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListFullSqlSwitchesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListFullSqlSwitchesRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFullSqlSwitchesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
