import { AgencyAssumedby } from './AgencyAssumedby';
import { AgencyTokenDomain } from './AgencyTokenDomain';
import { AgencyTokenProject } from './AgencyTokenProject';
import { AgencyTokenUser } from './AgencyTokenUser';
import { TokenCatalog } from './TokenCatalog';
import { TokenRole } from './TokenRole';


export class AgencyTokenResult {
    public methods: Array<string>;
    private 'expires_at': string | undefined;
    private 'issued_at': string | undefined;
    private 'assumed_by': AgencyAssumedby | undefined;
    public catalog?: Array<TokenCatalog>;
    public domain?: AgencyTokenDomain;
    public project?: AgencyTokenProject;
    public roles: Array<TokenRole>;
    public user: AgencyTokenUser;
    public constructor(methods: any, expiresAt: any, issuedAt: any, assumedBy: any, roles: any, user: any) { 
        this['methods'] = methods;
        this['expires_at'] = expiresAt;
        this['issued_at'] = issuedAt;
        this['assumed_by'] = assumedBy;
        this['roles'] = roles;
        this['user'] = user;
    }
    public withMethods(methods: Array<string>): AgencyTokenResult {
        this['methods'] = methods;
        return this;
    }
    public withExpiresAt(expiresAt: string): AgencyTokenResult {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt() {
        return this['expires_at'];
    }
    public withIssuedAt(issuedAt: string): AgencyTokenResult {
        this['issued_at'] = issuedAt;
        return this;
    }
    public set issuedAt(issuedAt: string | undefined) {
        this['issued_at'] = issuedAt;
    }
    public get issuedAt() {
        return this['issued_at'];
    }
    public withAssumedBy(assumedBy: AgencyAssumedby): AgencyTokenResult {
        this['assumed_by'] = assumedBy;
        return this;
    }
    public set assumedBy(assumedBy: AgencyAssumedby | undefined) {
        this['assumed_by'] = assumedBy;
    }
    public get assumedBy() {
        return this['assumed_by'];
    }
    public withCatalog(catalog: Array<TokenCatalog>): AgencyTokenResult {
        this['catalog'] = catalog;
        return this;
    }
    public withDomain(domain: AgencyTokenDomain): AgencyTokenResult {
        this['domain'] = domain;
        return this;
    }
    public withProject(project: AgencyTokenProject): AgencyTokenResult {
        this['project'] = project;
        return this;
    }
    public withRoles(roles: Array<TokenRole>): AgencyTokenResult {
        this['roles'] = roles;
        return this;
    }
    public withUser(user: AgencyTokenUser): AgencyTokenResult {
        this['user'] = user;
        return this;
    }
}