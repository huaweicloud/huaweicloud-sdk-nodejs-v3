
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddDeviceResponse extends SdkResponse {
    private 'device_id'?: string;
    public password?: string;
    public constructor() { 
        super();
    }
    public withDeviceId(deviceId: string): AddDeviceResponse {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withPassword(password: string): AddDeviceResponse {
        this['password'] = password;
        return this;
    }
}