import { ListEnhanceFullSqlsRequestBody } from './ListEnhanceFullSqlsRequestBody';


export class ExportFullSqlListRequest {
    private 'X-Language'?: ExportFullSqlListRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ListEnhanceFullSqlsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ExportFullSqlListRequestXLanguageEnum | string): ExportFullSqlListRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportFullSqlListRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportFullSqlListRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ExportFullSqlListRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListEnhanceFullSqlsRequestBody): ExportFullSqlListRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportFullSqlListRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
