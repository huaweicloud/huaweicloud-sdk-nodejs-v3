import { UpdateFeaturesRequestBody } from './UpdateFeaturesRequestBody';


export class UpdateFeaturesRequest {
    private 'X-Language'?: UpdateFeaturesRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: UpdateFeaturesRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: UpdateFeaturesRequestXLanguageEnum | string): UpdateFeaturesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateFeaturesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateFeaturesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UpdateFeaturesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateFeaturesRequestBody): UpdateFeaturesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateFeaturesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
