

export class ConfigurationParameterUnit {
    public type?: string;
    public value?: string;
    private 'default_value'?: string;
    public constructor(type?: string, value?: string, defaultValue?: string) { 
        this['type'] = type;
        this['value'] = value;
        this['default_value'] = defaultValue;
    }
    public withType(type: string): ConfigurationParameterUnit {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): ConfigurationParameterUnit {
        this['value'] = value;
        return this;
    }
    public withDefaultValue(defaultValue: string): ConfigurationParameterUnit {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
}