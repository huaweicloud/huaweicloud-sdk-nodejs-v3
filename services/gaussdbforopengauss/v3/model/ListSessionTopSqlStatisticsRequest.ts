

export class ListSessionTopSqlStatisticsRequest {
    private 'X-Language'?: ListSessionTopSqlStatisticsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, offset?: number, limit?: number) { 
        this['instance_id'] = instanceId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withXLanguage(xLanguage: ListSessionTopSqlStatisticsRequestXLanguageEnum | string): ListSessionTopSqlStatisticsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSessionTopSqlStatisticsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSessionTopSqlStatisticsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSessionTopSqlStatisticsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListSessionTopSqlStatisticsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSessionTopSqlStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSessionTopSqlStatisticsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
