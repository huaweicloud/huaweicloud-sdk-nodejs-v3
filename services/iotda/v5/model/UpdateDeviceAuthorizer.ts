

export class UpdateDeviceAuthorizer {
    private 'authorizer_name'?: string;
    private 'func_urn'?: string;
    private 'signing_enable'?: boolean;
    private 'signing_token'?: string;
    private 'signing_public_key'?: string;
    private 'default_authorizer'?: boolean;
    public status?: string;
    private 'cache_enable'?: boolean;
    public constructor() { 
    }
    public withAuthorizerName(authorizerName: string): UpdateDeviceAuthorizer {
        this['authorizer_name'] = authorizerName;
        return this;
    }
    public set authorizerName(authorizerName: string  | undefined) {
        this['authorizer_name'] = authorizerName;
    }
    public get authorizerName(): string | undefined {
        return this['authorizer_name'];
    }
    public withFuncUrn(funcUrn: string): UpdateDeviceAuthorizer {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string  | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn(): string | undefined {
        return this['func_urn'];
    }
    public withSigningEnable(signingEnable: boolean): UpdateDeviceAuthorizer {
        this['signing_enable'] = signingEnable;
        return this;
    }
    public set signingEnable(signingEnable: boolean  | undefined) {
        this['signing_enable'] = signingEnable;
    }
    public get signingEnable(): boolean | undefined {
        return this['signing_enable'];
    }
    public withSigningToken(signingToken: string): UpdateDeviceAuthorizer {
        this['signing_token'] = signingToken;
        return this;
    }
    public set signingToken(signingToken: string  | undefined) {
        this['signing_token'] = signingToken;
    }
    public get signingToken(): string | undefined {
        return this['signing_token'];
    }
    public withSigningPublicKey(signingPublicKey: string): UpdateDeviceAuthorizer {
        this['signing_public_key'] = signingPublicKey;
        return this;
    }
    public set signingPublicKey(signingPublicKey: string  | undefined) {
        this['signing_public_key'] = signingPublicKey;
    }
    public get signingPublicKey(): string | undefined {
        return this['signing_public_key'];
    }
    public withDefaultAuthorizer(defaultAuthorizer: boolean): UpdateDeviceAuthorizer {
        this['default_authorizer'] = defaultAuthorizer;
        return this;
    }
    public set defaultAuthorizer(defaultAuthorizer: boolean  | undefined) {
        this['default_authorizer'] = defaultAuthorizer;
    }
    public get defaultAuthorizer(): boolean | undefined {
        return this['default_authorizer'];
    }
    public withStatus(status: string): UpdateDeviceAuthorizer {
        this['status'] = status;
        return this;
    }
    public withCacheEnable(cacheEnable: boolean): UpdateDeviceAuthorizer {
        this['cache_enable'] = cacheEnable;
        return this;
    }
    public set cacheEnable(cacheEnable: boolean  | undefined) {
        this['cache_enable'] = cacheEnable;
    }
    public get cacheEnable(): boolean | undefined {
        return this['cache_enable'];
    }
}