

export class ComBandwidthControlOptions {
    private 'com_bandwidth_control_value'?: number;
    public constructor() { 
    }
    public withComBandwidthControlValue(comBandwidthControlValue: number): ComBandwidthControlOptions {
        this['com_bandwidth_control_value'] = comBandwidthControlValue;
        return this;
    }
    public set comBandwidthControlValue(comBandwidthControlValue: number  | undefined) {
        this['com_bandwidth_control_value'] = comBandwidthControlValue;
    }
    public get comBandwidthControlValue(): number | undefined {
        return this['com_bandwidth_control_value'];
    }
}