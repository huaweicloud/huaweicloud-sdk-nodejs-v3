

export class EnvRespParams {
    public name?: string;
    public type?: EnvRespParamsTypeEnum | string;
    public value?: string;
    public desc?: string;
    public constructor() { 
    }
    public withName(name: string): EnvRespParams {
        this['name'] = name;
        return this;
    }
    public withType(type: EnvRespParamsTypeEnum | string): EnvRespParams {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): EnvRespParams {
        this['value'] = value;
        return this;
    }
    public withDesc(desc: string): EnvRespParams {
        this['desc'] = desc;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EnvRespParamsTypeEnum {
    VARIABLE = 'variable',
    CONSTANT = 'constant'
}
