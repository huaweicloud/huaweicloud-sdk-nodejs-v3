import { RestoreHbaInfoRequestBody } from './RestoreHbaInfoRequestBody';


export class RestoreHbaInfoRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: RestoreHbaInfoRequestXLanguageEnum | string;
    public body?: RestoreHbaInfoRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): RestoreHbaInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: RestoreHbaInfoRequestXLanguageEnum | string): RestoreHbaInfoRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: RestoreHbaInfoRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): RestoreHbaInfoRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: RestoreHbaInfoRequestBody): RestoreHbaInfoRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RestoreHbaInfoRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
