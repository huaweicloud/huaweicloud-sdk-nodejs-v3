

export class InstanceConfig {
    public name?: string;
    private 'valid_values'?: string;
    private 'default_value'?: string;
    private 'config_type'?: InstanceConfigConfigTypeEnum | string;
    public value?: string;
    private 'value_type'?: string;
    public constructor() { 
    }
    public withName(name: string): InstanceConfig {
        this['name'] = name;
        return this;
    }
    public withValidValues(validValues: string): InstanceConfig {
        this['valid_values'] = validValues;
        return this;
    }
    public set validValues(validValues: string  | undefined) {
        this['valid_values'] = validValues;
    }
    public get validValues(): string | undefined {
        return this['valid_values'];
    }
    public withDefaultValue(defaultValue: string): InstanceConfig {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withConfigType(configType: InstanceConfigConfigTypeEnum | string): InstanceConfig {
        this['config_type'] = configType;
        return this;
    }
    public set configType(configType: InstanceConfigConfigTypeEnum | string  | undefined) {
        this['config_type'] = configType;
    }
    public get configType(): InstanceConfigConfigTypeEnum | string | undefined {
        return this['config_type'];
    }
    public withValue(value: string): InstanceConfig {
        this['value'] = value;
        return this;
    }
    public withValueType(valueType: string): InstanceConfig {
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

/**
    * @export
    * @enum {string}
    */
export enum InstanceConfigConfigTypeEnum {
    STATIC = 'static',
    DYNAMIC = 'dynamic'
}
