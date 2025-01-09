

export class TwainBandwidthPercentageOptions {
    private 'twain_bandwidth_percentage_value'?: number;
    public constructor() { 
    }
    public withTwainBandwidthPercentageValue(twainBandwidthPercentageValue: number): TwainBandwidthPercentageOptions {
        this['twain_bandwidth_percentage_value'] = twainBandwidthPercentageValue;
        return this;
    }
    public set twainBandwidthPercentageValue(twainBandwidthPercentageValue: number  | undefined) {
        this['twain_bandwidth_percentage_value'] = twainBandwidthPercentageValue;
    }
    public get twainBandwidthPercentageValue(): number | undefined {
        return this['twain_bandwidth_percentage_value'];
    }
}