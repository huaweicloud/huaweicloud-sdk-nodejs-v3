

export class MultimediaBandwidthPercentageOptions {
    private 'multimedia_bandwidth_percentage_value'?: number;
    public constructor() { 
    }
    public withMultimediaBandwidthPercentageValue(multimediaBandwidthPercentageValue: number): MultimediaBandwidthPercentageOptions {
        this['multimedia_bandwidth_percentage_value'] = multimediaBandwidthPercentageValue;
        return this;
    }
    public set multimediaBandwidthPercentageValue(multimediaBandwidthPercentageValue: number  | undefined) {
        this['multimedia_bandwidth_percentage_value'] = multimediaBandwidthPercentageValue;
    }
    public get multimediaBandwidthPercentageValue(): number | undefined {
        return this['multimedia_bandwidth_percentage_value'];
    }
}