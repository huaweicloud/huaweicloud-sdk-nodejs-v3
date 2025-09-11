import { ListSlowSqlsRequestBody } from './ListSlowSqlsRequestBody';


export class ListSlowSqlsRequest {
    private 'X-Language'?: ListSlowSqlsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ListSlowSqlsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListSlowSqlsRequestXLanguageEnum | string): ListSlowSqlsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSlowSqlsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSlowSqlsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSlowSqlsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListSlowSqlsRequestBody): ListSlowSqlsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSlowSqlsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
