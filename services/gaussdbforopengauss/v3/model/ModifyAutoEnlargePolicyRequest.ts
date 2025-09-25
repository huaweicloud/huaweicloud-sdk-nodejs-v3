import { ModifyAutoEnlargePolicyRequestBody } from './ModifyAutoEnlargePolicyRequestBody';


export class ModifyAutoEnlargePolicyRequest {
    private 'X-Language'?: ModifyAutoEnlargePolicyRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ModifyAutoEnlargePolicyRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ModifyAutoEnlargePolicyRequestXLanguageEnum | string): ModifyAutoEnlargePolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ModifyAutoEnlargePolicyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ModifyAutoEnlargePolicyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ModifyAutoEnlargePolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyAutoEnlargePolicyRequestBody): ModifyAutoEnlargePolicyRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyAutoEnlargePolicyRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
