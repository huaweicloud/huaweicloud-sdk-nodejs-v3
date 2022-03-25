
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetFingerprintResponse extends SdkResponse {
    private 'device_id'?: string | undefined;
    public fingerprint?: string;
    public constructor() { 
        super();
    }
    public withDeviceId(deviceId: string): ResetFingerprintResponse {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withFingerprint(fingerprint: string): ResetFingerprintResponse {
        this['fingerprint'] = fingerprint;
        return this;
    }
}