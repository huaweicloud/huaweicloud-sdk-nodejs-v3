

export class ConfigurationParameterResult {
    public name?: string;
    public value?: string;
    private 'restart_required'?: boolean;
    public readonly?: boolean;
    private 'value_range'?: string;
    public type?: ConfigurationParameterResultTypeEnum | string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): ConfigurationParameterResult {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ConfigurationParameterResult {
        this['value'] = value;
        return this;
    }
    public withRestartRequired(restartRequired: boolean): ConfigurationParameterResult {
        this['restart_required'] = restartRequired;
        return this;
    }
    public set restartRequired(restartRequired: boolean  | undefined) {
        this['restart_required'] = restartRequired;
    }
    public get restartRequired(): boolean | undefined {
        return this['restart_required'];
    }
    public withReadonly(readonly: boolean): ConfigurationParameterResult {
        this['readonly'] = readonly;
        return this;
    }
    public withValueRange(valueRange: string): ConfigurationParameterResult {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
    public withType(type: ConfigurationParameterResultTypeEnum | string): ConfigurationParameterResult {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ConfigurationParameterResult {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfigurationParameterResultTypeEnum {
    STRING = 'string',
    INTEGER = 'integer',
    BOOLEAN = 'boolean',
    LIST = 'list',
    FLOAT = 'float'
}
