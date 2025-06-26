

export class VirtualChannelOptions {
    private 'custom_virtual_channel_name'?: string;
    private 'virtual_channel_plugin_details'?: string;
    private 'third_party_plugin_name'?: string;
    public constructor() { 
    }
    public withCustomVirtualChannelName(customVirtualChannelName: string): VirtualChannelOptions {
        this['custom_virtual_channel_name'] = customVirtualChannelName;
        return this;
    }
    public set customVirtualChannelName(customVirtualChannelName: string  | undefined) {
        this['custom_virtual_channel_name'] = customVirtualChannelName;
    }
    public get customVirtualChannelName(): string | undefined {
        return this['custom_virtual_channel_name'];
    }
    public withVirtualChannelPluginDetails(virtualChannelPluginDetails: string): VirtualChannelOptions {
        this['virtual_channel_plugin_details'] = virtualChannelPluginDetails;
        return this;
    }
    public set virtualChannelPluginDetails(virtualChannelPluginDetails: string  | undefined) {
        this['virtual_channel_plugin_details'] = virtualChannelPluginDetails;
    }
    public get virtualChannelPluginDetails(): string | undefined {
        return this['virtual_channel_plugin_details'];
    }
    public withThirdPartyPluginName(thirdPartyPluginName: string): VirtualChannelOptions {
        this['third_party_plugin_name'] = thirdPartyPluginName;
        return this;
    }
    public set thirdPartyPluginName(thirdPartyPluginName: string  | undefined) {
        this['third_party_plugin_name'] = thirdPartyPluginName;
    }
    public get thirdPartyPluginName(): string | undefined {
        return this['third_party_plugin_name'];
    }
}