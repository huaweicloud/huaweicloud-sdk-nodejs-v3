

export class SecurityGroup {
    public name?: string;
    public id?: string;
    public constructor() { 
    }
    public withName(name: string): SecurityGroup {
        this['name'] = name;
        return this;
    }
    public withId(id: string): SecurityGroup {
        this['id'] = id;
        return this;
    }
}