

export class Taints {
    public key?: string;
    public value?: string;
    public effect?: string;
    public constructor(key?: string, effect?: string) { 
        this['key'] = key;
        this['effect'] = effect;
    }
    public withKey(key: string): Taints {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): Taints {
        this['value'] = value;
        return this;
    }
    public withEffect(effect: string): Taints {
        this['effect'] = effect;
        return this;
    }
}