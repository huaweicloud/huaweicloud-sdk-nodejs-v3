import { SlowlogForLtsRequest } from './SlowlogForLtsRequest';


export class ListSlowlogForLtsRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ListSlowlogForLtsRequestXLanguageEnum | string;
    public body?: SlowlogForLtsRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListSlowlogForLtsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ListSlowlogForLtsRequestXLanguageEnum | string): ListSlowlogForLtsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSlowlogForLtsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSlowlogForLtsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SlowlogForLtsRequest): ListSlowlogForLtsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSlowlogForLtsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
