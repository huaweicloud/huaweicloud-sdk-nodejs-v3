

export class AccessConfigFormatMutil {
    public mode?: AccessConfigFormatMutilModeEnum | string;
    public value?: string;
    public constructor(mode?: string, value?: string) { 
        this['mode'] = mode;
        this['value'] = value;
    }
    public withMode(mode: AccessConfigFormatMutilModeEnum | string): AccessConfigFormatMutil {
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
