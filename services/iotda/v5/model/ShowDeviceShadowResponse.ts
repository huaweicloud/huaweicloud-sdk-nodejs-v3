import { DeviceShadowData } from './DeviceShadowData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeviceShadowResponse extends SdkResponse {
    private 'device_id'?: string;
    public shadow?: Array<DeviceShadowData>;
    public constructor() { 
        super();
    }
    public withDeviceId(deviceId: string): ShowDeviceShadowResponse {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withShadow(shadow: Array<DeviceShadowData>): ShowDeviceShadowResponse {
        this['shadow'] = shadow;
        return this;
    }
}