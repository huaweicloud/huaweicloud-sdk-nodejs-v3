

export class TaskGroupDstNode {
    public ak?: string;
    public sk?: string;
    private 'crypto_type'?: TaskGroupDstNodeCryptoTypeEnum | string;
    private 'kms_key_id'?: string;
    public region?: string;
    public bucket?: string;
    private 'cloud_type'?: string;
    private 'save_prefix'?: string;
    public constructor(ak?: string, sk?: string, region?: string, bucket?: string) { 
        this['ak'] = ak;
        this['sk'] = sk;
        this['region'] = region;
        this['bucket'] = bucket;
    }
    public withAk(ak: string): TaskGroupDstNode {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): TaskGroupDstNode {
        this['sk'] = sk;
        return this;
    }
    public withCryptoType(cryptoType: TaskGroupDstNodeCryptoTypeEnum | string): TaskGroupDstNode {
        this['crypto_type'] = cryptoType;
        return this;
    }
    public set cryptoType(cryptoType: TaskGroupDstNodeCryptoTypeEnum | string  | undefined) {
        this['crypto_type'] = cryptoType;
    }
    public get cryptoType(): TaskGroupDstNodeCryptoTypeEnum | string | undefined {
        return this['crypto_type'];
    }
    public withKmsKeyId(kmsKeyId: string): TaskGroupDstNode {
        this['kms_key_id'] = kmsKeyId;
        return this;
    }
    public set kmsKeyId(kmsKeyId: string  | undefined) {
        this['kms_key_id'] = kmsKeyId;
    }
    public get kmsKeyId(): string | undefined {
        return this['kms_key_id'];
    }
    public withRegion(region: string): TaskGroupDstNode {
        this['region'] = region;
        return this;
    }
    public withBucket(bucket: string): TaskGroupDstNode {
        this['bucket'] = bucket;
        return this;
    }
    public withCloudType(cloudType: string): TaskGroupDstNode {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): string | undefined {
        return this['cloud_type'];
    }
    public withSavePrefix(savePrefix: string): TaskGroupDstNode {
        this['save_prefix'] = savePrefix;
        return this;
    }
    public set savePrefix(savePrefix: string  | undefined) {
        this['save_prefix'] = savePrefix;
    }
    public get savePrefix(): string | undefined {
        return this['save_prefix'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TaskGroupDstNodeCryptoTypeEnum {
    DEFAULT = 'DEFAULT',
    KMS = 'KMS'
}
