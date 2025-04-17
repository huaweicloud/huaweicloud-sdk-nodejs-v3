

export class ThresholdInfo {
    public threshold?: number;
    private 'threshold_color'?: ThresholdInfoThresholdColorEnum | string;
    public constructor(threshold?: number, thresholdColor?: string) { 
        this['threshold'] = threshold;
        this['threshold_color'] = thresholdColor;
    }
    public withThreshold(threshold: number): ThresholdInfo {
        this['threshold'] = threshold;
        return this;
    }
    public withThresholdColor(thresholdColor: ThresholdInfoThresholdColorEnum | string): ThresholdInfo {
        this['threshold_color'] = thresholdColor;
        return this;
    }
    public set thresholdColor(thresholdColor: ThresholdInfoThresholdColorEnum | string  | undefined) {
        this['threshold_color'] = thresholdColor;
    }
    public get thresholdColor(): ThresholdInfoThresholdColorEnum | string | undefined {
        return this['threshold_color'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ThresholdInfoThresholdColorEnum {
    B50E65 = '#B50E65',
    F23030 = '#F23030',
    FF8800 = '#FF8800',
    F2E70C = '#F2E70C'
}
