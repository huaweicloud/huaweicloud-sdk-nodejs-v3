

export class UpdateRuleCondition {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): UpdateRuleCondition {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): UpdateRuleCondition {
        this['value'] = value;
        return this;
    }
}