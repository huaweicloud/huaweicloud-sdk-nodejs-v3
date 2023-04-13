

export class StartTaskReq {
    private 'src_ak'?: string | undefined;
    private 'src_sk'?: string | undefined;
    private 'src_security_token'?: string | undefined;
    private 'dst_ak': string | undefined;
    private 'dst_sk': string | undefined;
    private 'dst_security_token'?: string | undefined;
    private 'source_cdn_authentication_key'?: string | undefined;
    private 'migrate_failed_object'?: boolean | undefined;
    public constructor(dstAk?: any, dstSk?: any) { 
        this['dst_ak'] = dstAk;
        this['dst_sk'] = dstSk;
    }
    public withSrcAk(srcAk: string): StartTaskReq {
        this['src_ak'] = srcAk;
        return this;
    }
    public set srcAk(srcAk: string | undefined) {
        this['src_ak'] = srcAk;
    }
    public get srcAk() {
        return this['src_ak'];
    }
    public withSrcSk(srcSk: string): StartTaskReq {
        this['src_sk'] = srcSk;
        return this;
    }
    public set srcSk(srcSk: string | undefined) {
        this['src_sk'] = srcSk;
    }
    public get srcSk() {
        return this['src_sk'];
    }
    public withSrcSecurityToken(srcSecurityToken: string): StartTaskReq {
        this['src_security_token'] = srcSecurityToken;
        return this;
    }
    public set srcSecurityToken(srcSecurityToken: string | undefined) {
        this['src_security_token'] = srcSecurityToken;
    }
    public get srcSecurityToken() {
        return this['src_security_token'];
    }
    public withDstAk(dstAk: string): StartTaskReq {
        this['dst_ak'] = dstAk;
        return this;
    }
    public set dstAk(dstAk: string | undefined) {
        this['dst_ak'] = dstAk;
    }
    public get dstAk() {
        return this['dst_ak'];
    }
    public withDstSk(dstSk: string): StartTaskReq {
        this['dst_sk'] = dstSk;
        return this;
    }
    public set dstSk(dstSk: string | undefined) {
        this['dst_sk'] = dstSk;
    }
    public get dstSk() {
        return this['dst_sk'];
    }
    public withDstSecurityToken(dstSecurityToken: string): StartTaskReq {
        this['dst_security_token'] = dstSecurityToken;
        return this;
    }
    public set dstSecurityToken(dstSecurityToken: string | undefined) {
        this['dst_security_token'] = dstSecurityToken;
    }
    public get dstSecurityToken() {
        return this['dst_security_token'];
    }
    public withSourceCdnAuthenticationKey(sourceCdnAuthenticationKey: string): StartTaskReq {
        this['source_cdn_authentication_key'] = sourceCdnAuthenticationKey;
        return this;
    }
    public set sourceCdnAuthenticationKey(sourceCdnAuthenticationKey: string | undefined) {
        this['source_cdn_authentication_key'] = sourceCdnAuthenticationKey;
    }
    public get sourceCdnAuthenticationKey() {
        return this['source_cdn_authentication_key'];
    }
    public withMigrateFailedObject(migrateFailedObject: boolean): StartTaskReq {
        this['migrate_failed_object'] = migrateFailedObject;
        return this;
    }
    public set migrateFailedObject(migrateFailedObject: boolean | undefined) {
        this['migrate_failed_object'] = migrateFailedObject;
    }
    public get migrateFailedObject() {
        return this['migrate_failed_object'];
    }
}