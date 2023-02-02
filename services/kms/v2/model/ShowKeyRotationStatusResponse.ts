
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKeyRotationStatusResponse extends SdkResponse {
    private 'key_rotation_enabled'?: boolean | undefined;
    private 'rotation_interval'?: number | undefined;
    private 'last_rotation_time'?: string | undefined;
    private 'number_of_rotations'?: number | undefined;
    public constructor() { 
        super();
    }
    public withKeyRotationEnabled(keyRotationEnabled: boolean): ShowKeyRotationStatusResponse {
        this['key_rotation_enabled'] = keyRotationEnabled;
        return this;
    }
    public set keyRotationEnabled(keyRotationEnabled: boolean | undefined) {
        this['key_rotation_enabled'] = keyRotationEnabled;
    }
    public get keyRotationEnabled() {
        return this['key_rotation_enabled'];
    }
    public withRotationInterval(rotationInterval: number): ShowKeyRotationStatusResponse {
        this['rotation_interval'] = rotationInterval;
        return this;
    }
    public set rotationInterval(rotationInterval: number | undefined) {
        this['rotation_interval'] = rotationInterval;
    }
    public get rotationInterval() {
        return this['rotation_interval'];
    }
    public withLastRotationTime(lastRotationTime: string): ShowKeyRotationStatusResponse {
        this['last_rotation_time'] = lastRotationTime;
        return this;
    }
    public set lastRotationTime(lastRotationTime: string | undefined) {
        this['last_rotation_time'] = lastRotationTime;
    }
    public get lastRotationTime() {
        return this['last_rotation_time'];
    }
    public withNumberOfRotations(numberOfRotations: number): ShowKeyRotationStatusResponse {
        this['number_of_rotations'] = numberOfRotations;
        return this;
    }
    public set numberOfRotations(numberOfRotations: number | undefined) {
        this['number_of_rotations'] = numberOfRotations;
    }
    public get numberOfRotations() {
        return this['number_of_rotations'];
    }
}