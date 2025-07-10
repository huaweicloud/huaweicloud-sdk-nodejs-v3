

export class IPDStatusVO {
    public code?: string;
    public name?: string;
    public belonging?: string;
    public constructor() { 
    }
    public withCode(code: string): IPDStatusVO {
        this['code'] = code;
        return this;
    }
    public withName(name: string): IPDStatusVO {
        this['name'] = name;
        return this;
    }
    public withBelonging(belonging: string): IPDStatusVO {
        this['belonging'] = belonging;
        return this;
    }
}