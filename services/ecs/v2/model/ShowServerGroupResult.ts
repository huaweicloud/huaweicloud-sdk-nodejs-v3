

export class ShowServerGroupResult {
    public id: string;
    public members: Array<string>;
    public metadata: { [key: string]: string; };
    public name: string;
    public policies: Array<string>;
    public constructor(id?: any, members?: any, metadata?: any, name?: any, policies?: any) { 
        this['id'] = id;
        this['members'] = members;
        this['metadata'] = metadata;
        this['name'] = name;
        this['policies'] = policies;
    }
    public withId(id: string): ShowServerGroupResult {
        this['id'] = id;
        return this;
    }
    public withMembers(members: Array<string>): ShowServerGroupResult {
        this['members'] = members;
        return this;
    }
    public withMetadata(metadata: { [key: string]: string; }): ShowServerGroupResult {
        this['metadata'] = metadata;
        return this;
    }
    public withName(name: string): ShowServerGroupResult {
        this['name'] = name;
        return this;
    }
    public withPolicies(policies: Array<string>): ShowServerGroupResult {
        this['policies'] = policies;
        return this;
    }
}