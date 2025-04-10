import { DisasterRecoverStartXlogKeepRequestBody } from './DisasterRecoverStartXlogKeepRequestBody';


export class ExecuteCrossCloudDisasterDataCacheStartRequest {
    private 'X-Language'?: ExecuteCrossCloudDisasterDataCacheStartRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: DisasterRecoverStartXlogKeepRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ExecuteCrossCloudDisasterDataCacheStartRequestXLanguageEnum | string): ExecuteCrossCloudDisasterDataCacheStartRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExecuteCrossCloudDisasterDataCacheStartRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExecuteCrossCloudDisasterDataCacheStartRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ExecuteCrossCloudDisasterDataCacheStartRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DisasterRecoverStartXlogKeepRequestBody): ExecuteCrossCloudDisasterDataCacheStartRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteCrossCloudDisasterDataCacheStartRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
