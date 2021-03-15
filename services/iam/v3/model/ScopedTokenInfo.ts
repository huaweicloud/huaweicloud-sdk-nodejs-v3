import { DomainInfo } from './DomainInfo';
import { FederationUserBody } from './FederationUserBody';
import { ProjectInfo } from './ProjectInfo';
import { UnscopedTokenInfoCatalog } from './UnscopedTokenInfoCatalog';
import { UnscopedTokenInfoRoles } from './UnscopedTokenInfoRoles';


export class ScopedTokenInfo {
    private 'expires_at': string | undefined;
    public methods: Array<string>;
    private 'issued_at': string | undefined;
    public user: FederationUserBody;
    public domain?: DomainInfo;
    public project?: ProjectInfo;
    public roles: Array<UnscopedTokenInfoRoles>;
    public catalog: Array<UnscopedTokenInfoCatalog>;
    public constructor(expiresAt: any, methods: any, issuedAt: any, user: any, roles: any, catalog: any) { 
        this['expires_at'] = expiresAt;
        this['methods'] = methods;
        this['issued_at'] = issuedAt;
        this['user'] = user;
        this['roles'] = roles;
        this['catalog'] = catalog;
    }
    public withExpiresAt(expiresAt: string): ScopedTokenInfo {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt() {
        return this['expires_at'];
    }
    public withMethods(methods: Array<string>): ScopedTokenInfo {
        this['methods'] = methods;
        return this;
    }
    public withIssuedAt(issuedAt: string): ScopedTokenInfo {
        this['issued_at'] = issuedAt;
        return this;
    }
    public set issuedAt(issuedAt: string | undefined) {
        this['issued_at'] = issuedAt;
    }
    public get issuedAt() {
        return this['issued_at'];
    }
    public withUser(user: FederationUserBody): ScopedTokenInfo {
        this['user'] = user;
        return this;
    }
    public withDomain(domain: DomainInfo): ScopedTokenInfo {
        this['domain'] = domain;
        return this;
    }
    public withProject(project: ProjectInfo): ScopedTokenInfo {
        this['project'] = project;
        return this;
    }
    public withRoles(roles: Array<UnscopedTokenInfoRoles>): ScopedTokenInfo {
        this['roles'] = roles;
        return this;
    }
    public withCatalog(catalog: Array<UnscopedTokenInfoCatalog>): ScopedTokenInfo {
        this['catalog'] = catalog;
        return this;
    }
}