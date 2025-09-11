import { ModifyHbaConfRequestBody } from './ModifyHbaConfRequestBody';


export class ModifyHbaConfRequest {
    private 'X-Language'?: ModifyHbaConfRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ModifyHbaConfRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ModifyHbaConfRequestXLanguageEnum | string): ModifyHbaConfRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ModifyHbaConfRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ModifyHbaConfRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ModifyHbaConfRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyHbaConfRequestBody): ModifyHbaConfRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyHbaConfRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
