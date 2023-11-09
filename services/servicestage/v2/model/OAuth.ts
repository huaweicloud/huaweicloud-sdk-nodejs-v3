

export class OAuth {
    public name?: string;
    public code?: string;
    public state?: string;
    public constructor(name?: string, code?: string, state?: string) { 
        this['name'] = name;
        this['code'] = code;
        this['state'] = state;
    }
    public withName(name: string): OAuth {
        this['name'] = name;
        return this;
    }
    public withCode(code: string): OAuth {
        this['code'] = code;
        return this;
    }
    public withState(state: string): OAuth {
        this['state'] = state;
        return this;
    }
}