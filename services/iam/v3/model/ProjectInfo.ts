import { DomainInfo } from './DomainInfo';


export class ProjectInfo {
    public domain?: DomainInfo;
    public id?: string;
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withDomain(domain: DomainInfo): ProjectInfo {
        this['domain'] = domain;
        return this;
    }
    public withId(id: string): ProjectInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ProjectInfo {
        this['name'] = name;
        return this;
    }
}