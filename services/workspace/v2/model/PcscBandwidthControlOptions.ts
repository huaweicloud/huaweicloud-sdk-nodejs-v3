

export class PcscBandwidthControlOptions {
    private 'pcsc_bandwidth_control_value'?: number;
    public constructor() { 
    }
    public withPcscBandwidthControlValue(pcscBandwidthControlValue: number): PcscBandwidthControlOptions {
        this['pcsc_bandwidth_control_value'] = pcscBandwidthControlValue;
        return this;
    }
    public set pcscBandwidthControlValue(pcscBandwidthControlValue: number  | undefined) {
        this['pcsc_bandwidth_control_value'] = pcscBandwidthControlValue;
    }
    public get pcscBandwidthControlValue(): number | undefined {
        return this['pcsc_bandwidth_control_value'];
    }
}