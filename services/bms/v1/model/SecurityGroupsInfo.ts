

export class SecurityGroupsInfo {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): SecurityGroupsInfo {
        this['id'] = id;
        return this;
    }
}