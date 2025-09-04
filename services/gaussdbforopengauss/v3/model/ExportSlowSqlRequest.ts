import { ExportTableVolumeRequestBody } from './ExportTableVolumeRequestBody';


export class ExportSlowSqlRequest {
    private 'X-Language'?: ExportSlowSqlRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ExportTableVolumeRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ExportSlowSqlRequestXLanguageEnum | string): ExportSlowSqlRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportSlowSqlRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportSlowSqlRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ExportSlowSqlRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ExportTableVolumeRequestBody): ExportSlowSqlRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportSlowSqlRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
