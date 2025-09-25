import { SwitchAspStatusRequestBody } from './SwitchAspStatusRequestBody';


export class SwitchAspStatusRequest {
    private 'X-Language'?: SwitchAspStatusRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: SwitchAspStatusRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: SwitchAspStatusRequestXLanguageEnum | string): SwitchAspStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SwitchAspStatusRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SwitchAspStatusRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): SwitchAspStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchAspStatusRequestBody): SwitchAspStatusRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchAspStatusRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
