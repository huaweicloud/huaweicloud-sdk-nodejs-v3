import { ListSqlLimitTaskRequestBody } from './ListSqlLimitTaskRequestBody';


export class ListSqlLimitTaskRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ListSqlLimitTaskRequestXLanguageEnum | string;
    public body?: ListSqlLimitTaskRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListSqlLimitTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ListSqlLimitTaskRequestXLanguageEnum | string): ListSqlLimitTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSqlLimitTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSqlLimitTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ListSqlLimitTaskRequestBody): ListSqlLimitTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSqlLimitTaskRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
