import { ListEnhanceFullSqlStatisticsRequestBody } from './ListEnhanceFullSqlStatisticsRequestBody';


export class ExportFullSqlStatisticsRequest {
    private 'X-Language'?: ExportFullSqlStatisticsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ListEnhanceFullSqlStatisticsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ExportFullSqlStatisticsRequestXLanguageEnum | string): ExportFullSqlStatisticsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportFullSqlStatisticsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportFullSqlStatisticsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ExportFullSqlStatisticsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListEnhanceFullSqlStatisticsRequestBody): ExportFullSqlStatisticsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportFullSqlStatisticsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
