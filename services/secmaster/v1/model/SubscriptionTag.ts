

export class SubscriptionTag {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): SubscriptionTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): SubscriptionTag {
        this['value'] = value;
        return this;
    }
}