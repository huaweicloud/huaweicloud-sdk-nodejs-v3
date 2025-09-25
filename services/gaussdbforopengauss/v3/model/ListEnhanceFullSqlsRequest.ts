import { ListEnhanceFullSqlsRequestBody } from './ListEnhanceFullSqlsRequestBody';


export class ListEnhanceFullSqlsRequest {
    private 'X-Language'?: ListEnhanceFullSqlsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ListEnhanceFullSqlsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListEnhanceFullSqlsRequestXLanguageEnum | string): ListEnhanceFullSqlsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListEnhanceFullSqlsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListEnhanceFullSqlsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListEnhanceFullSqlsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListEnhanceFullSqlsRequestBody): ListEnhanceFullSqlsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEnhanceFullSqlsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
