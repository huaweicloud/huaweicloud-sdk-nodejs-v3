import { TokenProjectDomainResult } from './TokenProjectDomainResult';


export class TokenProjectResult {
    public name?: string;
    public id?: string;
    public domain?: TokenProjectDomainResult;
    public constructor(name?: string, id?: string, domain?: TokenProjectDomainResult) { 
        this['name'] = name;
        this['id'] = id;
        this['domain'] = domain;
    }
    public withName(name: string): TokenProjectResult {
        this['name'] = name;
        return this;
    }
    public withId(id: string): TokenProjectResult {
        this['id'] = id;
        return this;
    }
    public withDomain(domain: TokenProjectDomainResult): TokenProjectResult {
        this['domain'] = domain;
        return this;
    }
}