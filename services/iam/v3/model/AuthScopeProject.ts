

export class AuthScopeProject {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): AuthScopeProject {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AuthScopeProject {
        this['name'] = name;
        return this;
    }
}