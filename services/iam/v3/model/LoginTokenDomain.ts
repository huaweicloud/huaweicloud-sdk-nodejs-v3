

export class LoginTokenDomain {
    public name?: string;
    public id?: string;
    public constructor() { 
    }
    public withName(name: string): LoginTokenDomain {
        this['name'] = name;
        return this;
    }
    public withId(id: string): LoginTokenDomain {
        this['id'] = id;
        return this;
    }
}