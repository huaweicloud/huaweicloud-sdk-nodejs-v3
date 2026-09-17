
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDeviceResponse extends SdkResponse {
    private 'device_name'?: string;
    public config?: object;
    public constructor() { 
        super();
    }
    public withDeviceName(deviceName: string): UpdateDeviceResponse {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string  | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName(): string | undefined {
        return this['device_name'];
    }
    public withConfig(config: object): UpdateDeviceResponse {
        this['config'] = config;
        return this;
    }
}