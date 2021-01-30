import { ScopeDomainOption } from './ScopeDomainOption';


export class ScopeProjectOption {
    public id?: string;
    public name?: string;
    public domain?: ScopeDomainOption;
    public constructor() { 
    }
    public withId(id: string): ScopeProjectOption {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ScopeProjectOption {
        this['name'] = name;
        return this;
    }
    public withDomain(domain: ScopeDomainOption): ScopeProjectOption {
        this['domain'] = domain;
        return this;
    }
}