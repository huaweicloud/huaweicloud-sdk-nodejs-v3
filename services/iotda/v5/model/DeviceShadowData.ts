import { DeviceShadowProperties } from './DeviceShadowProperties';


export class DeviceShadowData {
    private 'service_id'?: string;
    public desired?: DeviceShadowProperties;
    public reported?: DeviceShadowProperties;
    public version?: number;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): DeviceShadowData {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withDesired(desired: DeviceShadowProperties): DeviceShadowData {
        this['desired'] = desired;
        return this;
    }
    public withReported(reported: DeviceShadowProperties): DeviceShadowData {
        this['reported'] = reported;
        return this;
    }
    public withVersion(version: number): DeviceShadowData {
        this['version'] = version;
        return this;
    }
}