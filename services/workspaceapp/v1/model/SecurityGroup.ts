

export class SecurityGroup {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): SecurityGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SecurityGroup {
        this['name'] = name;
        return this;
    }
}