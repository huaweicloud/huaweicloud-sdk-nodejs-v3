import { ShowGlobalSlowSqlDetailRequestBody } from './ShowGlobalSlowSqlDetailRequestBody';


export class ShowGlobalSlowSqlDetailRequest {
    private 'X-Language'?: ShowGlobalSlowSqlDetailRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ShowGlobalSlowSqlDetailRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ShowGlobalSlowSqlDetailRequestXLanguageEnum | string): ShowGlobalSlowSqlDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowGlobalSlowSqlDetailRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowGlobalSlowSqlDetailRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowGlobalSlowSqlDetailRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ShowGlobalSlowSqlDetailRequestBody): ShowGlobalSlowSqlDetailRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowGlobalSlowSqlDetailRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
