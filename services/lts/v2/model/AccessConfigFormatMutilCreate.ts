

export class AccessConfigFormatMutilCreate {
    public mode?: AccessConfigFormatMutilCreateModeEnum | string;
    public value?: string;
    public constructor(mode?: string, value?: string) { 
        this['mode'] = mode;
        this['value'] = value;
    }
    public withMode(mode: AccessConfigFormatMutilCreateModeEnum | string): AccessConfigFormatMutilCreate {
        this['mode'] = mode;
        return this;
    }
    public withValue(value: string): AccessConfigFormatMutilCreate {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigFormatMutilCreateModeEnum {
    TIME = 'time',
    REGULAR = 'regular'
}
