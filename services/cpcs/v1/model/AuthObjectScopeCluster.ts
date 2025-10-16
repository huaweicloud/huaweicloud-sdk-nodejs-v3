

export class AuthObjectScopeCluster {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): AuthObjectScopeCluster {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AuthObjectScopeCluster {
        this['name'] = name;
        return this;
    }
}