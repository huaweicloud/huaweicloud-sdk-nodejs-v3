import { AuthorizerBase } from './AuthorizerBase';
import { Identity } from './Identity';


export class AuthorizerCreate {
    public name?: string;
    public type?: AuthorizerCreateTypeEnum | string;
    private 'authorizer_type'?: AuthorizerCreateAuthorizerTypeEnum | string;
    private 'authorizer_uri'?: string;
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
    public withName(name: string): AuthorizerCreate {
        this['name'] = name;
        return this;
    }
    public withType(type: AuthorizerCreateTypeEnum | string): AuthorizerCreate {
        this['type'] = type;
        return this;
    }
    public withAuthorizerType(authorizerType: AuthorizerCreateAuthorizerTypeEnum | string): AuthorizerCreate {
        this['authorizer_type'] = authorizerType;
        return this;
    }
    public set authorizerType(authorizerType: AuthorizerCreateAuthorizerTypeEnum | string  | undefined) {
        this['authorizer_type'] = authorizerType;
    }
    public get authorizerType(): AuthorizerCreateAuthorizerTypeEnum | string | undefined {
        return this['authorizer_type'];
    }
    public withAuthorizerUri(authorizerUri: string): AuthorizerCreate {
        this['authorizer_uri'] = authorizerUri;
        return this;
    }
    public set authorizerUri(authorizerUri: string  | undefined) {
        this['authorizer_uri'] = authorizerUri;
    }
    public get authorizerUri(): string | undefined {
        return this['authorizer_uri'];
    }
    public withAuthorizerVersion(authorizerVersion: string): AuthorizerCreate {
        this['authorizer_version'] = authorizerVersion;
        return this;
    }
    public set authorizerVersion(authorizerVersion: string  | undefined) {
        this['authorizer_version'] = authorizerVersion;
    }
    public get authorizerVersion(): string | undefined {
        return this['authorizer_version'];
    }
    public withAuthorizerAliasUri(authorizerAliasUri: string): AuthorizerCreate {
        this['authorizer_alias_uri'] = authorizerAliasUri;
        return this;
    }
    public set authorizerAliasUri(authorizerAliasUri: string  | undefined) {
        this['authorizer_alias_uri'] = authorizerAliasUri;
    }
    public get authorizerAliasUri(): string | undefined {
        return this['authorizer_alias_uri'];
    }
    public withIdentities(identities: Array<Identity>): AuthorizerCreate {
        this['identities'] = identities;
        return this;
    }
    public withTtl(ttl: number): AuthorizerCreate {
        this['ttl'] = ttl;
        return this;
    }
    public withUserData(userData: string): AuthorizerCreate {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withLdApiId(ldApiId: string): AuthorizerCreate {
        this['ld_api_id'] = ldApiId;
        return this;
    }
    public set ldApiId(ldApiId: string  | undefined) {
        this['ld_api_id'] = ldApiId;
    }
    public get ldApiId(): string | undefined {
        return this['ld_api_id'];
    }
    public withNeedBody(needBody: boolean): AuthorizerCreate {
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
export enum AuthorizerCreateTypeEnum {
    FRONTEND = 'FRONTEND',
    BACKEND = 'BACKEND'
}
/**
    * @export
    * @enum {string}
    */
export enum AuthorizerCreateAuthorizerTypeEnum {
    FUNC = 'FUNC'
}
