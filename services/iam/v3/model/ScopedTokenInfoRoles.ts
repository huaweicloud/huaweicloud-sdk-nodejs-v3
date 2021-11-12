

export class ScopedTokenInfoRoles {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ScopedTokenInfoRoles {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ScopedTokenInfoRoles {
        this['name'] = name;
        return this;
    }
}