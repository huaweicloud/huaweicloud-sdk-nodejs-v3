

export class SecurityGroupInfo {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): SecurityGroupInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SecurityGroupInfo {
        this['name'] = name;
        return this;
    }
}