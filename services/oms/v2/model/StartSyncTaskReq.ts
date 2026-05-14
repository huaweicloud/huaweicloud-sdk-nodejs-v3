

export class StartSyncTaskReq {
    private 'src_ak'?: string;
    private 'src_sk'?: string;
    private 'src_crypto_type'?: StartSyncTaskReqSrcCryptoTypeEnum | string;
    private 'src_kms_key_id'?: string;
    private 'dst_ak'?: string;
    private 'dst_sk'?: string;
    private 'dst_crypto_type'?: StartSyncTaskReqDstCryptoTypeEnum | string;
    private 'dst_kms_key_id'?: string;
    private 'source_cdn_authentication_key'?: string;
    private 'source_cdn_crypto_type'?: StartSyncTaskReqSourceCdnCryptoTypeEnum | string;
    private 'source_cdn_kms_key_id'?: string;
    public constructor(srcAk?: string, srcSk?: string, dstAk?: string, dstSk?: string) { 
        this['src_ak'] = srcAk;
        this['src_sk'] = srcSk;
        this['dst_ak'] = dstAk;
        this['dst_sk'] = dstSk;
    }
    public withSrcAk(srcAk: string): StartSyncTaskReq {
        this['src_ak'] = srcAk;
        return this;
    }
    public set srcAk(srcAk: string  | undefined) {
        this['src_ak'] = srcAk;
    }
    public get srcAk(): string | undefined {
        return this['src_ak'];
    }
    public withSrcSk(srcSk: string): StartSyncTaskReq {
        this['src_sk'] = srcSk;
        return this;
    }
    public set srcSk(srcSk: string  | undefined) {
        this['src_sk'] = srcSk;
    }
    public get srcSk(): string | undefined {
        return this['src_sk'];
    }
    public withSrcCryptoType(srcCryptoType: StartSyncTaskReqSrcCryptoTypeEnum | string): StartSyncTaskReq {
        this['src_crypto_type'] = srcCryptoType;
        return this;
    }
    public set srcCryptoType(srcCryptoType: StartSyncTaskReqSrcCryptoTypeEnum | string  | undefined) {
        this['src_crypto_type'] = srcCryptoType;
    }
    public get srcCryptoType(): StartSyncTaskReqSrcCryptoTypeEnum | string | undefined {
        return this['src_crypto_type'];
    }
    public withSrcKmsKeyId(srcKmsKeyId: string): StartSyncTaskReq {
        this['src_kms_key_id'] = srcKmsKeyId;
        return this;
    }
    public set srcKmsKeyId(srcKmsKeyId: string  | undefined) {
        this['src_kms_key_id'] = srcKmsKeyId;
    }
    public get srcKmsKeyId(): string | undefined {
        return this['src_kms_key_id'];
    }
    public withDstAk(dstAk: string): StartSyncTaskReq {
        this['dst_ak'] = dstAk;
        return this;
    }
    public set dstAk(dstAk: string  | undefined) {
        this['dst_ak'] = dstAk;
    }
    public get dstAk(): string | undefined {
        return this['dst_ak'];
    }
    public withDstSk(dstSk: string): StartSyncTaskReq {
        this['dst_sk'] = dstSk;
        return this;
    }
    public set dstSk(dstSk: string  | undefined) {
        this['dst_sk'] = dstSk;
    }
    public get dstSk(): string | undefined {
        return this['dst_sk'];
    }
    public withDstCryptoType(dstCryptoType: StartSyncTaskReqDstCryptoTypeEnum | string): StartSyncTaskReq {
        this['dst_crypto_type'] = dstCryptoType;
        return this;
    }
    public set dstCryptoType(dstCryptoType: StartSyncTaskReqDstCryptoTypeEnum | string  | undefined) {
        this['dst_crypto_type'] = dstCryptoType;
    }
    public get dstCryptoType(): StartSyncTaskReqDstCryptoTypeEnum | string | undefined {
        return this['dst_crypto_type'];
    }
    public withDstKmsKeyId(dstKmsKeyId: string): StartSyncTaskReq {
        this['dst_kms_key_id'] = dstKmsKeyId;
        return this;
    }
    public set dstKmsKeyId(dstKmsKeyId: string  | undefined) {
        this['dst_kms_key_id'] = dstKmsKeyId;
    }
    public get dstKmsKeyId(): string | undefined {
        return this['dst_kms_key_id'];
    }
    public withSourceCdnAuthenticationKey(sourceCdnAuthenticationKey: string): StartSyncTaskReq {
        this['source_cdn_authentication_key'] = sourceCdnAuthenticationKey;
        return this;
    }
    public set sourceCdnAuthenticationKey(sourceCdnAuthenticationKey: string  | undefined) {
        this['source_cdn_authentication_key'] = sourceCdnAuthenticationKey;
    }
    public get sourceCdnAuthenticationKey(): string | undefined {
        return this['source_cdn_authentication_key'];
    }
    public withSourceCdnCryptoType(sourceCdnCryptoType: StartSyncTaskReqSourceCdnCryptoTypeEnum | string): StartSyncTaskReq {
        this['source_cdn_crypto_type'] = sourceCdnCryptoType;
        return this;
    }
    public set sourceCdnCryptoType(sourceCdnCryptoType: StartSyncTaskReqSourceCdnCryptoTypeEnum | string  | undefined) {
        this['source_cdn_crypto_type'] = sourceCdnCryptoType;
    }
    public get sourceCdnCryptoType(): StartSyncTaskReqSourceCdnCryptoTypeEnum | string | undefined {
        return this['source_cdn_crypto_type'];
    }
    public withSourceCdnKmsKeyId(sourceCdnKmsKeyId: string): StartSyncTaskReq {
        this['source_cdn_kms_key_id'] = sourceCdnKmsKeyId;
        return this;
    }
    public set sourceCdnKmsKeyId(sourceCdnKmsKeyId: string  | undefined) {
        this['source_cdn_kms_key_id'] = sourceCdnKmsKeyId;
    }
    public get sourceCdnKmsKeyId(): string | undefined {
        return this['source_cdn_kms_key_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartSyncTaskReqSrcCryptoTypeEnum {
    DEFAULT = 'DEFAULT',
    KMS = 'KMS'
}
/**
    * @export
    * @enum {string}
    */
export enum StartSyncTaskReqDstCryptoTypeEnum {
    DEFAULT = 'DEFAULT',
    KMS = 'KMS'
}
/**
    * @export
    * @enum {string}
    */
export enum StartSyncTaskReqSourceCdnCryptoTypeEnum {
    DEFAULT = 'DEFAULT',
    KMS = 'KMS'
}
