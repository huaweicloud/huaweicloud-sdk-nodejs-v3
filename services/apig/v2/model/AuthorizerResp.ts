import { AuthorizerBase } from './AuthorizerBase';
import { Identity } from './Identity';


export class AuthorizerResp {
    public name?: string;
    public type?: AuthorizerRespTypeEnum | string;
    private 'authorizer_type'?: AuthorizerRespAuthorizerTypeEnum | string;
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
        this['name'] = name;
        this['type'] = type;
        this['authorizer_type'] = authorizerType;
        this['authorizer_uri'] = authorizerUri;
    }
    public withName(name: string): AuthorizerResp {
        this['name'] = name;
        return this;
    }
    public withType(type: AuthorizerRespTypeEnum | string): AuthorizerResp {
        this['type'] = type;
        return this;
    }
    public withAuthorizerType(authorizerType: AuthorizerRespAuthorizerTypeEnum | string): AuthorizerResp {
        this['authorizer_type'] = authorizerType;
        return this;
    }
    public set authorizerType(authorizerType: AuthorizerRespAuthorizerTypeEnum | string  | undefined) {
        this['authorizer_type'] = authorizerType;
    }
    public get authorizerType(): AuthorizerRespAuthorizerTypeEnum | string | undefined {
        return this['authorizer_type'];
    }
    public withAuthorizerUri(authorizerUri: string): AuthorizerResp {
        this['authorizer_uri'] = authorizerUri;
        return this;
    }
    public set authorizerUri(authorizerUri: string  | undefined) {
        this['authorizer_uri'] = authorizerUri;
    }
    public get authorizerUri(): string | undefined {
        return this['authorizer_uri'];
    }
    public withAuthorizerVersion(authorizerVersion: string): AuthorizerResp {
        this['authorizer_version'] = authorizerVersion;
        return this;
    }
    public set authorizerVersion(authorizerVersion: string  | undefined) {
        this['authorizer_version'] = authorizerVersion;
    }
    public get authorizerVersion(): string | undefined {
        return this['authorizer_version'];
    }
    public withAuthorizerAliasUri(authorizerAliasUri: string): AuthorizerResp {
        this['authorizer_alias_uri'] = authorizerAliasUri;
        return this;
    }
    public set authorizerAliasUri(authorizerAliasUri: string  | undefined) {
        this['authorizer_alias_uri'] = authorizerAliasUri;
    }
    public get authorizerAliasUri(): string | undefined {
        return this['authorizer_alias_uri'];
    }
    public withIdentities(identities: Array<Identity>): AuthorizerResp {
        this['identities'] = identities;
        return this;
    }
    public withTtl(ttl: number): AuthorizerResp {
        this['ttl'] = ttl;
        return this;
    }
    public withUserData(userData: string): AuthorizerResp {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withLdApiId(ldApiId: string): AuthorizerResp {
        this['ld_api_id'] = ldApiId;
        return this;
    }
    public set ldApiId(ldApiId: string  | undefined) {
        this['ld_api_id'] = ldApiId;
    }
    public get ldApiId(): string | undefined {
        return this['ld_api_id'];
    }
    public withNeedBody(needBody: boolean): AuthorizerResp {
        this['need_body'] = needBody;
        return this;
    }
    public set needBody(needBody: boolean  | undefined) {
        this['need_body'] = needBody;
    }
    public get needBody(): boolean | undefined {
        return this['need_body'];
    }
    public withId(id: string): AuthorizerResp {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: Date): AuthorizerResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withRomaAppId(romaAppId: string): AuthorizerResp {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withRomaAppName(romaAppName: string): AuthorizerResp {
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
export enum AuthorizerRespTypeEnum {
    FRONTEND = 'FRONTEND',
    BACKEND = 'BACKEND'
}
/**
    * @export
    * @enum {string}
    */
export enum AuthorizerRespAuthorizerTypeEnum {
    FUNC = 'FUNC'
}
