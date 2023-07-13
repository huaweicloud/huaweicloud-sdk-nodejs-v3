

export class AccessConfigFormatSingleCreate {
    public mode?: AccessConfigFormatSingleCreateModeEnum;
    public value?: string;
    public constructor() { 
    }
    public withMode(mode: AccessConfigFormatSingleCreateModeEnum): AccessConfigFormatSingleCreate {
        this['mode'] = mode;
        return this;
    }
    public withValue(value: string): AccessConfigFormatSingleCreate {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigFormatSingleCreateModeEnum {
    SYSTEM = 'system',
    WILDCARD = 'wildcard'
}
