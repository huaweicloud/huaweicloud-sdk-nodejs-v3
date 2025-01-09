

export class SecurityGroup {
    public id?: string;
    public name?: string;
    public constructor(id?: string) { 
        this['id'] = id;
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