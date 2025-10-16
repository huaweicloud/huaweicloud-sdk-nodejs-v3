

export class SwitchTokenResponseUserDomain {
    public name?: string;
    public id?: string;
    public constructor() { 
    }
    public withName(name: string): SwitchTokenResponseUserDomain {
        this['name'] = name;
        return this;
    }
    public withId(id: string): SwitchTokenResponseUserDomain {
        this['id'] = id;
        return this;
    }
}