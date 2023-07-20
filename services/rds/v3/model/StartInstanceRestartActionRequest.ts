import { InstanceRestartRequsetBody } from './InstanceRestartRequsetBody';


export class StartInstanceRestartActionRequest {
    private 'X-Language'?: StartInstanceRestartActionRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: InstanceRestartRequsetBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: StartInstanceRestartActionRequestXLanguageEnum | string): StartInstanceRestartActionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StartInstanceRestartActionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StartInstanceRestartActionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): StartInstanceRestartActionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: InstanceRestartRequsetBody): StartInstanceRestartActionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartInstanceRestartActionRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
