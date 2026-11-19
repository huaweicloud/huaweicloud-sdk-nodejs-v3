import { ListSqlPatchRequestBody } from './ListSqlPatchRequestBody';


export class ListSqlPatchRequest {
    private 'X-Language'?: ListSqlPatchRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ListSqlPatchRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListSqlPatchRequestXLanguageEnum | string): ListSqlPatchRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSqlPatchRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSqlPatchRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSqlPatchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListSqlPatchRequestBody): ListSqlPatchRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSqlPatchRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
