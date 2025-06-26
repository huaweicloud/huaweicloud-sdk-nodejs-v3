

export class ComBandwidthPercentageOptions {
    private 'com_bandwidth_percentage_value'?: number;
    public constructor() { 
    }
    public withComBandwidthPercentageValue(comBandwidthPercentageValue: number): ComBandwidthPercentageOptions {
        this['com_bandwidth_percentage_value'] = comBandwidthPercentageValue;
        return this;
    }
    public set comBandwidthPercentageValue(comBandwidthPercentageValue: number  | undefined) {
        this['com_bandwidth_percentage_value'] = comBandwidthPercentageValue;
    }
    public get comBandwidthPercentageValue(): number | undefined {
        return this['com_bandwidth_percentage_value'];
    }
}