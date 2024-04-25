import { EffectiveTimeRangeResponseDTO } from './EffectiveTimeRangeResponseDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDeviceProxyResponse extends SdkResponse {
    private 'proxy_id'?: string;
    private 'proxy_name'?: string;
    private 'proxy_devices'?: Array<string>;
    private 'effective_time_range'?: EffectiveTimeRangeResponseDTO;
    private 'app_id'?: string;
    public constructor() { 
        super();
    }
    public withProxyId(proxyId: string): UpdateDeviceProxyResponse {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
    public withProxyName(proxyName: string): UpdateDeviceProxyResponse {
        this['proxy_name'] = proxyName;
        return this;
    }
    public set proxyName(proxyName: string  | undefined) {
        this['proxy_name'] = proxyName;
    }
    public get proxyName(): string | undefined {
        return this['proxy_name'];
    }
    public withProxyDevices(proxyDevices: Array<string>): UpdateDeviceProxyResponse {
        this['proxy_devices'] = proxyDevices;
        return this;
    }
    public set proxyDevices(proxyDevices: Array<string>  | undefined) {
        this['proxy_devices'] = proxyDevices;
    }
    public get proxyDevices(): Array<string> | undefined {
        return this['proxy_devices'];
    }
    public withEffectiveTimeRange(effectiveTimeRange: EffectiveTimeRangeResponseDTO): UpdateDeviceProxyResponse {
        this['effective_time_range'] = effectiveTimeRange;
        return this;
    }
    public set effectiveTimeRange(effectiveTimeRange: EffectiveTimeRangeResponseDTO  | undefined) {
        this['effective_time_range'] = effectiveTimeRange;
    }
    public get effectiveTimeRange(): EffectiveTimeRangeResponseDTO | undefined {
        return this['effective_time_range'];
    }
    public withAppId(appId: string): UpdateDeviceProxyResponse {
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