

export class ThresholdInfoResp {
    public threshold?: number;
    private 'threshold_color'?: ThresholdInfoRespThresholdColorEnum | string;
    public constructor() { 
    }
    public withThreshold(threshold: number): ThresholdInfoResp {
        this['threshold'] = threshold;
        return this;
    }
    public withThresholdColor(thresholdColor: ThresholdInfoRespThresholdColorEnum | string): ThresholdInfoResp {
        this['threshold_color'] = thresholdColor;
        return this;
    }
    public set thresholdColor(thresholdColor: ThresholdInfoRespThresholdColorEnum | string  | undefined) {
        this['threshold_color'] = thresholdColor;
    }
    public get thresholdColor(): ThresholdInfoRespThresholdColorEnum | string | undefined {
        return this['threshold_color'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ThresholdInfoRespThresholdColorEnum {
    B50E65 = '#B50E65',
    F23030 = '#F23030',
    FF8800 = '#FF8800',
    F2E70C = '#F2E70C'
}
