import { ModifyInstancePortRequestBody } from './ModifyInstancePortRequestBody';


export class ModifyInstancePortRequest {
    private 'X-Language'?: ModifyInstancePortRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ModifyInstancePortRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ModifyInstancePortRequestXLanguageEnum | string): ModifyInstancePortRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ModifyInstancePortRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ModifyInstancePortRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ModifyInstancePortRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyInstancePortRequestBody): ModifyInstancePortRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyInstancePortRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
