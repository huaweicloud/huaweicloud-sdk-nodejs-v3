

export class VirtualChannelBandwidthPercentageOptions {
    private 'virtual_channel_bandwidth_percentage_value'?: number;
    public constructor() { 
    }
    public withVirtualChannelBandwidthPercentageValue(virtualChannelBandwidthPercentageValue: number): VirtualChannelBandwidthPercentageOptions {
        this['virtual_channel_bandwidth_percentage_value'] = virtualChannelBandwidthPercentageValue;
        return this;
    }
    public set virtualChannelBandwidthPercentageValue(virtualChannelBandwidthPercentageValue: number  | undefined) {
        this['virtual_channel_bandwidth_percentage_value'] = virtualChannelBandwidthPercentageValue;
    }
    public get virtualChannelBandwidthPercentageValue(): number | undefined {
        return this['virtual_channel_bandwidth_percentage_value'];
    }
}