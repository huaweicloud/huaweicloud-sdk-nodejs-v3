

export class StartTaskReq {
    private 'src_ak'?: string;
    private 'src_sk'?: string;
    private 'connection_string'?: string;
    private 'src_crypto_type'?: StartTaskReqSrcCryptoTypeEnum | string;
    private 'src_kms_key_id'?: string;
    private 'json_auth_file'?: string;
    private 'src_security_token'?: string;
    private 'dst_ak'?: string;
    private 'dst_sk'?: string;
    private 'dst_crypto_type'?: StartTaskReqDstCryptoTypeEnum | string;
    private 'dst_kms_key_id'?: string;
    private 'dst_security_token'?: string;
    private 'source_cdn_authentication_key'?: string;
    private 'source_cdn_crypto_type'?: StartTaskReqSourceCdnCryptoTypeEnum | string;
    private 'source_cdn_kms_key_id'?: string;
    private 'migrate_failed_object'?: boolean;
    public constructor(dstAk?: string, dstSk?: string) { 
        this['dst_ak'] = dstAk;
        this['dst_sk'] = dstSk;
    }
    public withSrcAk(srcAk: string): StartTaskReq {
        this['src_ak'] = srcAk;
        return this;
    }
    public set srcAk(srcAk: string  | undefined) {
        this['src_ak'] = srcAk;
    }
    public get srcAk(): string | undefined {
        return this['src_ak'];
    }
    public withSrcSk(srcSk: string): StartTaskReq {
        this['src_sk'] = srcSk;
        return this;
    }
    public set srcSk(srcSk: string  | undefined) {
        this['src_sk'] = srcSk;
    }
    public get srcSk(): string | undefined {
        return this['src_sk'];
    }
    public withConnectionString(connectionString: string): StartTaskReq {
        this['connection_string'] = connectionString;
        return this;
    }
    public set connectionString(connectionString: string  | undefined) {
        this['connection_string'] = connectionString;
    }
    public get connectionString(): string | undefined {
        return this['connection_string'];
    }
    public withSrcCryptoType(srcCryptoType: StartTaskReqSrcCryptoTypeEnum | string): StartTaskReq {
        this['src_crypto_type'] = srcCryptoType;
        return this;
    }
    public set srcCryptoType(srcCryptoType: StartTaskReqSrcCryptoTypeEnum | string  | undefined) {
        this['src_crypto_type'] = srcCryptoType;
    }
    public get srcCryptoType(): StartTaskReqSrcCryptoTypeEnum | string | undefined {
        return this['src_crypto_type'];
    }
    public withSrcKmsKeyId(srcKmsKeyId: string): StartTaskReq {
        this['src_kms_key_id'] = srcKmsKeyId;
        return this;
    }
    public set srcKmsKeyId(srcKmsKeyId: string  | undefined) {
        this['src_kms_key_id'] = srcKmsKeyId;
    }
    public get srcKmsKeyId(): string | undefined {
        return this['src_kms_key_id'];
    }
    public withJsonAuthFile(jsonAuthFile: string): StartTaskReq {
        this['json_auth_file'] = jsonAuthFile;
        return this;
    }
    public set jsonAuthFile(jsonAuthFile: string  | undefined) {
        this['json_auth_file'] = jsonAuthFile;
    }
    public get jsonAuthFile(): string | undefined {
        return this['json_auth_file'];
    }
    public withSrcSecurityToken(srcSecurityToken: string): StartTaskReq {
        this['src_security_token'] = srcSecurityToken;
        return this;
    }
    public set srcSecurityToken(srcSecurityToken: string  | undefined) {
        this['src_security_token'] = srcSecurityToken;
    }
    public get srcSecurityToken(): string | undefined {
        return this['src_security_token'];
    }
    public withDstAk(dstAk: string): StartTaskReq {
        this['dst_ak'] = dstAk;
        return this;
    }
    public set dstAk(dstAk: string  | undefined) {
        this['dst_ak'] = dstAk;
    }
    public get dstAk(): string | undefined {
        return this['dst_ak'];
    }
    public withDstSk(dstSk: string): StartTaskReq {
        this['dst_sk'] = dstSk;
        return this;
    }
    public set dstSk(dstSk: string  | undefined) {
        this['dst_sk'] = dstSk;
    }
    public get dstSk(): string | undefined {
        return this['dst_sk'];
    }
    public withDstCryptoType(dstCryptoType: StartTaskReqDstCryptoTypeEnum | string): StartTaskReq {
        this['dst_crypto_type'] = dstCryptoType;
        return this;
    }
    public set dstCryptoType(dstCryptoType: StartTaskReqDstCryptoTypeEnum | string  | undefined) {
        this['dst_crypto_type'] = dstCryptoType;
    }
    public get dstCryptoType(): StartTaskReqDstCryptoTypeEnum | string | undefined {
        return this['dst_crypto_type'];
    }
    public withDstKmsKeyId(dstKmsKeyId: string): StartTaskReq {
        this['dst_kms_key_id'] = dstKmsKeyId;
        return this;
    }
    public set dstKmsKeyId(dstKmsKeyId: string  | undefined) {
        this['dst_kms_key_id'] = dstKmsKeyId;
    }
    public get dstKmsKeyId(): string | undefined {
        return this['dst_kms_key_id'];
    }
    public withDstSecurityToken(dstSecurityToken: string): StartTaskReq {
        this['dst_security_token'] = dstSecurityToken;
        return this;
    }
    public set dstSecurityToken(dstSecurityToken: string  | undefined) {
        this['dst_security_token'] = dstSecurityToken;
    }
    public get dstSecurityToken(): string | undefined {
        return this['dst_security_token'];
    }
    public withSourceCdnAuthenticationKey(sourceCdnAuthenticationKey: string): StartTaskReq {
        this['source_cdn_authentication_key'] = sourceCdnAuthenticationKey;
        return this;
    }
    public set sourceCdnAuthenticationKey(sourceCdnAuthenticationKey: string  | undefined) {
        this['source_cdn_authentication_key'] = sourceCdnAuthenticationKey;
    }
    public get sourceCdnAuthenticationKey(): string | undefined {
        return this['source_cdn_authentication_key'];
    }
    public withSourceCdnCryptoType(sourceCdnCryptoType: StartTaskReqSourceCdnCryptoTypeEnum | string): StartTaskReq {
        this['source_cdn_crypto_type'] = sourceCdnCryptoType;
        return this;
    }
    public set sourceCdnCryptoType(sourceCdnCryptoType: StartTaskReqSourceCdnCryptoTypeEnum | string  | undefined) {
        this['source_cdn_crypto_type'] = sourceCdnCryptoType;
    }
    public get sourceCdnCryptoType(): StartTaskReqSourceCdnCryptoTypeEnum | string | undefined {
        return this['source_cdn_crypto_type'];
    }
    public withSourceCdnKmsKeyId(sourceCdnKmsKeyId: string): StartTaskReq {
        this['source_cdn_kms_key_id'] = sourceCdnKmsKeyId;
        return this;
    }
    public set sourceCdnKmsKeyId(sourceCdnKmsKeyId: string  | undefined) {
        this['source_cdn_kms_key_id'] = sourceCdnKmsKeyId;
    }
    public get sourceCdnKmsKeyId(): string | undefined {
        return this['source_cdn_kms_key_id'];
    }
    public withMigrateFailedObject(migrateFailedObject: boolean): StartTaskReq {
        this['migrate_failed_object'] = migrateFailedObject;
        return this;
    }
    public set migrateFailedObject(migrateFailedObject: boolean  | undefined) {
        this['migrate_failed_object'] = migrateFailedObject;
    }
    public get migrateFailedObject(): boolean | undefined {
        return this['migrate_failed_object'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartTaskReqSrcCryptoTypeEnum {
    DEFAULT = 'DEFAULT',
    KMS = 'KMS'
}
/**
    * @export
    * @enum {string}
    */
export enum StartTaskReqDstCryptoTypeEnum {
    DEFAULT = 'DEFAULT',
    KMS = 'KMS'
}
/**
    * @export
    * @enum {string}
    */
export enum StartTaskReqSourceCdnCryptoTypeEnum {
    DEFAULT = 'DEFAULT',
    KMS = 'KMS'
}
