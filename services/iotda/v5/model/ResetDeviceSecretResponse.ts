
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetDeviceSecretResponse extends SdkResponse {
    private 'device_id'?: string | undefined;
    public secret?: string;
    public constructor() { 
        super();
    }
    public withDeviceId(deviceId: string): ResetDeviceSecretResponse {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withSecret(secret: string): ResetDeviceSecretResponse {
        this['secret'] = secret;
        return this;
    }
}