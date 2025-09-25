

export class RedistributionParameterResult {
    public name?: string;
    public value?: string;
    private 'restart_required'?: boolean;
    private 'value_range'?: string;
    public type?: object;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): RedistributionParameterResult {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): RedistributionParameterResult {
        this['value'] = value;
        return this;
    }
    public withRestartRequired(restartRequired: boolean): RedistributionParameterResult {
        this['restart_required'] = restartRequired;
        return this;
    }
    public set restartRequired(restartRequired: boolean  | undefined) {
        this['restart_required'] = restartRequired;
    }
    public get restartRequired(): boolean | undefined {
        return this['restart_required'];
    }
    public withValueRange(valueRange: string): RedistributionParameterResult {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
    public withType(type: object): RedistributionParameterResult {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): RedistributionParameterResult {
        this['description'] = description;
        return this;
    }
}