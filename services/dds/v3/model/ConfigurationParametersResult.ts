

export class ConfigurationParametersResult {
    public name?: string;
    public value?: string;
    public description?: string;
    public type?: string;
    private 'value_range'?: string;
    private 'restart_required'?: boolean;
    public readonly?: boolean;
    public constructor(name?: string, value?: string, description?: string, type?: string, valueRange?: string, restartRequired?: boolean, readonly?: boolean) { 
        this['name'] = name;
        this['value'] = value;
        this['description'] = description;
        this['type'] = type;
        this['value_range'] = valueRange;
        this['restart_required'] = restartRequired;
        this['readonly'] = readonly;
    }
    public withName(name: string): ConfigurationParametersResult {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ConfigurationParametersResult {
        this['value'] = value;
        return this;
    }
    public withDescription(description: string): ConfigurationParametersResult {
        this['description'] = description;
        return this;
    }
    public withType(type: string): ConfigurationParametersResult {
        this['type'] = type;
        return this;
    }
    public withValueRange(valueRange: string): ConfigurationParametersResult {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
    public withRestartRequired(restartRequired: boolean): ConfigurationParametersResult {
        this['restart_required'] = restartRequired;
        return this;
    }
    public set restartRequired(restartRequired: boolean  | undefined) {
        this['restart_required'] = restartRequired;
    }
    public get restartRequired(): boolean | undefined {
        return this['restart_required'];
    }
    public withReadonly(readonly: boolean): ConfigurationParametersResult {
        this['readonly'] = readonly;
        return this;
    }
}