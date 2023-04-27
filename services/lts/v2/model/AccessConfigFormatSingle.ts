

export class AccessConfigFormatSingle {
    public mode: AccessConfigFormatSingleModeEnum;
    public value: string;
    public constructor(mode?: any, value?: any) { 
        this['mode'] = mode;
        this['value'] = value;
    }
    public withMode(mode: AccessConfigFormatSingleModeEnum): AccessConfigFormatSingle {
        this['mode'] = mode;
        return this;
    }
    public withValue(value: string): AccessConfigFormatSingle {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigFormatSingleModeEnum {
    SYSTEM = 'system',
    WILDCARD = 'wildcard'
}
