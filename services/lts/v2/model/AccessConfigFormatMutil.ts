

export class AccessConfigFormatMutil {
    public mode: AccessConfigFormatMutilModeEnum;
    public value: string;
    public constructor(mode?: any, value?: any) { 
        this['mode'] = mode;
        this['value'] = value;
    }
    public withMode(mode: AccessConfigFormatMutilModeEnum): AccessConfigFormatMutil {
        this['mode'] = mode;
        return this;
    }
    public withValue(value: string): AccessConfigFormatMutil {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigFormatMutilModeEnum {
    TIME = 'time',
    REGULAR = 'regular'
}
