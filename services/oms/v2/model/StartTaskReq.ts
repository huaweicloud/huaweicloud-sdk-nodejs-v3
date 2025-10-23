

export class StartTaskReq {
    private 'src_ak'?: string;
    private 'src_sk'?: string;
    private 'connection_string'?: string;
    private 'json_auth_file'?: string;
    private 'src_security_token'?: string;
    private 'dst_ak'?: string;
    private 'dst_sk'?: string;
    private 'dst_security_token'?: string;
    private 'source_cdn_authentication_key'?: string;
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