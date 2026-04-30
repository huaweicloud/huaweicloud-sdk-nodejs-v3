

export class SwitchTokenResponseTokenUserDomain {
    public name?: string;
    public id?: string;
    public constructor() { 
    }
    public withName(name: string): SwitchTokenResponseTokenUserDomain {
        this['name'] = name;
        return this;
    }
    public withId(id: string): SwitchTokenResponseTokenUserDomain {
        this['id'] = id;
        return this;
    }
}