

export class TwainBandwidthControlOptions {
    private 'twain_bandwidth_control_value'?: number;
    public constructor() { 
    }
    public withTwainBandwidthControlValue(twainBandwidthControlValue: number): TwainBandwidthControlOptions {
        this['twain_bandwidth_control_value'] = twainBandwidthControlValue;
        return this;
    }
    public set twainBandwidthControlValue(twainBandwidthControlValue: number  | undefined) {
        this['twain_bandwidth_control_value'] = twainBandwidthControlValue;
    }
    public get twainBandwidthControlValue(): number | undefined {
        return this['twain_bandwidth_control_value'];
    }
}