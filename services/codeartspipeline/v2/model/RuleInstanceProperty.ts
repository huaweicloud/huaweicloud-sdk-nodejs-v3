

export class RuleInstanceProperty {
    public key?: string;
    public type?: string;
    public name?: string;
    public operator?: string;
    public value?: string;
    private 'value_type'?: string;
    public constructor(key?: string, type?: string, name?: string, value?: string, valueType?: string) { 
        this['key'] = key;
        this['type'] = type;
        this['name'] = name;
        this['value'] = value;
        this['value_type'] = valueType;
    }
    public withKey(key: string): RuleInstanceProperty {
        this['key'] = key;
        return this;
    }
    public withType(type: string): RuleInstanceProperty {
        this['type'] = type;
        return this;
    }
    public withName(name: string): RuleInstanceProperty {
        this['name'] = name;
        return this;
    }
    public withOperator(operator: string): RuleInstanceProperty {
        this['operator'] = operator;
        return this;
    }
    public withValue(value: string): RuleInstanceProperty {
        this['value'] = value;
        return this;
    }
    public withValueType(valueType: string): RuleInstanceProperty {
        this['value_type'] = valueType;
        return this;
    }
    public set valueType(valueType: string  | undefined) {
        this['value_type'] = valueType;
    }
    public get valueType(): string | undefined {
        return this['value_type'];
    }
}