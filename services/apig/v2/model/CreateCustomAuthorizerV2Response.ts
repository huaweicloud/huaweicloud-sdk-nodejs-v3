import { AuthorizerBase } from './AuthorizerBase';
import { Identity } from './Identity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCustomAuthorizerV2Response extends SdkResponse {
    public name?: string;
    public type?: CreateCustomAuthorizerV2ResponseTypeEnum | string;
    private 'authorizer_type'?: CreateCustomAuthorizerV2ResponseAuthorizerTypeEnum | string;
    private 'authorizer_uri'?: string;
    private 'authorizer_version'?: string;
    private 'authorizer_alias_uri'?: string;
    public identities?: Array<Identity>;
    public ttl?: number;
    private 'user_data'?: string;
    private 'ld_api_id'?: string;
    private 'need_body'?: boolean;
    public id?: string;
    private 'create_time'?: Date;
    private 'roma_app_id'?: string;
    private 'roma_app_name'?: string;
    public constructor(name?: string, type?: string, authorizerType?: string, authorizerUri?: string) { 
        super();
        this['name'] = name;
        this['type'] = type;
        this['authorizer_type'] = authorizerType;
        this['authorizer_uri'] = authorizerUri;
    }
    public withName(name: string): CreateCustomAuthorizerV2Response {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateCustomAuthorizerV2ResponseTypeEnum | string): CreateCustomAuthorizerV2Response {
        this['type'] = type;
        return this;
    }
    public withAuthorizerType(authorizerType: CreateCustomAuthorizerV2ResponseAuthorizerTypeEnum | string): CreateCustomAuthorizerV2Response {
        this['authorizer_type'] = authorizerType;
        return this;
    }
    public set authorizerType(authorizerType: CreateCustomAuthorizerV2ResponseAuthorizerTypeEnum | string  | undefined) {
        this['authorizer_type'] = authorizerType;
    }
    public get authorizerType(): CreateCustomAuthorizerV2ResponseAuthorizerTypeEnum | string | undefined {
        return this['authorizer_type'];
    }
    public withAuthorizerUri(authorizerUri: string): CreateCustomAuthorizerV2Response {
        this['authorizer_uri'] = authorizerUri;
        return this;
    }
    public set authorizerUri(authorizerUri: string  | undefined) {
        this['authorizer_uri'] = authorizerUri;
    }
    public get authorizerUri(): string | undefined {
        return this['authorizer_uri'];
    }
    public withAuthorizerVersion(authorizerVersion: string): CreateCustomAuthorizerV2Response {
        this['authorizer_version'] = authorizerVersion;
        return this;
    }
    public set authorizerVersion(authorizerVersion: string  | undefined) {
        this['authorizer_version'] = authorizerVersion;
    }
    public get authorizerVersion(): string | undefined {
        return this['authorizer_version'];
    }
    public withAuthorizerAliasUri(authorizerAliasUri: string): CreateCustomAuthorizerV2Response {
        this['authorizer_alias_uri'] = authorizerAliasUri;
        return this;
    }
    public set authorizerAliasUri(authorizerAliasUri: string  | undefined) {
        this['authorizer_alias_uri'] = authorizerAliasUri;
    }
    public get authorizerAliasUri(): string | undefined {
        return this['authorizer_alias_uri'];
    }
    public withIdentities(identities: Array<Identity>): CreateCustomAuthorizerV2Response {
        this['identities'] = identities;
        return this;
    }
    public withTtl(ttl: number): CreateCustomAuthorizerV2Response {
        this['ttl'] = ttl;
        return this;
    }
    public withUserData(userData: string): CreateCustomAuthorizerV2Response {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withLdApiId(ldApiId: string): CreateCustomAuthorizerV2Response {
        this['ld_api_id'] = ldApiId;
        return this;
    }
    public set ldApiId(ldApiId: string  | undefined) {
        this['ld_api_id'] = ldApiId;
    }
    public get ldApiId(): string | undefined {
        return this['ld_api_id'];
    }
    public withNeedBody(needBody: boolean): CreateCustomAuthorizerV2Response {
        this['need_body'] = needBody;
        return this;
    }
    public set needBody(needBody: boolean  | undefined) {
        this['need_body'] = needBody;
    }
    public get needBody(): boolean | undefined {
        return this['need_body'];
    }
    public withId(id: string): CreateCustomAuthorizerV2Response {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: Date): CreateCustomAuthorizerV2Response {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withRomaAppId(romaAppId: string): CreateCustomAuthorizerV2Response {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withRomaAppName(romaAppName: string): CreateCustomAuthorizerV2Response {
        this['roma_app_name'] = romaAppName;
        return this;
    }
    public set romaAppName(romaAppName: string  | undefined) {
        this['roma_app_name'] = romaAppName;
    }
    public get romaAppName(): string | undefined {
        return this['roma_app_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateCustomAuthorizerV2ResponseTypeEnum {
    FRONTEND = 'FRONTEND',
    BACKEND = 'BACKEND'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateCustomAuthorizerV2ResponseAuthorizerTypeEnum {
    FUNC = 'FUNC'
}
