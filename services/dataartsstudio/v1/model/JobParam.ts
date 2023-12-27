

export class JobParam {
    public name?: string;
    public value?: string;
    public type?: JobParamTypeEnum | string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): JobParam {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): JobParam {
        this['value'] = value;
        return this;
    }
    public withType(type: JobParamTypeEnum | string): JobParam {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobParamTypeEnum {
    VARIABLE = 'variable',
    CONSTANTS = 'constants'
}
