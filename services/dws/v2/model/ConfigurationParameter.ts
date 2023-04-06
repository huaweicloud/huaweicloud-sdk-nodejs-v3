import { ConfigurationParameterUnit } from './ConfigurationParameterUnit';


export class ConfigurationParameter {
    public name: string;
    public values: Array<ConfigurationParameterUnit>;
    public unit: string;
    public type: string;
    public readonly: boolean;
    private 'value_range': string | undefined;
    private 'restart_required': boolean | undefined;
    public description: string;
    public constructor(name?: any, values?: any, unit?: any, type?: any, readonly?: any, valueRange?: any, restartRequired?: any, description?: any) { 
        this['name'] = name;
        this['values'] = values;
        this['unit'] = unit;
        this['type'] = type;
        this['readonly'] = readonly;
        this['value_range'] = valueRange;
        this['restart_required'] = restartRequired;
        this['description'] = description;
    }
    public withName(name: string): ConfigurationParameter {
        this['name'] = name;
        return this;
    }
    public withValues(values: Array<ConfigurationParameterUnit>): ConfigurationParameter {
        this['values'] = values;
        return this;
    }
    public withUnit(unit: string): ConfigurationParameter {
        this['unit'] = unit;
        return this;
    }
    public withType(type: string): ConfigurationParameter {
        this['type'] = type;
        return this;
    }
    public withReadonly(readonly: boolean): ConfigurationParameter {
        this['readonly'] = readonly;
        return this;
    }
    public withValueRange(valueRange: string): ConfigurationParameter {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange() {
        return this['value_range'];
    }
    public withRestartRequired(restartRequired: boolean): ConfigurationParameter {
        this['restart_required'] = restartRequired;
        return this;
    }
    public set restartRequired(restartRequired: boolean | undefined) {
        this['restart_required'] = restartRequired;
    }
    public get restartRequired() {
        return this['restart_required'];
    }
    public withDescription(description: string): ConfigurationParameter {
        this['description'] = description;
        return this;
    }
}