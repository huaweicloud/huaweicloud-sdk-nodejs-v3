
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetDeviceSecretResponse extends SdkResponse {
    private 'device_id'?: string;
    public secret?: string;
    private 'secret_type'?: string;
    public constructor() { 
        super();
    }
    public withDeviceId(deviceId: string): ResetDeviceSecretResponse {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withSecret(secret: string): ResetDeviceSecretResponse {
        this['secret'] = secret;
        return this;
    }
    public withSecretType(secretType: string): ResetDeviceSecretResponse {
        this['secret_type'] = secretType;
        return this;
    }
    public set secretType(secretType: string  | undefined) {
        this['secret_type'] = secretType;
    }
    public get secretType(): string | undefined {
        return this['secret_type'];
    }
}