

export class QueryRedisConfig {
    private 'param_value'?: string;
    private 'value_type'?: string;
    private 'value_range'?: string;
    public description?: string;
    private 'default_value'?: string;
    private 'param_name'?: string;
    private 'param_id'?: string;
    public constructor() { 
    }
    public withParamValue(paramValue: string): QueryRedisConfig {
        this['param_value'] = paramValue;
        return this;
    }
    public set paramValue(paramValue: string  | undefined) {
        this['param_value'] = paramValue;
    }
    public get paramValue(): string | undefined {
        return this['param_value'];
    }
    public withValueType(valueType: string): QueryRedisConfig {
        this['value_type'] = valueType;
        return this;
    }
    public set valueType(valueType: string  | undefined) {
        this['value_type'] = valueType;
    }
    public get valueType(): string | undefined {
        return this['value_type'];
    }
    public withValueRange(valueRange: string): QueryRedisConfig {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
    public withDescription(description: string): QueryRedisConfig {
        this['description'] = description;
        return this;
    }
    public withDefaultValue(defaultValue: string): QueryRedisConfig {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withParamName(paramName: string): QueryRedisConfig {
        this['param_name'] = paramName;
        return this;
    }
    public set paramName(paramName: string  | undefined) {
        this['param_name'] = paramName;
    }
    public get paramName(): string | undefined {
        return this['param_name'];
    }
    public withParamId(paramId: string): QueryRedisConfig {
        this['param_id'] = paramId;
        return this;
    }
    public set paramId(paramId: string  | undefined) {
        this['param_id'] = paramId;
    }
    public get paramId(): string | undefined {
        return this['param_id'];
    }
}