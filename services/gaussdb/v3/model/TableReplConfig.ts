

export class TableReplConfig {
    private 'repl_type'?: TableReplConfigReplTypeEnum | string;
    private 'repl_scope'?: TableReplConfigReplScopeEnum | string;
    public tables?: Array<string>;
    public constructor() { 
    }
    public withReplType(replType: TableReplConfigReplTypeEnum | string): TableReplConfig {
        this['repl_type'] = replType;
        return this;
    }
    public set replType(replType: TableReplConfigReplTypeEnum | string  | undefined) {
        this['repl_type'] = replType;
    }
    public get replType(): TableReplConfigReplTypeEnum | string | undefined {
        return this['repl_type'];
    }
    public withReplScope(replScope: TableReplConfigReplScopeEnum | string): TableReplConfig {
        this['repl_scope'] = replScope;
        return this;
    }
    public set replScope(replScope: TableReplConfigReplScopeEnum | string  | undefined) {
        this['repl_scope'] = replScope;
    }
    public get replScope(): TableReplConfigReplScopeEnum | string | undefined {
        return this['repl_scope'];
    }
    public withTables(tables: Array<string>): TableReplConfig {
        this['tables'] = tables;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TableReplConfigReplTypeEnum {
    INCLUDE_TABLES = 'include_tables',
    EXCLUDE_TABLES = 'exclude_tables'
}
/**
    * @export
    * @enum {string}
    */
export enum TableReplConfigReplScopeEnum {
    ALL = 'all',
    PART = 'part'
}
