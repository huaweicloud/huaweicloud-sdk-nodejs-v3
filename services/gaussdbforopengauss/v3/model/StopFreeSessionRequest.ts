import { BaseOpsKeyViewRequestBody } from './BaseOpsKeyViewRequestBody';


export class StopFreeSessionRequest {
    private 'X-Language'?: StopFreeSessionRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: BaseOpsKeyViewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: StopFreeSessionRequestXLanguageEnum | string): StopFreeSessionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StopFreeSessionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StopFreeSessionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): StopFreeSessionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BaseOpsKeyViewRequestBody): StopFreeSessionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StopFreeSessionRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
