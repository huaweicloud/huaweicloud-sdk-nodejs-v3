import { ExportSlowSqlStatisticsRequestBody } from './ExportSlowSqlStatisticsRequestBody';


export class ExportSlowSqlStatisticsRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ExportSlowSqlStatisticsRequestXLanguageEnum | string;
    public body?: ExportSlowSqlStatisticsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ExportSlowSqlStatisticsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ExportSlowSqlStatisticsRequestXLanguageEnum | string): ExportSlowSqlStatisticsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportSlowSqlStatisticsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportSlowSqlStatisticsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ExportSlowSqlStatisticsRequestBody): ExportSlowSqlStatisticsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportSlowSqlStatisticsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
