

export class AuthScopeDomain {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): AuthScopeDomain {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AuthScopeDomain {
        this['name'] = name;
        return this;
    }
}