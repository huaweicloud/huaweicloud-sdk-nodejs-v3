

export class SecurityGroupsList {
    public name?: string;
    public id?: string;
    public constructor() { 
    }
    public withName(name: string): SecurityGroupsList {
        this['name'] = name;
        return this;
    }
    public withId(id: string): SecurityGroupsList {
        this['id'] = id;
        return this;
    }
}