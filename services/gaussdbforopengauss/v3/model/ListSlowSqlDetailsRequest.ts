import { SlowSqlDetailRequestBody } from './SlowSqlDetailRequestBody';


export class ListSlowSqlDetailsRequest {
    private 'X-Language'?: ListSlowSqlDetailsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: SlowSqlDetailRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListSlowSqlDetailsRequestXLanguageEnum | string): ListSlowSqlDetailsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSlowSqlDetailsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSlowSqlDetailsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSlowSqlDetailsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SlowSqlDetailRequestBody): ListSlowSqlDetailsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSlowSqlDetailsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
