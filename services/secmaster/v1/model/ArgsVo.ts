

export class ArgsVo {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ArgsVo {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ArgsVo {
        this['value'] = value;
        return this;
    }
}