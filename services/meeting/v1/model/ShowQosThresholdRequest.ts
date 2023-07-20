

export class ShowQosThresholdRequest {
    public thresholdType?: ShowQosThresholdRequestThresholdTypeEnum | string;
    public constructor(thresholdType?: string) { 
        this['thresholdType'] = thresholdType;
    }
    public withThresholdType(thresholdType: ShowQosThresholdRequestThresholdTypeEnum | string): ShowQosThresholdRequest {
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
