import { ScopedTokenUser } from './ScopedTokenUser';
import { TokenCatalog } from './TokenCatalog';
import { TokenDomainResult } from './TokenDomainResult';
import { TokenProjectResult } from './TokenProjectResult';
import { TokenRole } from './TokenRole';


export class ScopeTokenResult {
    public methods: Array<string>;
    private 'expires_at': string | undefined;
    public catalog?: Array<TokenCatalog>;
    public domain: TokenDomainResult;
    public project: TokenProjectResult;
    public roles: Array<TokenRole>;
    public user: ScopedTokenUser;
    private 'issued_at': string | undefined;
    public constructor(methods: any, expiresAt: any, domain: any, project: any, roles: any, user: any, issuedAt: any) { 
        this['methods'] = methods;
        this['expires_at'] = expiresAt;
        this['domain'] = domain;
        this['project'] = project;
        this['roles'] = roles;
        this['user'] = user;
        this['issued_at'] = issuedAt;
    }
    public withMethods(methods: Array<string>): ScopeTokenResult {
        this['methods'] = methods;
        return this;
    }
    public withExpiresAt(expiresAt: string): ScopeTokenResult {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt() {
        return this['expires_at'];
    }
    public withCatalog(catalog: Array<TokenCatalog>): ScopeTokenResult {
        this['catalog'] = catalog;
        return this;
    }
    public withDomain(domain: TokenDomainResult): ScopeTokenResult {
        this['domain'] = domain;
        return this;
    }
    public withProject(project: TokenProjectResult): ScopeTokenResult {
        this['project'] = project;
        return this;
    }
    public withRoles(roles: Array<TokenRole>): ScopeTokenResult {
        this['roles'] = roles;
        return this;
    }
    public withUser(user: ScopedTokenUser): ScopeTokenResult {
        this['user'] = user;
        return this;
    }
    public withIssuedAt(issuedAt: string): ScopeTokenResult {
        this['issued_at'] = issuedAt;
        return this;
    }
    public set issuedAt(issuedAt: string | undefined) {
        this['issued_at'] = issuedAt;
    }
    public get issuedAt() {
        return this['issued_at'];
    }
}