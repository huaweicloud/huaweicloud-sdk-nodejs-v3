import { AddHbaConfRequestBody } from './AddHbaConfRequestBody';


export class AddHbaConfsRequest {
    private 'X-Language'?: AddHbaConfsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: AddHbaConfRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: AddHbaConfsRequestXLanguageEnum | string): AddHbaConfsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: AddHbaConfsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): AddHbaConfsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): AddHbaConfsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AddHbaConfRequestBody): AddHbaConfsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddHbaConfsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
