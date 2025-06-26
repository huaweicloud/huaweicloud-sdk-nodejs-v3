

export class SecureChannelBandwidthPercentageOptions {
    private 'secure_channel_bandwidth_percentage_value'?: number;
    public constructor() { 
    }
    public withSecureChannelBandwidthPercentageValue(secureChannelBandwidthPercentageValue: number): SecureChannelBandwidthPercentageOptions {
        this['secure_channel_bandwidth_percentage_value'] = secureChannelBandwidthPercentageValue;
        return this;
    }
    public set secureChannelBandwidthPercentageValue(secureChannelBandwidthPercentageValue: number  | undefined) {
        this['secure_channel_bandwidth_percentage_value'] = secureChannelBandwidthPercentageValue;
    }
    public get secureChannelBandwidthPercentageValue(): number | undefined {
        return this['secure_channel_bandwidth_percentage_value'];
    }
}