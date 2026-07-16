

export class AutoSearchAlgoConfigParameter {
    public key?: string;
    public value?: string;
    public type?: string;
    public constructor() { 
    }
    public withKey(key: string): AutoSearchAlgoConfigParameter {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): AutoSearchAlgoConfigParameter {
        this['value'] = value;
        return this;
    }
    public withType(type: string): AutoSearchAlgoConfigParameter {
        this['type'] = type;
        return this;
    }
}