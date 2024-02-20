

export class FindingCondition {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): FindingCondition {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): FindingCondition {
        this['value'] = value;
        return this;
    }
}