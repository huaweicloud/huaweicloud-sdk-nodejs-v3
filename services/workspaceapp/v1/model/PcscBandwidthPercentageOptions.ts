

export class PcscBandwidthPercentageOptions {
    private 'pcsc_bandwidth_percentage_value'?: number;
    public constructor() { 
    }
    public withPcscBandwidthPercentageValue(pcscBandwidthPercentageValue: number): PcscBandwidthPercentageOptions {
        this['pcsc_bandwidth_percentage_value'] = pcscBandwidthPercentageValue;
        return this;
    }
    public set pcscBandwidthPercentageValue(pcscBandwidthPercentageValue: number  | undefined) {
        this['pcsc_bandwidth_percentage_value'] = pcscBandwidthPercentageValue;
    }
    public get pcscBandwidthPercentageValue(): number | undefined {
        return this['pcsc_bandwidth_percentage_value'];
    }
}