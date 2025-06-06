import { DisasterRecoverStopSimulationRequestBody } from './DisasterRecoverStopSimulationRequestBody';


export class ExecuteCrossCloudDisasterEndSimulationRequest {
    private 'X-Language'?: ExecuteCrossCloudDisasterEndSimulationRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: DisasterRecoverStopSimulationRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ExecuteCrossCloudDisasterEndSimulationRequestXLanguageEnum | string): ExecuteCrossCloudDisasterEndSimulationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExecuteCrossCloudDisasterEndSimulationRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExecuteCrossCloudDisasterEndSimulationRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ExecuteCrossCloudDisasterEndSimulationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DisasterRecoverStopSimulationRequestBody): ExecuteCrossCloudDisasterEndSimulationRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteCrossCloudDisasterEndSimulationRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
