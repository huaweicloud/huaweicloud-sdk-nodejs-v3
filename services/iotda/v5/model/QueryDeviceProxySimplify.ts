import { EffectiveTimeRangeResponseDTO } from './EffectiveTimeRangeResponseDTO';


export class QueryDeviceProxySimplify {
    private 'proxy_id'?: string;
    private 'proxy_name'?: string;
    private 'effective_time_range'?: EffectiveTimeRangeResponseDTO;
    private 'app_id'?: string;
    public constructor() { 
    }
    public withProxyId(proxyId: string): QueryDeviceProxySimplify {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
    public withProxyName(proxyName: string): QueryDeviceProxySimplify {
        this['proxy_name'] = proxyName;
        return this;
    }
    public set proxyName(proxyName: string  | undefined) {
        this['proxy_name'] = proxyName;
    }
    public get proxyName(): string | undefined {
        return this['proxy_name'];
    }
    public withEffectiveTimeRange(effectiveTimeRange: EffectiveTimeRangeResponseDTO): QueryDeviceProxySimplify {
        this['effective_time_range'] = effectiveTimeRange;
        return this;
    }
    public set effectiveTimeRange(effectiveTimeRange: EffectiveTimeRangeResponseDTO  | undefined) {
        this['effective_time_range'] = effectiveTimeRange;
    }
    public get effectiveTimeRange(): EffectiveTimeRangeResponseDTO | undefined {
        return this['effective_time_range'];
    }
    public withAppId(appId: string): QueryDeviceProxySimplify {
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