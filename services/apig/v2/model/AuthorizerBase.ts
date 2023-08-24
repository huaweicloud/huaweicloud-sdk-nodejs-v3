import { Identity } from './Identity';


export class AuthorizerBase {
    public name?: string;
    public type?: AuthorizerBaseTypeEnum | string;
    private 'authorizer_type'?: AuthorizerBaseAuthorizerTypeEnum | string;
    private 'authorizer_uri'?: string;
    private 'network_type'?: AuthorizerBaseNetworkTypeEnum | string;
    private 'authorizer_version'?: string;
    private 'authorizer_alias_uri'?: string;
    public identities?: Array<Identity>;
    public ttl?: number;
    private 'user_data'?: string;
    private 'ld_api_id'?: string;
    private 'need_body'?: boolean;
    public constructor(name?: string, type?: string, authorizerType?: string, authorizerUri?: string) { 
        this['name'] = name;
        this['type'] = type;
        this['authorizer_type'] = authorizerType;
        this['authorizer_uri'] = authorizerUri;
    }
    public withName(name: string): AuthorizerBase {
        this['name'] = name;
        return this;
    }
    public withType(type: AuthorizerBaseTypeEnum | string): AuthorizerBase {
        this['type'] = type;
        return this;
    }
    public withAuthorizerType(authorizerType: AuthorizerBaseAuthorizerTypeEnum | string): AuthorizerBase {
        this['authorizer_type'] = authorizerType;
        return this;
    }
    public set authorizerType(authorizerType: AuthorizerBaseAuthorizerTypeEnum | string  | undefined) {
        this['authorizer_type'] = authorizerType;
    }
    public get authorizerType(): AuthorizerBaseAuthorizerTypeEnum | string | undefined {
        return this['authorizer_type'];
    }
    public withAuthorizerUri(authorizerUri: string): AuthorizerBase {
        this['authorizer_uri'] = authorizerUri;
        return this;
    }
    public set authorizerUri(authorizerUri: string  | undefined) {
        this['authorizer_uri'] = authorizerUri;
    }
    public get authorizerUri(): string | undefined {
        return this['authorizer_uri'];
    }
    public withNetworkType(networkType: AuthorizerBaseNetworkTypeEnum | string): AuthorizerBase {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: AuthorizerBaseNetworkTypeEnum | string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): AuthorizerBaseNetworkTypeEnum | string | undefined {
        return this['network_type'];
    }
    public withAuthorizerVersion(authorizerVersion: string): AuthorizerBase {
        this['authorizer_version'] = authorizerVersion;
        return this;
    }
    public set authorizerVersion(authorizerVersion: string  | undefined) {
        this['authorizer_version'] = authorizerVersion;
    }
    public get authorizerVersion(): string | undefined {
        return this['authorizer_version'];
    }
    public withAuthorizerAliasUri(authorizerAliasUri: string): AuthorizerBase {
        this['authorizer_alias_uri'] = authorizerAliasUri;
        return this;
    }
    public set authorizerAliasUri(authorizerAliasUri: string  | undefined) {
        this['authorizer_alias_uri'] = authorizerAliasUri;
    }
    public get authorizerAliasUri(): string | undefined {
        return this['authorizer_alias_uri'];
    }
    public withIdentities(identities: Array<Identity>): AuthorizerBase {
        this['identities'] = identities;
        return this;
    }
    public withTtl(ttl: number): AuthorizerBase {
        this['ttl'] = ttl;
        return this;
    }
    public withUserData(userData: string): AuthorizerBase {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withLdApiId(ldApiId: string): AuthorizerBase {
        this['ld_api_id'] = ldApiId;
        return this;
    }
    public set ldApiId(ldApiId: string  | undefined) {
        this['ld_api_id'] = ldApiId;
    }
    public get ldApiId(): string | undefined {
        return this['ld_api_id'];
    }
    public withNeedBody(needBody: boolean): AuthorizerBase {
        this['need_body'] = needBody;
        return this;
    }
    public set needBody(needBody: boolean  | undefined) {
        this['need_body'] = needBody;
    }
    public get needBody(): boolean | undefined {
        return this['need_body'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AuthorizerBaseTypeEnum {
    FRONTEND = 'FRONTEND',
    BACKEND = 'BACKEND'
}
/**
    * @export
    * @enum {string}
    */
export enum AuthorizerBaseAuthorizerTypeEnum {
    FUNC = 'FUNC'
}
/**
    * @export
    * @enum {string}
    */
export enum AuthorizerBaseNetworkTypeEnum {
    V1 = 'V1',
    V2 = 'V2'
}
