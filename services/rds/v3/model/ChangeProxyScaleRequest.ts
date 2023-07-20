import { ScaleProxyRequestBody } from './ScaleProxyRequestBody';


export class ChangeProxyScaleRequest {
    private 'X-Language'?: ChangeProxyScaleRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ScaleProxyRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ChangeProxyScaleRequestXLanguageEnum | string): ChangeProxyScaleRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ChangeProxyScaleRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ChangeProxyScaleRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ChangeProxyScaleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ScaleProxyRequestBody): ChangeProxyScaleRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeProxyScaleRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
