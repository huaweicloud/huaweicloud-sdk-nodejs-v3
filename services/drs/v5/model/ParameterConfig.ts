

export class ParameterConfig {
    public name?: string;
    public value?: string;
    private 'default_value'?: string;
    private 'value_range'?: string;
    private 'is_need_restart'?: boolean;
    public description?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor(name?: string, value?: string, defaultValue?: string, valueRange?: string, isNeedRestart?: boolean, description?: string) { 
        this['name'] = name;
        this['value'] = value;
        this['default_value'] = defaultValue;
        this['value_range'] = valueRange;
        this['is_need_restart'] = isNeedRestart;
        this['description'] = description;
    }
    public withName(name: string): ParameterConfig {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ParameterConfig {
        this['value'] = value;
        return this;
    }
    public withDefaultValue(defaultValue: string): ParameterConfig {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withValueRange(valueRange: string): ParameterConfig {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
    public withIsNeedRestart(isNeedRestart: boolean): ParameterConfig {
        this['is_need_restart'] = isNeedRestart;
        return this;
    }
    public set isNeedRestart(isNeedRestart: boolean  | undefined) {
        this['is_need_restart'] = isNeedRestart;
    }
    public get isNeedRestart(): boolean | undefined {
        return this['is_need_restart'];
    }
    public withDescription(description: string): ParameterConfig {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): ParameterConfig {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ParameterConfig {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}