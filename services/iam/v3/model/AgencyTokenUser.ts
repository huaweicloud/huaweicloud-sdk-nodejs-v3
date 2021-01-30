import { AgencyTokenUserDomain } from './AgencyTokenUserDomain';


export class AgencyTokenUser {
    public name: string;
    public id: string;
    public domain: AgencyTokenUserDomain;
    public constructor(name: any, id: any, domain: any) { 
        this['name'] = name;
        this['id'] = id;
        this['domain'] = domain;
    }
    public withName(name: string): AgencyTokenUser {
        this['name'] = name;
        return this;
    }
    public withId(id: string): AgencyTokenUser {
        this['id'] = id;
        return this;
    }
    public withDomain(domain: AgencyTokenUserDomain): AgencyTokenUser {
        this['domain'] = domain;
        return this;
    }
}