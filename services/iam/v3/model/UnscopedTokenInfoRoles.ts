

export class UnscopedTokenInfoRoles {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): UnscopedTokenInfoRoles {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UnscopedTokenInfoRoles {
        this['name'] = name;
        return this;
    }
}