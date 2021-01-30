import { TokenCatalog } from './TokenCatalog';
import { TokenDomainResult } from './TokenDomainResult';
import { TokenProjectResult } from './TokenProjectResult';
import { TokenRole } from './TokenRole';
import { TokenUserResult } from './TokenUserResult';


export class TokenResult {
    public catalog: Array<TokenCatalog>;
    public domain?: TokenDomainResult;
    private 'expires_at': string | undefined;
    private 'issued_at': string | undefined;
    public methods: Array<string>;
    public project?: TokenProjectResult;
    public roles: Array<TokenRole>;
    public user: TokenUserResult;
    public constructor(catalog: any, expiresAt: any, issuedAt: any, methods: any, roles: any, user: any) { 
        this['catalog'] = catalog;
        this['expires_at'] = expiresAt;
        this['issued_at'] = issuedAt;
        this['methods'] = methods;
        this['roles'] = roles;
        this['user'] = user;
    }
    public withCatalog(catalog: Array<TokenCatalog>): TokenResult {
        this['catalog'] = catalog;
        return this;
    }
    public withDomain(domain: TokenDomainResult): TokenResult {
        this['domain'] = domain;
        return this;
    }
    public withExpiresAt(expiresAt: string): TokenResult {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt() {
        return this['expires_at'];
    }
    public withIssuedAt(issuedAt: string): TokenResult {
        this['issued_at'] = issuedAt;
        return this;
    }
    public set issuedAt(issuedAt: string | undefined) {
        this['issued_at'] = issuedAt;
    }
    public get issuedAt() {
        return this['issued_at'];
    }
    public withMethods(methods: Array<string>): TokenResult {
        this['methods'] = methods;
        return this;
    }
    public withProject(project: TokenProjectResult): TokenResult {
        this['project'] = project;
        return this;
    }
    public withRoles(roles: Array<TokenRole>): TokenResult {
        this['roles'] = roles;
        return this;
    }
    public withUser(user: TokenUserResult): TokenResult {
        this['user'] = user;
        return this;
    }
}