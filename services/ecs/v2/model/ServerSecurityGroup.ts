

export class ServerSecurityGroup {
    public name: string;
    public id: string;
    public constructor(name?: any, id?: any) { 
        this['name'] = name;
        this['id'] = id;
    }
    public withName(name: string): ServerSecurityGroup {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ServerSecurityGroup {
        this['id'] = id;
        return this;
    }
}