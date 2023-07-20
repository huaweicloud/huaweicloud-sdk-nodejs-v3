

export class ParaGroupParameterResult {
    public name?: string;
    public value?: string;
    private 'need_restart'?: boolean;
    public readonly?: boolean;
    private 'value_range'?: string;
    private 'data_type'?: ParaGroupParameterResultDataTypeEnum | string;
    public description?: string;
    public constructor(name?: string, value?: string, needRestart?: boolean, readonly?: boolean, valueRange?: string, dataType?: string, description?: string) { 
        this['name'] = name;
        this['value'] = value;
        this['need_restart'] = needRestart;
        this['readonly'] = readonly;
        this['value_range'] = valueRange;
        this['data_type'] = dataType;
        this['description'] = description;
    }
    public withName(name: string): ParaGroupParameterResult {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ParaGroupParameterResult {
        this['value'] = value;
        return this;
    }
    public withNeedRestart(needRestart: boolean): ParaGroupParameterResult {
        this['need_restart'] = needRestart;
        return this;
    }
    public set needRestart(needRestart: boolean  | undefined) {
        this['need_restart'] = needRestart;
    }
    public get needRestart(): boolean | undefined {
        return this['need_restart'];
    }
    public withReadonly(readonly: boolean): ParaGroupParameterResult {
        this['readonly'] = readonly;
        return this;
    }
    public withValueRange(valueRange: string): ParaGroupParameterResult {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
    public withDataType(dataType: ParaGroupParameterResultDataTypeEnum | string): ParaGroupParameterResult {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: ParaGroupParameterResultDataTypeEnum | string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): ParaGroupParameterResultDataTypeEnum | string | undefined {
        return this['data_type'];
    }
    public withDescription(description: string): ParaGroupParameterResult {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ParaGroupParameterResultDataTypeEnum {
    STRING = 'string',
    INTEGER = 'integer',
    BOOLEAN = 'boolean',
    LIST = 'list',
    FLOAT = 'float'
}
