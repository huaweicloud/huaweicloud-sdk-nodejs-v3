

export class AccessConfigFormatSingle {
    public mode?: AccessConfigFormatSingleModeEnum | string;
    public value?: string;
    public constructor(mode?: string, value?: string) { 
        this['mode'] = mode;
        this['value'] = value;
    }
    public withMode(mode: AccessConfigFormatSingleModeEnum | string): AccessConfigFormatSingle {
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
