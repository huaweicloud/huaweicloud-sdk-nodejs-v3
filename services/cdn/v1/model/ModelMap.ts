

export class ModelMap {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): ModelMap {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ModelMap {
        this['value'] = value;
        return this;
    }
}