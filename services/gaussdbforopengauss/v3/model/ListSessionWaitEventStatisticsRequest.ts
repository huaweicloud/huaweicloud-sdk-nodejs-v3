

export class ListSessionWaitEventStatisticsRequest {
    private 'X-Language'?: ListSessionWaitEventStatisticsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, offset?: number, limit?: number) { 
        this['instance_id'] = instanceId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withXLanguage(xLanguage: ListSessionWaitEventStatisticsRequestXLanguageEnum | string): ListSessionWaitEventStatisticsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSessionWaitEventStatisticsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSessionWaitEventStatisticsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSessionWaitEventStatisticsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListSessionWaitEventStatisticsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSessionWaitEventStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSessionWaitEventStatisticsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
