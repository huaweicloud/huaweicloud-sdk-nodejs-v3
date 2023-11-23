

export class StartSyncTaskReq {
    private 'src_ak'?: string;
    private 'src_sk'?: string;
    private 'dst_ak'?: string;
    private 'dst_sk'?: string;
    private 'source_cdn_authentication_key'?: string;
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
}