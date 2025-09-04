import { HtapErrorLogQueryRequestBody } from './HtapErrorLogQueryRequestBody';


export class ShowHtapErrorLogDetailRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ShowHtapErrorLogDetailRequestXLanguageEnum | string;
    public body?: HtapErrorLogQueryRequestBody;
    public constructor(instanceId?: string, xLanguage?: string) { 
        this['instance_id'] = instanceId;
        this['X-Language'] = xLanguage;
    }
    public withInstanceId(instanceId: string): ShowHtapErrorLogDetailRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ShowHtapErrorLogDetailRequestXLanguageEnum | string): ShowHtapErrorLogDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowHtapErrorLogDetailRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowHtapErrorLogDetailRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: HtapErrorLogQueryRequestBody): ShowHtapErrorLogDetailRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowHtapErrorLogDetailRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
