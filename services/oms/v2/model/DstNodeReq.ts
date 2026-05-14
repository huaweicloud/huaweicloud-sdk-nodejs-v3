

export class DstNodeReq {
    public ak?: string;
    public sk?: string;
    private 'security_token'?: string;
    public bucket?: string;
    private 'save_prefix'?: string;
    public region?: string;
    private 'crypto_type'?: DstNodeReqCryptoTypeEnum | string;
    private 'kms_key_id'?: string;
    public constructor(ak?: string, sk?: string, bucket?: string, region?: string) { 
        this['ak'] = ak;
        this['sk'] = sk;
        this['bucket'] = bucket;
        this['region'] = region;
    }
    public withAk(ak: string): DstNodeReq {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): DstNodeReq {
        this['sk'] = sk;
        return this;
    }
    public withSecurityToken(securityToken: string): DstNodeReq {
        this['security_token'] = securityToken;
        return this;
    }
    public set securityToken(securityToken: string  | undefined) {
        this['security_token'] = securityToken;
    }
    public get securityToken(): string | undefined {
        return this['security_token'];
    }
    public withBucket(bucket: string): DstNodeReq {
        this['bucket'] = bucket;
        return this;
    }
    public withSavePrefix(savePrefix: string): DstNodeReq {
        this['save_prefix'] = savePrefix;
        return this;
    }
    public set savePrefix(savePrefix: string  | undefined) {
        this['save_prefix'] = savePrefix;
    }
    public get savePrefix(): string | undefined {
        return this['save_prefix'];
    }
    public withRegion(region: string): DstNodeReq {
        this['region'] = region;
        return this;
    }
    public withCryptoType(cryptoType: DstNodeReqCryptoTypeEnum | string): DstNodeReq {
        this['crypto_type'] = cryptoType;
        return this;
    }
    public set cryptoType(cryptoType: DstNodeReqCryptoTypeEnum | string  | undefined) {
        this['crypto_type'] = cryptoType;
    }
    public get cryptoType(): DstNodeReqCryptoTypeEnum | string | undefined {
        return this['crypto_type'];
    }
    public withKmsKeyId(kmsKeyId: string): DstNodeReq {
        this['kms_key_id'] = kmsKeyId;
        return this;
    }
    public set kmsKeyId(kmsKeyId: string  | undefined) {
        this['kms_key_id'] = kmsKeyId;
    }
    public get kmsKeyId(): string | undefined {
        return this['kms_key_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DstNodeReqCryptoTypeEnum {
    DEFAULT = 'DEFAULT',
    KMS = 'KMS'
}
