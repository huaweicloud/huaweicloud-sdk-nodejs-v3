import { VirtualChannelOptions } from './VirtualChannelOptions';


export class VirtualChannel {
    private 'virtual_channel_control_enable'?: boolean;
    public options?: VirtualChannelOptions;
    public constructor() { 
    }
    public withVirtualChannelControlEnable(virtualChannelControlEnable: boolean): VirtualChannel {
        this['virtual_channel_control_enable'] = virtualChannelControlEnable;
        return this;
    }
    public set virtualChannelControlEnable(virtualChannelControlEnable: boolean  | undefined) {
        this['virtual_channel_control_enable'] = virtualChannelControlEnable;
    }
    public get virtualChannelControlEnable(): boolean | undefined {
        return this['virtual_channel_control_enable'];
    }
    public withOptions(options: VirtualChannelOptions): VirtualChannel {
        this['options'] = options;
        return this;
    }
}