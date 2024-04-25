import { EffectiveTimeRange } from './EffectiveTimeRange';


export class UpdateDeviceProxy {
    private 'proxy_name'?: string;
    private 'proxy_devices'?: Array<string>;
    private 'effective_time_range'?: EffectiveTimeRange;
    public constructor() { 
    }
    public withProxyName(proxyName: string): UpdateDeviceProxy {
        this['proxy_name'] = proxyName;
        return this;
    }
    public set proxyName(proxyName: string  | undefined) {
        this['proxy_name'] = proxyName;
    }
    public get proxyName(): string | undefined {
        return this['proxy_name'];
    }
    public withProxyDevices(proxyDevices: Array<string>): UpdateDeviceProxy {
        this['proxy_devices'] = proxyDevices;
        return this;
    }
    public set proxyDevices(proxyDevices: Array<string>  | undefined) {
        this['proxy_devices'] = proxyDevices;
    }
    public get proxyDevices(): Array<string> | undefined {
        return this['proxy_devices'];
    }
    public withEffectiveTimeRange(effectiveTimeRange: EffectiveTimeRange): UpdateDeviceProxy {
        this['effective_time_range'] = effectiveTimeRange;
        return this;
    }
    public set effectiveTimeRange(effectiveTimeRange: EffectiveTimeRange  | undefined) {
        this['effective_time_range'] = effectiveTimeRange;
    }
    public get effectiveTimeRange(): EffectiveTimeRange | undefined {
        return this['effective_time_range'];
    }
}