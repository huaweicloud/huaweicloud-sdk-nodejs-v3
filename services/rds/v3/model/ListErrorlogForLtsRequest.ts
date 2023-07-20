import { ErrorlogForLtsRequest } from './ErrorlogForLtsRequest';


export class ListErrorlogForLtsRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ListErrorlogForLtsRequestXLanguageEnum | string;
    public body?: ErrorlogForLtsRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListErrorlogForLtsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ListErrorlogForLtsRequestXLanguageEnum | string): ListErrorlogForLtsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListErrorlogForLtsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListErrorlogForLtsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ErrorlogForLtsRequest): ListErrorlogForLtsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListErrorlogForLtsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
