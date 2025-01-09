

export class DisplayBandwidthPercentageOptions {
    private 'display_bandwidth_percentage_value'?: number;
    public constructor() { 
    }
    public withDisplayBandwidthPercentageValue(displayBandwidthPercentageValue: number): DisplayBandwidthPercentageOptions {
        this['display_bandwidth_percentage_value'] = displayBandwidthPercentageValue;
        return this;
    }
    public set displayBandwidthPercentageValue(displayBandwidthPercentageValue: number  | undefined) {
        this['display_bandwidth_percentage_value'] = displayBandwidthPercentageValue;
    }
    public get displayBandwidthPercentageValue(): number | undefined {
        return this['display_bandwidth_percentage_value'];
    }
}