

export class EnvRequestBodyParams {
    public name?: string;
    public type?: string;
    public value?: string;
    public desc?: string;
    public constructor() { 
    }
    public withName(name: string): EnvRequestBodyParams {
        this['name'] = name;
        return this;
    }
    public withType(type: string): EnvRequestBodyParams {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): EnvRequestBodyParams {
        this['value'] = value;
        return this;
    }
    public withDesc(desc: string): EnvRequestBodyParams {
        this['desc'] = desc;
        return this;
    }
}