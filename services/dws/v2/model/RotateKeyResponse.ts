
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RotateKeyResponse extends SdkResponse {
    private 'master_key_name'?: string;
    private 'cluster_id'?: string;
    private 'rotate_key_time'?: string;
    public constructor() { 
        super();
    }
    public withMasterKeyName(masterKeyName: string): RotateKeyResponse {
        this['master_key_name'] = masterKeyName;
        return this;
    }
    public set masterKeyName(masterKeyName: string  | undefined) {
        this['master_key_name'] = masterKeyName;
    }
    public get masterKeyName(): string | undefined {
        return this['master_key_name'];
    }
    public withClusterId(clusterId: string): RotateKeyResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withRotateKeyTime(rotateKeyTime: string): RotateKeyResponse {
        this['rotate_key_time'] = rotateKeyTime;
        return this;
    }
    public set rotateKeyTime(rotateKeyTime: string  | undefined) {
        this['rotate_key_time'] = rotateKeyTime;
    }
    public get rotateKeyTime(): string | undefined {
        return this['rotate_key_time'];
    }
}