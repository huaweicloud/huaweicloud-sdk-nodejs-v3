import { UpdateTimeZoneRequestBody } from './UpdateTimeZoneRequestBody';


export class UpdateTimeZoneRequest {
    private 'X-Language'?: UpdateTimeZoneRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: UpdateTimeZoneRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: UpdateTimeZoneRequestXLanguageEnum | string): UpdateTimeZoneRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateTimeZoneRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateTimeZoneRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UpdateTimeZoneRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateTimeZoneRequestBody): UpdateTimeZoneRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateTimeZoneRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
