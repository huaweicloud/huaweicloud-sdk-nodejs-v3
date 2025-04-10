import { DisasterFailoverReqBody } from './DisasterFailoverReqBody';


export class ExecuteCrossCloudDisasterRecoveryFailoverRequest {
    private 'X-Language'?: ExecuteCrossCloudDisasterRecoveryFailoverRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: DisasterFailoverReqBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ExecuteCrossCloudDisasterRecoveryFailoverRequestXLanguageEnum | string): ExecuteCrossCloudDisasterRecoveryFailoverRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExecuteCrossCloudDisasterRecoveryFailoverRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExecuteCrossCloudDisasterRecoveryFailoverRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ExecuteCrossCloudDisasterRecoveryFailoverRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DisasterFailoverReqBody): ExecuteCrossCloudDisasterRecoveryFailoverRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteCrossCloudDisasterRecoveryFailoverRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
