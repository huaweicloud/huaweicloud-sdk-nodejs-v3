import { EffectiveTimeRange } from './EffectiveTimeRange';


export class AddDeviceProxy {
    private 'proxy_name'?: string;
    private 'proxy_devices'?: Array<string>;
    private 'effective_time_range'?: EffectiveTimeRange;
    private 'app_id'?: string;
    public constructor(proxyName?: string, proxyDevices?: Array<string>, effectiveTimeRange?: EffectiveTimeRange, appId?: string) { 
        this['proxy_name'] = proxyName;
        this['proxy_devices'] = proxyDevices;
        this['effective_time_range'] = effectiveTimeRange;
        this['app_id'] = appId;
    }
    public withProxyName(proxyName: string): AddDeviceProxy {
        this['proxy_name'] = proxyName;
        return this;
    }
    public set proxyName(proxyName: string  | undefined) {
        this['proxy_name'] = proxyName;
    }
    public get proxyName(): string | undefined {
        return this['proxy_name'];
    }
    public withProxyDevices(proxyDevices: Array<string>): AddDeviceProxy {
        this['proxy_devices'] = proxyDevices;
        return this;
    }
    public set proxyDevices(proxyDevices: Array<string>  | undefined) {
        this['proxy_devices'] = proxyDevices;
    }
    public get proxyDevices(): Array<string> | undefined {
        return this['proxy_devices'];
    }
    public withEffectiveTimeRange(effectiveTimeRange: EffectiveTimeRange): AddDeviceProxy {
        this['effective_time_range'] = effectiveTimeRange;
        return this;
    }
    public set effectiveTimeRange(effectiveTimeRange: EffectiveTimeRange  | undefined) {
        this['effective_time_range'] = effectiveTimeRange;
    }
    public get effectiveTimeRange(): EffectiveTimeRange | undefined {
        return this['effective_time_range'];
    }
    public withAppId(appId: string): AddDeviceProxy {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}