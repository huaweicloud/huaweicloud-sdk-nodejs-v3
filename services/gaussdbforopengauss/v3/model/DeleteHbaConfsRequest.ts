import { DeleteHbaConfRequestBody } from './DeleteHbaConfRequestBody';


export class DeleteHbaConfsRequest {
    private 'X-Language'?: DeleteHbaConfsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: DeleteHbaConfRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: DeleteHbaConfsRequestXLanguageEnum | string): DeleteHbaConfsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteHbaConfsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteHbaConfsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DeleteHbaConfsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteHbaConfRequestBody): DeleteHbaConfsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteHbaConfsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
