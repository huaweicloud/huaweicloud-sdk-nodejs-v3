

export class DstNodeReq {
    public ak: string;
    public sk: string;
    private 'security_token'?: string | undefined;
    public bucket: string;
    private 'save_prefix'?: string | undefined;
    public region: string;
    public constructor(ak?: any, sk?: any, bucket?: any, region?: any) { 
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
    public set securityToken(securityToken: string | undefined) {
        this['security_token'] = securityToken;
    }
    public get securityToken() {
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
    public set savePrefix(savePrefix: string | undefined) {
        this['save_prefix'] = savePrefix;
    }
    public get savePrefix() {
        return this['save_prefix'];
    }
    public withRegion(region: string): DstNodeReq {
        this['region'] = region;
        return this;
    }
}