

export class VolumeDetail {
    private 'encrypt_flag'?: string;
    private 'kms_key'?: string;
    private 'key_alias'?: string;
    public type?: string;
    public size?: number;
    private 'kms_grant_id'?: string;
    public device?: string;
    public id?: string;
    private 'volume_id'?: string;
    private 'bill_resource_id'?: string;
    private 'create_time'?: string;
    private 'display_name'?: string;
    private 'cluster_id'?: string;
    private 'resource_spec_code'?: string;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withEncryptFlag(encryptFlag: string): VolumeDetail {
        this['encrypt_flag'] = encryptFlag;
        return this;
    }
    public set encryptFlag(encryptFlag: string  | undefined) {
        this['encrypt_flag'] = encryptFlag;
    }
    public get encryptFlag(): string | undefined {
        return this['encrypt_flag'];
    }
    public withKmsKey(kmsKey: string): VolumeDetail {
        this['kms_key'] = kmsKey;
        return this;
    }
    public set kmsKey(kmsKey: string  | undefined) {
        this['kms_key'] = kmsKey;
    }
    public get kmsKey(): string | undefined {
        return this['kms_key'];
    }
    public withKeyAlias(keyAlias: string): VolumeDetail {
        this['key_alias'] = keyAlias;
        return this;
    }
    public set keyAlias(keyAlias: string  | undefined) {
        this['key_alias'] = keyAlias;
    }
    public get keyAlias(): string | undefined {
        return this['key_alias'];
    }
    public withType(type: string): VolumeDetail {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): VolumeDetail {
        this['size'] = size;
        return this;
    }
    public withKmsGrantId(kmsGrantId: string): VolumeDetail {
        this['kms_grant_id'] = kmsGrantId;
        return this;
    }
    public set kmsGrantId(kmsGrantId: string  | undefined) {
        this['kms_grant_id'] = kmsGrantId;
    }
    public get kmsGrantId(): string | undefined {
        return this['kms_grant_id'];
    }
    public withDevice(device: string): VolumeDetail {
        this['device'] = device;
        return this;
    }
    public withId(id: string): VolumeDetail {
        this['id'] = id;
        return this;
    }
    public withVolumeId(volumeId: string): VolumeDetail {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withBillResourceId(billResourceId: string): VolumeDetail {
        this['bill_resource_id'] = billResourceId;
        return this;
    }
    public set billResourceId(billResourceId: string  | undefined) {
        this['bill_resource_id'] = billResourceId;
    }
    public get billResourceId(): string | undefined {
        return this['bill_resource_id'];
    }
    public withCreateTime(createTime: string): VolumeDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDisplayName(displayName: string): VolumeDetail {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withClusterId(clusterId: string): VolumeDetail {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withResourceSpecCode(resourceSpecCode: string): VolumeDetail {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
}