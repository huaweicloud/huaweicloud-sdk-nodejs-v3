
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetFingerprintResponse extends SdkResponse {
    private 'device_id'?: string;
    public fingerprint?: string;
    private 'fingerprint_type'?: string;
    public constructor() { 
        super();
    }
    public withDeviceId(deviceId: string): ResetFingerprintResponse {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withFingerprint(fingerprint: string): ResetFingerprintResponse {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withFingerprintType(fingerprintType: string): ResetFingerprintResponse {
        this['fingerprint_type'] = fingerprintType;
        return this;
    }
    public set fingerprintType(fingerprintType: string  | undefined) {
        this['fingerprint_type'] = fingerprintType;
    }
    public get fingerprintType(): string | undefined {
        return this['fingerprint_type'];
    }
}