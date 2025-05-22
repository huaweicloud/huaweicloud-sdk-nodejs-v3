
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterEncryptInfoResponse extends SdkResponse {
    public id?: string;
    private 'cluster_id'?: string;
    private 'master_key_id'?: string;
    private 'master_key_name'?: string;
    private 'last_rotate_key_time'?: string;
    private 'crypt_algorithm'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowClusterEncryptInfoResponse {
        this['id'] = id;
        return this;
    }
    public withClusterId(clusterId: string): ShowClusterEncryptInfoResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withMasterKeyId(masterKeyId: string): ShowClusterEncryptInfoResponse {
        this['master_key_id'] = masterKeyId;
        return this;
    }
    public set masterKeyId(masterKeyId: string  | undefined) {
        this['master_key_id'] = masterKeyId;
    }
    public get masterKeyId(): string | undefined {
        return this['master_key_id'];
    }
    public withMasterKeyName(masterKeyName: string): ShowClusterEncryptInfoResponse {
        this['master_key_name'] = masterKeyName;
        return this;
    }
    public set masterKeyName(masterKeyName: string  | undefined) {
        this['master_key_name'] = masterKeyName;
    }
    public get masterKeyName(): string | undefined {
        return this['master_key_name'];
    }
    public withLastRotateKeyTime(lastRotateKeyTime: string): ShowClusterEncryptInfoResponse {
        this['last_rotate_key_time'] = lastRotateKeyTime;
        return this;
    }
    public set lastRotateKeyTime(lastRotateKeyTime: string  | undefined) {
        this['last_rotate_key_time'] = lastRotateKeyTime;
    }
    public get lastRotateKeyTime(): string | undefined {
        return this['last_rotate_key_time'];
    }
    public withCryptAlgorithm(cryptAlgorithm: string): ShowClusterEncryptInfoResponse {
        this['crypt_algorithm'] = cryptAlgorithm;
        return this;
    }
    public set cryptAlgorithm(cryptAlgorithm: string  | undefined) {
        this['crypt_algorithm'] = cryptAlgorithm;
    }
    public get cryptAlgorithm(): string | undefined {
        return this['crypt_algorithm'];
    }
}