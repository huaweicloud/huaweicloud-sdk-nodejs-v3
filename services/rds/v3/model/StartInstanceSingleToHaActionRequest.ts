import { Single2Ha } from './Single2Ha';


export class StartInstanceSingleToHaActionRequest {
    private 'X-Language'?: StartInstanceSingleToHaActionRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: Single2Ha;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: StartInstanceSingleToHaActionRequestXLanguageEnum | string): StartInstanceSingleToHaActionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StartInstanceSingleToHaActionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StartInstanceSingleToHaActionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): StartInstanceSingleToHaActionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: Single2Ha): StartInstanceSingleToHaActionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartInstanceSingleToHaActionRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
