import { AgencyTokenProjectDomain } from './AgencyTokenProjectDomain';


export class AgencyTokenProject {
    public name?: string;
    public id?: string;
    public domain?: AgencyTokenProjectDomain;
    public constructor(name?: string, id?: string, domain?: AgencyTokenProjectDomain) { 
        this['name'] = name;
        this['id'] = id;
        this['domain'] = domain;
    }
    public withName(name: string): AgencyTokenProject {
        this['name'] = name;
        return this;
    }
    public withId(id: string): AgencyTokenProject {
        this['id'] = id;
        return this;
    }
    public withDomain(domain: AgencyTokenProjectDomain): AgencyTokenProject {
        this['domain'] = domain;
        return this;
    }
}