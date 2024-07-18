

export class UpdateInsertHeaderConfig {
    public key?: string;
    private 'value_type'?: string;
    public value?: string;
    public constructor(key?: string, valueType?: string, value?: string) { 
        this['key'] = key;
        this['value_type'] = valueType;
        this['value'] = value;
    }
    public withKey(key: string): UpdateInsertHeaderConfig {
        this['key'] = key;
        return this;
    }
    public withValueType(valueType: string): UpdateInsertHeaderConfig {
        this['value_type'] = valueType;
        return this;
    }
    public set valueType(valueType: string  | undefined) {
        this['value_type'] = valueType;
    }
    public get valueType(): string | undefined {
        return this['value_type'];
    }
    public withValue(value: string): UpdateInsertHeaderConfig {
        this['value'] = value;
        return this;
    }
}