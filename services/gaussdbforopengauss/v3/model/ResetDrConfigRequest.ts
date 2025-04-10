import { ResetDrConfigRequestBody } from './ResetDrConfigRequestBody';


export class ResetDrConfigRequest {
    private 'X-Language'?: ResetDrConfigRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ResetDrConfigRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ResetDrConfigRequestXLanguageEnum | string): ResetDrConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ResetDrConfigRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ResetDrConfigRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ResetDrConfigRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ResetDrConfigRequestBody): ResetDrConfigRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResetDrConfigRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
