

export class ShowQosThresholdRequest {
    public thresholdType: ShowQosThresholdRequestThresholdTypeEnum;
    public constructor(thresholdType?: any) { 
        this['thresholdType'] = thresholdType;
    }
    public withThresholdType(thresholdType: ShowQosThresholdRequestThresholdTypeEnum): ShowQosThresholdRequest {
        this['thresholdType'] = thresholdType;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowQosThresholdRequestThresholdTypeEnum {
    AUDIO = 'AUDIO',
    VIDEO = 'VIDEO',
    SCREEN = 'SCREEN',
    CPU = 'CPU'
}
