import { ListEnhanceFullSqlStatisticsRequestBody } from './ListEnhanceFullSqlStatisticsRequestBody';


export class ListEnhanceFullSqlStatisticsRequest {
    private 'X-Language'?: ListEnhanceFullSqlStatisticsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ListEnhanceFullSqlStatisticsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListEnhanceFullSqlStatisticsRequestXLanguageEnum | string): ListEnhanceFullSqlStatisticsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListEnhanceFullSqlStatisticsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListEnhanceFullSqlStatisticsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListEnhanceFullSqlStatisticsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListEnhanceFullSqlStatisticsRequestBody): ListEnhanceFullSqlStatisticsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEnhanceFullSqlStatisticsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
