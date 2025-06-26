

export class ServerSecurityGroup {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ServerSecurityGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ServerSecurityGroup {
        this['name'] = name;
        return this;
    }
}