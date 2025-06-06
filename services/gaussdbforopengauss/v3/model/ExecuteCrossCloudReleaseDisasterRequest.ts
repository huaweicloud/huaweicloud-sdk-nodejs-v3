import { ReleaseDisasterReq } from './ReleaseDisasterReq';


export class ExecuteCrossCloudReleaseDisasterRequest {
    private 'X-Language'?: ExecuteCrossCloudReleaseDisasterRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ReleaseDisasterReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ExecuteCrossCloudReleaseDisasterRequestXLanguageEnum | string): ExecuteCrossCloudReleaseDisasterRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExecuteCrossCloudReleaseDisasterRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExecuteCrossCloudReleaseDisasterRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ExecuteCrossCloudReleaseDisasterRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ReleaseDisasterReq): ExecuteCrossCloudReleaseDisasterRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteCrossCloudReleaseDisasterRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
