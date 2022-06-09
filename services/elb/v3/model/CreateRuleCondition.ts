

export class CreateRuleCondition {
    public key?: string;
    public value: string;
    public constructor(value?: any) { 
        this['value'] = value;
    }
    public withKey(key: string): CreateRuleCondition {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateRuleCondition {
        this['value'] = value;
        return this;
    }
}