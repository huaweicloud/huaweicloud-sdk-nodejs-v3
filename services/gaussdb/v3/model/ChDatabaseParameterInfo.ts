

export class ChDatabaseParameterInfo {
    private 'param_name'?: string;
    private 'data_type'?: string;
    private 'default_value'?: string;
    private 'value_range'?: string;
    public description?: string;
    public constructor(paramName?: string, dataType?: string, defaultValue?: string, valueRange?: string, description?: string) { 
        this['param_name'] = paramName;
        this['data_type'] = dataType;
        this['default_value'] = defaultValue;
        this['value_range'] = valueRange;
        this['description'] = description;
    }
    public withParamName(paramName: string): ChDatabaseParameterInfo {
        this['param_name'] = paramName;
        return this;
    }
    public set paramName(paramName: string  | undefined) {
        this['param_name'] = paramName;
    }
    public get paramName(): string | undefined {
        return this['param_name'];
    }
    public withDataType(dataType: string): ChDatabaseParameterInfo {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDefaultValue(defaultValue: string): ChDatabaseParameterInfo {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withValueRange(valueRange: string): ChDatabaseParameterInfo {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
    public withDescription(description: string): ChDatabaseParameterInfo {
        this['description'] = description;
        return this;
    }
}