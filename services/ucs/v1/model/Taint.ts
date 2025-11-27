

export class Taint {
    public key?: string;
    public value?: string;
    public effect?: string;
    public timeadded?: Date;
    public constructor() { 
    }
    public withKey(key: string): Taint {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): Taint {
        this['value'] = value;
        return this;
    }
    public withEffect(effect: string): Taint {
        this['effect'] = effect;
        return this;
    }
    public withTimeadded(timeadded: Date): Taint {
        this['timeadded'] = timeadded;
        return this;
    }
}