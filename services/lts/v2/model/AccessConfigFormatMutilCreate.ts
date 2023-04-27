

export class AccessConfigFormatMutilCreate {
    public mode?: AccessConfigFormatMutilCreateModeEnum;
    public value?: string;
    public constructor() { 
    }
    public withMode(mode: AccessConfigFormatMutilCreateModeEnum): AccessConfigFormatMutilCreate {
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
