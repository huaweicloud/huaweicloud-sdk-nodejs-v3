

export class DbParameter {
    private 'param_name'?: string;
    private 'data_type'?: string;
    private 'default_value'?: string;
    private 'value_range'?: string;
    public description?: string;
    private 'is_modifiable'?: string;
    public constructor() { 
    }
    public withParamName(paramName: string): DbParameter {
        this['param_name'] = paramName;
        return this;
    }
    public set paramName(paramName: string  | undefined) {
        this['param_name'] = paramName;
    }
    public get paramName(): string | undefined {
        return this['param_name'];
    }
    public withDataType(dataType: string): DbParameter {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDefaultValue(defaultValue: string): DbParameter {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withValueRange(valueRange: string): DbParameter {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
    public withDescription(description: string): DbParameter {
        this['description'] = description;
        return this;
    }
    public withIsModifiable(isModifiable: string): DbParameter {
        this['is_modifiable'] = isModifiable;
        return this;
    }
    public set isModifiable(isModifiable: string  | undefined) {
        this['is_modifiable'] = isModifiable;
    }
    public get isModifiable(): string | undefined {
        return this['is_modifiable'];
    }
}