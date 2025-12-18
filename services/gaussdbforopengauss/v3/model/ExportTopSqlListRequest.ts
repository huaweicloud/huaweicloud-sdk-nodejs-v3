import { ListTopSqlsRequestBody } from './ListTopSqlsRequestBody';


export class ExportTopSqlListRequest {
    private 'X-Language'?: ExportTopSqlListRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ListTopSqlsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ExportTopSqlListRequestXLanguageEnum | string): ExportTopSqlListRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportTopSqlListRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportTopSqlListRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ExportTopSqlListRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListTopSqlsRequestBody): ExportTopSqlListRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportTopSqlListRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
