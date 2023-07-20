

export class SecurityGroupsResult {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): SecurityGroupsResult {
        this['id'] = id;
        return this;
    }
}