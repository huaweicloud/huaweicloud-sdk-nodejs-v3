

export class SearchQueryField {
    public name?: string;
    public type?: SearchQueryFieldTypeEnum | string;
    public alias?: string;
    public constructor(name?: string, type?: string) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): SearchQueryField {
        this['name'] = name;
        return this;
    }
    public withType(type: SearchQueryFieldTypeEnum | string): SearchQueryField {
        this['type'] = type;
        return this;
    }
    public withAlias(alias: string): SearchQueryField {
        this['alias'] = alias;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchQueryFieldTypeEnum {
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
