

export class DisplayBandwidthControlOptions {
    private 'display_bandwidth_control_value'?: number;
    public constructor() { 
    }
    public withDisplayBandwidthControlValue(displayBandwidthControlValue: number): DisplayBandwidthControlOptions {
        this['display_bandwidth_control_value'] = displayBandwidthControlValue;
        return this;
    }
    public set displayBandwidthControlValue(displayBandwidthControlValue: number  | undefined) {
        this['display_bandwidth_control_value'] = displayBandwidthControlValue;
    }
    public get displayBandwidthControlValue(): number | undefined {
        return this['display_bandwidth_control_value'];
    }
}