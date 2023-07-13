import { FederationUserBody } from './FederationUserBody';
import { UnscopedTokenInfoCatalog } from './UnscopedTokenInfoCatalog';
import { UnscopedTokenInfoRoles } from './UnscopedTokenInfoRoles';


export class UnscopedTokenInfo {
    private 'expires_at': string | undefined;
    public methods: Array<string>;
    private 'issued_at': string | undefined;
    public user: FederationUserBody;
    public roles?: Array<UnscopedTokenInfoRoles>;
    public catalog?: Array<UnscopedTokenInfoCatalog>;
    public constructor(expiresAt?: any, methods?: any, issuedAt?: any, user?: any) { 
        this['expires_at'] = expiresAt;
        this['methods'] = methods;
        this['issued_at'] = issuedAt;
        this['user'] = user;
    }
    public withExpiresAt(expiresAt: string): UnscopedTokenInfo {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt() {
        return this['expires_at'];
    }
    public withMethods(methods: Array<string>): UnscopedTokenInfo {
        this['methods'] = methods;
        return this;
    }
    public withIssuedAt(issuedAt: string): UnscopedTokenInfo {
        this['issued_at'] = issuedAt;
        return this;
    }
    public set issuedAt(issuedAt: string | undefined) {
        this['issued_at'] = issuedAt;
    }
    public get issuedAt() {
        return this['issued_at'];
    }
    public withUser(user: FederationUserBody): UnscopedTokenInfo {
        this['user'] = user;
        return this;
    }
    public withRoles(roles: Array<UnscopedTokenInfoRoles>): UnscopedTokenInfo {
        this['roles'] = roles;
        return this;
    }
    public withCatalog(catalog: Array<UnscopedTokenInfoCatalog>): UnscopedTokenInfo {
        this['catalog'] = catalog;
        return this;
    }
}