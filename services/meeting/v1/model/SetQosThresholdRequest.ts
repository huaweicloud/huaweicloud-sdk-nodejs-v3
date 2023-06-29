import { SetQosThresholdReq } from './SetQosThresholdReq';


export class SetQosThresholdRequest {
    public thresholdType: SetQosThresholdRequestThresholdTypeEnum;
    public body?: SetQosThresholdReq;
    public constructor(thresholdType?: any) { 
        this['thresholdType'] = thresholdType;
    }
    public withThresholdType(thresholdType: SetQosThresholdRequestThresholdTypeEnum): SetQosThresholdRequest {
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
