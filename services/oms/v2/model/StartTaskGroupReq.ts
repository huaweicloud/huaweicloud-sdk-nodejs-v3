

export class StartTaskGroupReq {
    private 'src_ak'?: string | undefined;
    private 'src_sk'?: string | undefined;
    private 'dst_ak': string | undefined;
    private 'dst_sk': string | undefined;
    private 'source_cdn_authentication_key'?: string | undefined;
    public constructor(dstAk?: any, dstSk?: any) { 
        this['dst_ak'] = dstAk;
        this['dst_sk'] = dstSk;
    }
    public withSrcAk(srcAk: string): StartTaskGroupReq {
        this['src_ak'] = srcAk;
        return this;
    }
    public set srcAk(srcAk: string | undefined) {
        this['src_ak'] = srcAk;
    }
    public get srcAk() {
        return this['src_ak'];
    }
    public withSrcSk(srcSk: string): StartTaskGroupReq {
        this['src_sk'] = srcSk;
        return this;
    }
    public set srcSk(srcSk: string | undefined) {
        this['src_sk'] = srcSk;
    }
    public get srcSk() {
        return this['src_sk'];
    }
    public withDstAk(dstAk: string): StartTaskGroupReq {
        this['dst_ak'] = dstAk;
        return this;
    }
    public set dstAk(dstAk: string | undefined) {
        this['dst_ak'] = dstAk;
    }
    public get dstAk() {
        return this['dst_ak'];
    }
    public withDstSk(dstSk: string): StartTaskGroupReq {
        this['dst_sk'] = dstSk;
        return this;
    }
    public set dstSk(dstSk: string | undefined) {
        this['dst_sk'] = dstSk;
    }
    public get dstSk() {
        return this['dst_sk'];
    }
    public withSourceCdnAuthenticationKey(sourceCdnAuthenticationKey: string): StartTaskGroupReq {
        this['source_cdn_authentication_key'] = sourceCdnAuthenticationKey;
        return this;
    }
    public set sourceCdnAuthenticationKey(sourceCdnAuthenticationKey: string | undefined) {
        this['source_cdn_authentication_key'] = sourceCdnAuthenticationKey;
    }
    public get sourceCdnAuthenticationKey() {
        return this['source_cdn_authentication_key'];
    }
}