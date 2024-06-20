

export class DeviceAuthorizerSimple {
    private 'authorizer_id'?: string;
    private 'authorizer_name'?: string;
    private 'func_name'?: string;
    private 'func_urn'?: string;
    private 'signing_enable'?: boolean;
    private 'default_authorizer'?: boolean;
    public status?: string;
    private 'cache_enable'?: boolean;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withAuthorizerId(authorizerId: string): DeviceAuthorizerSimple {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withAuthorizerName(authorizerName: string): DeviceAuthorizerSimple {
        this['authorizer_name'] = authorizerName;
        return this;
    }
    public set authorizerName(authorizerName: string  | undefined) {
        this['authorizer_name'] = authorizerName;
    }
    public get authorizerName(): string | undefined {
        return this['authorizer_name'];
    }
    public withFuncName(funcName: string): DeviceAuthorizerSimple {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string  | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName(): string | undefined {
        return this['func_name'];
    }
    public withFuncUrn(funcUrn: string): DeviceAuthorizerSimple {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string  | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn(): string | undefined {
        return this['func_urn'];
    }
    public withSigningEnable(signingEnable: boolean): DeviceAuthorizerSimple {
        this['signing_enable'] = signingEnable;
        return this;
    }
    public set signingEnable(signingEnable: boolean  | undefined) {
        this['signing_enable'] = signingEnable;
    }
    public get signingEnable(): boolean | undefined {
        return this['signing_enable'];
    }
    public withDefaultAuthorizer(defaultAuthorizer: boolean): DeviceAuthorizerSimple {
        this['default_authorizer'] = defaultAuthorizer;
        return this;
    }
    public set defaultAuthorizer(defaultAuthorizer: boolean  | undefined) {
        this['default_authorizer'] = defaultAuthorizer;
    }
    public get defaultAuthorizer(): boolean | undefined {
        return this['default_authorizer'];
    }
    public withStatus(status: string): DeviceAuthorizerSimple {
        this['status'] = status;
        return this;
    }
    public withCacheEnable(cacheEnable: boolean): DeviceAuthorizerSimple {
        this['cache_enable'] = cacheEnable;
        return this;
    }
    public set cacheEnable(cacheEnable: boolean  | undefined) {
        this['cache_enable'] = cacheEnable;
    }
    public get cacheEnable(): boolean | undefined {
        return this['cache_enable'];
    }
    public withCreateTime(createTime: string): DeviceAuthorizerSimple {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): DeviceAuthorizerSimple {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}