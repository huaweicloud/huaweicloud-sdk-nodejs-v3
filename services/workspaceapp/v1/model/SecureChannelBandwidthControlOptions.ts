

export class SecureChannelBandwidthControlOptions {
    private 'secure_channel_bandwidth_control_value'?: number;
    public constructor() { 
    }
    public withSecureChannelBandwidthControlValue(secureChannelBandwidthControlValue: number): SecureChannelBandwidthControlOptions {
        this['secure_channel_bandwidth_control_value'] = secureChannelBandwidthControlValue;
        return this;
    }
    public set secureChannelBandwidthControlValue(secureChannelBandwidthControlValue: number  | undefined) {
        this['secure_channel_bandwidth_control_value'] = secureChannelBandwidthControlValue;
    }
    public get secureChannelBandwidthControlValue(): number | undefined {
        return this['secure_channel_bandwidth_control_value'];
    }
}