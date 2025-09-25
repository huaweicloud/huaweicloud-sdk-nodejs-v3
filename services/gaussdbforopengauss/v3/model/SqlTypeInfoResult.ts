

export class SqlTypeInfoResult {
    public category?: SqlTypeInfoResultCategoryEnum | string;
    public prefixes?: Array<string>;
    private 'is_preset'?: boolean;
    public constructor() { 
    }
    public withCategory(category: SqlTypeInfoResultCategoryEnum | string): SqlTypeInfoResult {
        this['category'] = category;
        return this;
    }
    public withPrefixes(prefixes: Array<string>): SqlTypeInfoResult {
        this['prefixes'] = prefixes;
        return this;
    }
    public withIsPreset(isPreset: boolean): SqlTypeInfoResult {
        this['is_preset'] = isPreset;
        return this;
    }
    public set isPreset(isPreset: boolean  | undefined) {
        this['is_preset'] = isPreset;
    }
    public get isPreset(): boolean | undefined {
        return this['is_preset'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SqlTypeInfoResultCategoryEnum {
    ALL = 'all',
    DDL = 'ddl',
    DML = 'dml',
    DCL = 'dcl',
    TCL = 'tcl',
    DQL = 'dql',
    CUSTOM = 'custom'
}
