

export class SwitchTokenResponseTokenRoles {
    public name?: string;
    public id?: number;
    public constructor() { 
    }
    public withName(name: string): SwitchTokenResponseTokenRoles {
        this['name'] = name;
        return this;
    }
    public withId(id: number): SwitchTokenResponseTokenRoles {
        this['id'] = id;
        return this;
    }
}