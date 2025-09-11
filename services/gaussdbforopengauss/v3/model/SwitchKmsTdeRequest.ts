import { SwitchKmsTdeRequestBody } from './SwitchKmsTdeRequestBody';


export class SwitchKmsTdeRequest {
    private 'X-Language'?: SwitchKmsTdeRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: SwitchKmsTdeRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: SwitchKmsTdeRequestXLanguageEnum | string): SwitchKmsTdeRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SwitchKmsTdeRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SwitchKmsTdeRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): SwitchKmsTdeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchKmsTdeRequestBody): SwitchKmsTdeRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchKmsTdeRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
