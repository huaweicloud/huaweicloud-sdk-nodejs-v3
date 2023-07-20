import { SetQosThresholdReq } from './SetQosThresholdReq';


export class SetQosThresholdRequest {
    public thresholdType?: SetQosThresholdRequestThresholdTypeEnum | string;
    public body?: SetQosThresholdReq;
    public constructor(thresholdType?: string) { 
        this['thresholdType'] = thresholdType;
    }
    public withThresholdType(thresholdType: SetQosThresholdRequestThresholdTypeEnum | string): SetQosThresholdRequest {
        this['thresholdType'] = thresholdType;
        return this;
    }
    public withBody(body: SetQosThresholdReq): SetQosThresholdRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetQosThresholdRequestThresholdTypeEnum {
    AUDIO = 'AUDIO',
    VIDEO = 'VIDEO',
    SCREEN = 'SCREEN',
    CPU = 'CPU'
}
