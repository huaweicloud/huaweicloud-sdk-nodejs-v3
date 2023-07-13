

export class ListAccessPolicyRespPolicies {
    private 'access_key'?: string | undefined;
    private 'secret_key'?: string | undefined;
    private 'white_remote_address'?: string | undefined;
    public admin?: boolean;
    public perm?: string;
    public constructor() { 
    }
    public withAccessKey(accessKey: string): ListAccessPolicyRespPolicies {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey() {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): ListAccessPolicyRespPolicies {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey() {
        return this['secret_key'];
    }
    public withWhiteRemoteAddress(whiteRemoteAddress: string): ListAccessPolicyRespPolicies {
        this['white_remote_address'] = whiteRemoteAddress;
        return this;
    }
    public set whiteRemoteAddress(whiteRemoteAddress: string | undefined) {
        this['white_remote_address'] = whiteRemoteAddress;
    }
    public get whiteRemoteAddress() {
        return this['white_remote_address'];
    }
    public withAdmin(admin: boolean): ListAccessPolicyRespPolicies {
        this['admin'] = admin;
        return this;
    }
    public withPerm(perm: string): ListAccessPolicyRespPolicies {
        this['perm'] = perm;
        return this;
    }
}