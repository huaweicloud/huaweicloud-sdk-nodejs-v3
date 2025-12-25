

export class AnalysisField {
    public alias?: string;
    public name?: string;
    public type?: AnalysisFieldTypeEnum | string;
    public constructor(name?: string, type?: string) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withAlias(alias: string): AnalysisField {
        this['alias'] = alias;
        return this;
    }
    public withName(name: string): AnalysisField {
        this['name'] = name;
        return this;
    }
    public withType(type: AnalysisFieldTypeEnum | string): AnalysisField {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AnalysisFieldTypeEnum {
    BOOLEAN = 'boolean',
    BYTE = 'byte',
    SHORT = 'short',
    INTEGER = 'integer',
    LONG = 'long',
    FLOAT = 'float',
    HALF_FLOAT = 'half_float',
    SCALED_FLOAT = 'scaled_float',
    DOUBLE = 'double',
    KEYWORD = 'keyword',
    TEXT = 'text',
    DATE = 'date',
    IP = 'ip',
    BINARY = 'binary',
    OBJECT = 'object',
    NESTED = 'nested'
}
