import { ConstructReq } from './ConstructReq';


export class CreateCrossCloudConstructDisasterRequest {
    private 'X-Language'?: CreateCrossCloudConstructDisasterRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ConstructReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: CreateCrossCloudConstructDisasterRequestXLanguageEnum | string): CreateCrossCloudConstructDisasterRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateCrossCloudConstructDisasterRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateCrossCloudConstructDisasterRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): CreateCrossCloudConstructDisasterRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ConstructReq): CreateCrossCloudConstructDisasterRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateCrossCloudConstructDisasterRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
