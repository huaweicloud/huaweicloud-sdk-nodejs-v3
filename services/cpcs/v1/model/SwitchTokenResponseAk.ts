

export class SwitchTokenResponseAk {
    public name?: string;
    public id?: string;
    public status?: string;
    public constructor() { 
    }
    public withName(name: string): SwitchTokenResponseAk {
        this['name'] = name;
        return this;
    }
    public withId(id: string): SwitchTokenResponseAk {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): SwitchTokenResponseAk {
        this['status'] = status;
        return this;
    }
}