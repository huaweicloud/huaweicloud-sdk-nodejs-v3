

export class EntityConfigurationParametersResult {
    public name?: string;
    public value?: string;
    private 'value_range'?: string;
    private 'restart_required'?: boolean;
    public readonly?: boolean;
    public type?: string;
    public description?: string;
    public constructor(name?: string, value?: string, valueRange?: string, restartRequired?: boolean, readonly?: boolean, type?: string, description?: string) { 
        this['name'] = name;
        this['value'] = value;
        this['value_range'] = valueRange;
        this['restart_required'] = restartRequired;
        this['readonly'] = readonly;
        this['type'] = type;
        this['description'] = description;
    }
    public withName(name: string): EntityConfigurationParametersResult {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): EntityConfigurationParametersResult {
        this['value'] = value;
        return this;
    }
    public withValueRange(valueRange: string): EntityConfigurationParametersResult {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
    public withRestartRequired(restartRequired: boolean): EntityConfigurationParametersResult {
        this['restart_required'] = restartRequired;
        return this;
    }
    public set restartRequired(restartRequired: boolean  | undefined) {
        this['restart_required'] = restartRequired;
    }
    public get restartRequired(): boolean | undefined {
        return this['restart_required'];
    }
    public withReadonly(readonly: boolean): EntityConfigurationParametersResult {
        this['readonly'] = readonly;
        return this;
    }
    public withType(type: string): EntityConfigurationParametersResult {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): EntityConfigurationParametersResult {
        this['description'] = description;
        return this;
    }
}