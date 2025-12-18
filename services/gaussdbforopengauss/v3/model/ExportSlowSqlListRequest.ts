import { ListSlowSqlsRequestBody } from './ListSlowSqlsRequestBody';


export class ExportSlowSqlListRequest {
    private 'X-Language'?: ExportSlowSqlListRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ListSlowSqlsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ExportSlowSqlListRequestXLanguageEnum | string): ExportSlowSqlListRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportSlowSqlListRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportSlowSqlListRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ExportSlowSqlListRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListSlowSqlsRequestBody): ExportSlowSqlListRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportSlowSqlListRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
