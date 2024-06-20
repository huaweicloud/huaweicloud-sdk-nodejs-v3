
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDeviceAuthorizerResponse extends SdkResponse {
    private 'authorizer_id'?: string;
    private 'authorizer_name'?: string;
    private 'func_name'?: string;
    private 'func_urn'?: string;
    private 'signing_enable'?: boolean;
    private 'signing_token'?: string;
    private 'signing_public_key'?: string;
    private 'default_authorizer'?: boolean;
    public status?: string;
    private 'cache_enable'?: boolean;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withAuthorizerId(authorizerId: string): UpdateDeviceAuthorizerResponse {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withAuthorizerName(authorizerName: string): UpdateDeviceAuthorizerResponse {
        this['authorizer_name'] = authorizerName;
        return this;
    }
    public set authorizerName(authorizerName: string  | undefined) {
        this['authorizer_name'] = authorizerName;
    }
    public get authorizerName(): string | undefined {
        return this['authorizer_name'];
    }
    public withFuncName(funcName: string): UpdateDeviceAuthorizerResponse {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string  | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName(): string | undefined {
        return this['func_name'];
    }
    public withFuncUrn(funcUrn: string): UpdateDeviceAuthorizerResponse {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string  | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn(): string | undefined {
        return this['func_urn'];
    }
    public withSigningEnable(signingEnable: boolean): UpdateDeviceAuthorizerResponse {
        this['signing_enable'] = signingEnable;
        return this;
    }
    public set signingEnable(signingEnable: boolean  | undefined) {
        this['signing_enable'] = signingEnable;
    }
    public get signingEnable(): boolean | undefined {
        return this['signing_enable'];
    }
    public withSigningToken(signingToken: string): UpdateDeviceAuthorizerResponse {
        this['signing_token'] = signingToken;
        return this;
    }
    public set signingToken(signingToken: string  | undefined) {
        this['signing_token'] = signingToken;
    }
    public get signingToken(): string | undefined {
        return this['signing_token'];
    }
    public withSigningPublicKey(signingPublicKey: string): UpdateDeviceAuthorizerResponse {
        this['signing_public_key'] = signingPublicKey;
        return this;
    }
    public set signingPublicKey(signingPublicKey: string  | undefined) {
        this['signing_public_key'] = signingPublicKey;
    }
    public get signingPublicKey(): string | undefined {
        return this['signing_public_key'];
    }
    public withDefaultAuthorizer(defaultAuthorizer: boolean): UpdateDeviceAuthorizerResponse {
        this['default_authorizer'] = defaultAuthorizer;
        return this;
    }
    public set defaultAuthorizer(defaultAuthorizer: boolean  | undefined) {
        this['default_authorizer'] = defaultAuthorizer;
    }
    public get defaultAuthorizer(): boolean | undefined {
        return this['default_authorizer'];
    }
    public withStatus(status: string): UpdateDeviceAuthorizerResponse {
        this['status'] = status;
        return this;
    }
    public withCacheEnable(cacheEnable: boolean): UpdateDeviceAuthorizerResponse {
        this['cache_enable'] = cacheEnable;
        return this;
    }
    public set cacheEnable(cacheEnable: boolean  | undefined) {
        this['cache_enable'] = cacheEnable;
    }
    public get cacheEnable(): boolean | undefined {
        return this['cache_enable'];
    }
    public withCreateTime(createTime: string): UpdateDeviceAuthorizerResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateDeviceAuthorizerResponse {
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