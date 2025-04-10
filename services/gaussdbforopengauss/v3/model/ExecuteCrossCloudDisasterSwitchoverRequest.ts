import { SwitchoverReq } from './SwitchoverReq';


export class ExecuteCrossCloudDisasterSwitchoverRequest {
    private 'X-Language'?: ExecuteCrossCloudDisasterSwitchoverRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: SwitchoverReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ExecuteCrossCloudDisasterSwitchoverRequestXLanguageEnum | string): ExecuteCrossCloudDisasterSwitchoverRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExecuteCrossCloudDisasterSwitchoverRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExecuteCrossCloudDisasterSwitchoverRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ExecuteCrossCloudDisasterSwitchoverRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchoverReq): ExecuteCrossCloudDisasterSwitchoverRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteCrossCloudDisasterSwitchoverRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
