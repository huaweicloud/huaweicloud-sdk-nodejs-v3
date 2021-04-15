

export class ListServerGroupsResult {
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
    public withId(id: string): ListServerGroupsResult {
        this['id'] = id;
        return this;
    }
    public withMembers(members: Array<string>): ListServerGroupsResult {
        this['members'] = members;
        return this;
    }
    public withMetadata(metadata: { [key: string]: string; }): ListServerGroupsResult {
        this['metadata'] = metadata;
        return this;
    }
    public withName(name: string): ListServerGroupsResult {
        this['name'] = name;
        return this;
    }
    public withPolicies(policies: Array<string>): ListServerGroupsResult {
        this['policies'] = policies;
        return this;
    }
}