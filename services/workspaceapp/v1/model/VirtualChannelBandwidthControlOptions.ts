

export class VirtualChannelBandwidthControlOptions {
    private 'virtual_channel_bandwidth_control_value'?: number;
    public constructor() { 
    }
    public withVirtualChannelBandwidthControlValue(virtualChannelBandwidthControlValue: number): VirtualChannelBandwidthControlOptions {
        this['virtual_channel_bandwidth_control_value'] = virtualChannelBandwidthControlValue;
        return this;
    }
    public set virtualChannelBandwidthControlValue(virtualChannelBandwidthControlValue: number  | undefined) {
        this['virtual_channel_bandwidth_control_value'] = virtualChannelBandwidthControlValue;
    }
    public get virtualChannelBandwidthControlValue(): number | undefined {
        return this['virtual_channel_bandwidth_control_value'];
    }
}