

export class ConfigurationParameterList {
    public name?: string;
    public value?: string;
    private 'need_restart'?: string;
    private 'read_only'?: string;
    private 'value_range'?: string;
    private 'data_type'?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): ConfigurationParameterList {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ConfigurationParameterList {
        this['value'] = value;
        return this;
    }
    public withNeedRestart(needRestart: string): ConfigurationParameterList {
        this['need_restart'] = needRestart;
        return this;
    }
    public set needRestart(needRestart: string  | undefined) {
        this['need_restart'] = needRestart;
    }
    public get needRestart(): string | undefined {
        return this['need_restart'];
    }
    public withReadOnly(readOnly: string): ConfigurationParameterList {
        this['read_only'] = readOnly;
        return this;
    }
    public set readOnly(readOnly: string  | undefined) {
        this['read_only'] = readOnly;
    }
    public get readOnly(): string | undefined {
        return this['read_only'];
    }
    public withValueRange(valueRange: string): ConfigurationParameterList {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
    public withDataType(dataType: string): ConfigurationParameterList {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDescription(description: string): ConfigurationParameterList {
        this['description'] = description;
        return this;
    }
}