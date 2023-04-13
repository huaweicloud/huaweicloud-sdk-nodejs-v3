

export class RetryTaskGroupReq {
    private 'src_ak'?: string | undefined;
    private 'src_sk'?: string | undefined;
    private 'dst_ak'?: string | undefined;
    private 'dst_sk'?: string | undefined;
    private 'source_cdn_authentication_key'?: string | undefined;
    private 'migrate_failed_object'?: boolean | undefined;
    public constructor() { 
    }
    public withSrcAk(srcAk: string): RetryTaskGroupReq {
        this['src_ak'] = srcAk;
        return this;
    }
    public set srcAk(srcAk: string | undefined) {
        this['src_ak'] = srcAk;
    }
    public get srcAk() {
        return this['src_ak'];
    }
    public withSrcSk(srcSk: string): RetryTaskGroupReq {
        this['src_sk'] = srcSk;
        return this;
    }
    public set srcSk(srcSk: string | undefined) {
        this['src_sk'] = srcSk;
    }
    public get srcSk() {
        return this['src_sk'];
    }
    public withDstAk(dstAk: string): RetryTaskGroupReq {
        this['dst_ak'] = dstAk;
        return this;
    }
    public set dstAk(dstAk: string | undefined) {
        this['dst_ak'] = dstAk;
    }
    public get dstAk() {
        return this['dst_ak'];
    }
    public withDstSk(dstSk: string): RetryTaskGroupReq {
        this['dst_sk'] = dstSk;
        return this;
    }
    public set dstSk(dstSk: string | undefined) {
        this['dst_sk'] = dstSk;
    }
    public get dstSk() {
        return this['dst_sk'];
    }
    public withSourceCdnAuthenticationKey(sourceCdnAuthenticationKey: string): RetryTaskGroupReq {
        this['source_cdn_authentication_key'] = sourceCdnAuthenticationKey;
        return this;
    }
    public set sourceCdnAuthenticationKey(sourceCdnAuthenticationKey: string | undefined) {
        this['source_cdn_authentication_key'] = sourceCdnAuthenticationKey;
    }
    public get sourceCdnAuthenticationKey() {
        return this['source_cdn_authentication_key'];
    }
    public withMigrateFailedObject(migrateFailedObject: boolean): RetryTaskGroupReq {
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