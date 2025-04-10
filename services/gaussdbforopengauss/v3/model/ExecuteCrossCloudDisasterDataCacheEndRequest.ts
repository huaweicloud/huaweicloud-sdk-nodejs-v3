import { DisasterRecoverStopXlogKeepRequestBody } from './DisasterRecoverStopXlogKeepRequestBody';


export class ExecuteCrossCloudDisasterDataCacheEndRequest {
    private 'X-Language'?: ExecuteCrossCloudDisasterDataCacheEndRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: DisasterRecoverStopXlogKeepRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ExecuteCrossCloudDisasterDataCacheEndRequestXLanguageEnum | string): ExecuteCrossCloudDisasterDataCacheEndRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExecuteCrossCloudDisasterDataCacheEndRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExecuteCrossCloudDisasterDataCacheEndRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ExecuteCrossCloudDisasterDataCacheEndRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DisasterRecoverStopXlogKeepRequestBody): ExecuteCrossCloudDisasterDataCacheEndRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteCrossCloudDisasterDataCacheEndRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
