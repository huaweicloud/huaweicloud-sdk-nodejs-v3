

export class MultimediaBandwidthControlOptions {
    private 'multimedia_bandwidth_control_value'?: number;
    public constructor() { 
    }
    public withMultimediaBandwidthControlValue(multimediaBandwidthControlValue: number): MultimediaBandwidthControlOptions {
        this['multimedia_bandwidth_control_value'] = multimediaBandwidthControlValue;
        return this;
    }
    public set multimediaBandwidthControlValue(multimediaBandwidthControlValue: number  | undefined) {
        this['multimedia_bandwidth_control_value'] = multimediaBandwidthControlValue;
    }
    public get multimediaBandwidthControlValue(): number | undefined {
        return this['multimedia_bandwidth_control_value'];
    }
}