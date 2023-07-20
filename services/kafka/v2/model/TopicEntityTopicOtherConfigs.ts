

export class TopicEntityTopicOtherConfigs {
    public name?: string;
    private 'valid_values'?: string;
    private 'default_value'?: string;
    private 'config_type'?: string;
    public value?: string;
    private 'value_type'?: string;
    public constructor() { 
    }
    public withName(name: string): TopicEntityTopicOtherConfigs {
        this['name'] = name;
        return this;
    }
    public withValidValues(validValues: string): TopicEntityTopicOtherConfigs {
        this['valid_values'] = validValues;
        return this;
    }
    public set validValues(validValues: string  | undefined) {
        this['valid_values'] = validValues;
    }
    public get validValues(): string | undefined {
        return this['valid_values'];
    }
    public withDefaultValue(defaultValue: string): TopicEntityTopicOtherConfigs {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withConfigType(configType: string): TopicEntityTopicOtherConfigs {
        this['config_type'] = configType;
        return this;
    }
    public set configType(configType: string  | undefined) {
        this['config_type'] = configType;
    }
    public get configType(): string | undefined {
        return this['config_type'];
    }
    public withValue(value: string): TopicEntityTopicOtherConfigs {
        this['value'] = value;
        return this;
    }
    public withValueType(valueType: string): TopicEntityTopicOtherConfigs {
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