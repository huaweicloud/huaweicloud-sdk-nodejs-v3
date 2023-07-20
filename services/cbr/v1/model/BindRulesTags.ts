

export class BindRulesTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): BindRulesTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BindRulesTags {
        this['value'] = value;
        return this;
    }
}