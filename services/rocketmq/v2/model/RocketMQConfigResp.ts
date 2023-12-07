

export class RocketMQConfigResp {
    public name?: string;
    public value?: string;
    private 'config_type'?: string;
    private 'default_value'?: string;
    private 'valid_values'?: string;
    private 'value_type'?: string;
    public constructor() { 
    }
    public withName(name: string): RocketMQConfigResp {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): RocketMQConfigResp {
        this['value'] = value;
        return this;
    }
    public withConfigType(configType: string): RocketMQConfigResp {
        this['config_type'] = configType;
        return this;
    }
    public set configType(configType: string  | undefined) {
        this['config_type'] = configType;
    }
    public get configType(): string | undefined {
        return this['config_type'];
    }
    public withDefaultValue(defaultValue: string): RocketMQConfigResp {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withValidValues(validValues: string): RocketMQConfigResp {
        this['valid_values'] = validValues;
        return this;
    }
    public set validValues(validValues: string  | undefined) {
        this['valid_values'] = validValues;
    }
    public get validValues(): string | undefined {
        return this['valid_values'];
    }
    public withValueType(valueType: string): RocketMQConfigResp {
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