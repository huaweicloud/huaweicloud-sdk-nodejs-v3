

export class ParameterValuesInfo {
    public name?: string;
    public value?: string;
    private 'restart_required'?: boolean;
    public readonly?: boolean;
    private 'value_range'?: string;
    public type?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): ParameterValuesInfo {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ParameterValuesInfo {
        this['value'] = value;
        return this;
    }
    public withRestartRequired(restartRequired: boolean): ParameterValuesInfo {
        this['restart_required'] = restartRequired;
        return this;
    }
    public set restartRequired(restartRequired: boolean  | undefined) {
        this['restart_required'] = restartRequired;
    }
    public get restartRequired(): boolean | undefined {
        return this['restart_required'];
    }
    public withReadonly(readonly: boolean): ParameterValuesInfo {
        this['readonly'] = readonly;
        return this;
    }
    public withValueRange(valueRange: string): ParameterValuesInfo {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
    public withType(type: string): ParameterValuesInfo {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ParameterValuesInfo {
        this['description'] = description;
        return this;
    }
}