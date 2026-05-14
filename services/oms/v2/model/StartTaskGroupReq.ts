

export class StartTaskGroupReq {
    private 'src_ak'?: string;
    private 'src_sk'?: string;
    private 'src_crypto_type'?: StartTaskGroupReqSrcCryptoTypeEnum | string;
    private 'src_kms_key_id'?: string;
    private 'connection_string'?: string;
    private 'json_auth_file'?: string;
    private 'dst_ak'?: string;
    private 'dst_sk'?: string;
    private 'dst_crypto_type'?: StartTaskGroupReqDstCryptoTypeEnum | string;
    private 'dst_kms_key_id'?: string;
    private 'source_cdn_authentication_key'?: string;
    private 'source_cdn_crypto_type'?: StartTaskGroupReqSourceCdnCryptoTypeEnum | string;
    private 'source_cdn_kms_key_id'?: string;
    public constructor(dstAk?: string, dstSk?: string) { 
        this['dst_ak'] = dstAk;
        this['dst_sk'] = dstSk;
    }
    public withSrcAk(srcAk: string): StartTaskGroupReq {
        this['src_ak'] = srcAk;
        return this;
    }
    public set srcAk(srcAk: string  | undefined) {
        this['src_ak'] = srcAk;
    }
    public get srcAk(): string | undefined {
        return this['src_ak'];
    }
    public withSrcSk(srcSk: string): StartTaskGroupReq {
        this['src_sk'] = srcSk;
        return this;
    }
    public set srcSk(srcSk: string  | undefined) {
        this['src_sk'] = srcSk;
    }
    public get srcSk(): string | undefined {
        return this['src_sk'];
    }
    public withSrcCryptoType(srcCryptoType: StartTaskGroupReqSrcCryptoTypeEnum | string): StartTaskGroupReq {
        this['src_crypto_type'] = srcCryptoType;
        return this;
    }
    public set srcCryptoType(srcCryptoType: StartTaskGroupReqSrcCryptoTypeEnum | string  | undefined) {
        this['src_crypto_type'] = srcCryptoType;
    }
    public get srcCryptoType(): StartTaskGroupReqSrcCryptoTypeEnum | string | undefined {
        return this['src_crypto_type'];
    }
    public withSrcKmsKeyId(srcKmsKeyId: string): StartTaskGroupReq {
        this['src_kms_key_id'] = srcKmsKeyId;
        return this;
    }
    public set srcKmsKeyId(srcKmsKeyId: string  | undefined) {
        this['src_kms_key_id'] = srcKmsKeyId;
    }
    public get srcKmsKeyId(): string | undefined {
        return this['src_kms_key_id'];
    }
    public withConnectionString(connectionString: string): StartTaskGroupReq {
        this['connection_string'] = connectionString;
        return this;
    }
    public set connectionString(connectionString: string  | undefined) {
        this['connection_string'] = connectionString;
    }
    public get connectionString(): string | undefined {
        return this['connection_string'];
    }
    public withJsonAuthFile(jsonAuthFile: string): StartTaskGroupReq {
        this['json_auth_file'] = jsonAuthFile;
        return this;
    }
    public set jsonAuthFile(jsonAuthFile: string  | undefined) {
        this['json_auth_file'] = jsonAuthFile;
    }
    public get jsonAuthFile(): string | undefined {
        return this['json_auth_file'];
    }
    public withDstAk(dstAk: string): StartTaskGroupReq {
        this['dst_ak'] = dstAk;
        return this;
    }
    public set dstAk(dstAk: string  | undefined) {
        this['dst_ak'] = dstAk;
    }
    public get dstAk(): string | undefined {
        return this['dst_ak'];
    }
    public withDstSk(dstSk: string): StartTaskGroupReq {
        this['dst_sk'] = dstSk;
        return this;
    }
    public set dstSk(dstSk: string  | undefined) {
        this['dst_sk'] = dstSk;
    }
    public get dstSk(): string | undefined {
        return this['dst_sk'];
    }
    public withDstCryptoType(dstCryptoType: StartTaskGroupReqDstCryptoTypeEnum | string): StartTaskGroupReq {
        this['dst_crypto_type'] = dstCryptoType;
        return this;
    }
    public set dstCryptoType(dstCryptoType: StartTaskGroupReqDstCryptoTypeEnum | string  | undefined) {
        this['dst_crypto_type'] = dstCryptoType;
    }
    public get dstCryptoType(): StartTaskGroupReqDstCryptoTypeEnum | string | undefined {
        return this['dst_crypto_type'];
    }
    public withDstKmsKeyId(dstKmsKeyId: string): StartTaskGroupReq {
        this['dst_kms_key_id'] = dstKmsKeyId;
        return this;
    }
    public set dstKmsKeyId(dstKmsKeyId: string  | undefined) {
        this['dst_kms_key_id'] = dstKmsKeyId;
    }
    public get dstKmsKeyId(): string | undefined {
        return this['dst_kms_key_id'];
    }
    public withSourceCdnAuthenticationKey(sourceCdnAuthenticationKey: string): StartTaskGroupReq {
        this['source_cdn_authentication_key'] = sourceCdnAuthenticationKey;
        return this;
    }
    public set sourceCdnAuthenticationKey(sourceCdnAuthenticationKey: string  | undefined) {
        this['source_cdn_authentication_key'] = sourceCdnAuthenticationKey;
    }
    public get sourceCdnAuthenticationKey(): string | undefined {
        return this['source_cdn_authentication_key'];
    }
    public withSourceCdnCryptoType(sourceCdnCryptoType: StartTaskGroupReqSourceCdnCryptoTypeEnum | string): StartTaskGroupReq {
        this['source_cdn_crypto_type'] = sourceCdnCryptoType;
        return this;
    }
    public set sourceCdnCryptoType(sourceCdnCryptoType: StartTaskGroupReqSourceCdnCryptoTypeEnum | string  | undefined) {
        this['source_cdn_crypto_type'] = sourceCdnCryptoType;
    }
    public get sourceCdnCryptoType(): StartTaskGroupReqSourceCdnCryptoTypeEnum | string | undefined {
        return this['source_cdn_crypto_type'];
    }
    public withSourceCdnKmsKeyId(sourceCdnKmsKeyId: string): StartTaskGroupReq {
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
export enum StartTaskGroupReqSrcCryptoTypeEnum {
    DEFAULT = 'DEFAULT',
    KMS = 'KMS'
}
/**
    * @export
    * @enum {string}
    */
export enum StartTaskGroupReqDstCryptoTypeEnum {
    DEFAULT = 'DEFAULT',
    KMS = 'KMS'
}
/**
    * @export
    * @enum {string}
    */
export enum StartTaskGroupReqSourceCdnCryptoTypeEnum {
    DEFAULT = 'DEFAULT',
    KMS = 'KMS'
}
