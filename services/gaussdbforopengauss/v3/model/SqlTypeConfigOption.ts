

export class SqlTypeConfigOption {
    public category?: SqlTypeConfigOptionCategoryEnum | string;
    public prefixes?: Array<string>;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withCategory(category: SqlTypeConfigOptionCategoryEnum | string): SqlTypeConfigOption {
        this['category'] = category;
        return this;
    }
    public withPrefixes(prefixes: Array<string>): SqlTypeConfigOption {
        this['prefixes'] = prefixes;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SqlTypeConfigOptionCategoryEnum {
    ALL = 'all',
    DDL = 'ddl',
    DML = 'dml',
    DCL = 'dcl',
    TCL = 'tcl',
    DQL = 'dql',
    CUSTOM = 'custom'
}
