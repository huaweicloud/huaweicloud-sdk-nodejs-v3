

export class ConfigurationParameterDto {
    private 'restart_required'?: boolean;
    public readonly?: boolean;
    public name?: string;
    public value?: string;
    private 'value_range'?: string;
    public type?: string;
    public description?: string;
    public constructor() { 
    }
    public withRestartRequired(restartRequired: boolean): ConfigurationParameterDto {
        this['restart_required'] = restartRequired;
        return this;
    }
    public set restartRequired(restartRequired: boolean  | undefined) {
        this['restart_required'] = restartRequired;
    }
    public get restartRequired(): boolean | undefined {
        return this['restart_required'];
    }
    public withReadonly(readonly: boolean): ConfigurationParameterDto {
        this['readonly'] = readonly;
        return this;
    }
    public withName(name: string): ConfigurationParameterDto {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ConfigurationParameterDto {
        this['value'] = value;
        return this;
    }
    public withValueRange(valueRange: string): ConfigurationParameterDto {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
    public withType(type: string): ConfigurationParameterDto {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ConfigurationParameterDto {
        this['description'] = description;
        return this;
    }
}