import { BindServerRouteRequestBody } from './BindServerRouteRequestBody';


export class BindServerRouteRequest {
    private 'X-Language'?: BindServerRouteRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: BindServerRouteRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: BindServerRouteRequestXLanguageEnum | string): BindServerRouteRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BindServerRouteRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BindServerRouteRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): BindServerRouteRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BindServerRouteRequestBody): BindServerRouteRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BindServerRouteRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
