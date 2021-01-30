import { LinksSelf } from './LinksSelf';


export class AgencyAllProjectRole {
    public id: string;
    public links: LinksSelf;
    public name: string;
    public constructor(id: any, links: any, name: any) { 
        this['id'] = id;
        this['links'] = links;
        this['name'] = name;
    }
    public withId(id: string): AgencyAllProjectRole {
        this['id'] = id;
        return this;
    }
    public withLinks(links: LinksSelf): AgencyAllProjectRole {
        this['links'] = links;
        return this;
    }
    public withName(name: string): AgencyAllProjectRole {
        this['name'] = name;
        return this;
    }
}