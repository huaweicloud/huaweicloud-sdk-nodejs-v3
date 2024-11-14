

export class QueryDBCacheRuleResponse {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'source_db_schema'?: string;
    private 'source_db_table'?: string;
    private 'storage_type'?: string;
    private 'target_database'?: string;
    private 'key_columns'?: Array<string>;
    private 'value_columns'?: Array<string>;
    public ttl?: string;
    private 'key_separator'?: string;
    private 'value_separator'?: string;
    private 'key_prefix'?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): QueryDBCacheRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): QueryDBCacheRuleResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): QueryDBCacheRuleResponse {
        this['status'] = status;
        return this;
    }
    public withSourceDbSchema(sourceDbSchema: string): QueryDBCacheRuleResponse {
        this['source_db_schema'] = sourceDbSchema;
        return this;
    }
    public set sourceDbSchema(sourceDbSchema: string  | undefined) {
        this['source_db_schema'] = sourceDbSchema;
    }
    public get sourceDbSchema(): string | undefined {
        return this['source_db_schema'];
    }
    public withSourceDbTable(sourceDbTable: string): QueryDBCacheRuleResponse {
        this['source_db_table'] = sourceDbTable;
        return this;
    }
    public set sourceDbTable(sourceDbTable: string  | undefined) {
        this['source_db_table'] = sourceDbTable;
    }
    public get sourceDbTable(): string | undefined {
        return this['source_db_table'];
    }
    public withStorageType(storageType: string): QueryDBCacheRuleResponse {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: string  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): string | undefined {
        return this['storage_type'];
    }
    public withTargetDatabase(targetDatabase: string): QueryDBCacheRuleResponse {
        this['target_database'] = targetDatabase;
        return this;
    }
    public set targetDatabase(targetDatabase: string  | undefined) {
        this['target_database'] = targetDatabase;
    }
    public get targetDatabase(): string | undefined {
        return this['target_database'];
    }
    public withKeyColumns(keyColumns: Array<string>): QueryDBCacheRuleResponse {
        this['key_columns'] = keyColumns;
        return this;
    }
    public set keyColumns(keyColumns: Array<string>  | undefined) {
        this['key_columns'] = keyColumns;
    }
    public get keyColumns(): Array<string> | undefined {
        return this['key_columns'];
    }
    public withValueColumns(valueColumns: Array<string>): QueryDBCacheRuleResponse {
        this['value_columns'] = valueColumns;
        return this;
    }
    public set valueColumns(valueColumns: Array<string>  | undefined) {
        this['value_columns'] = valueColumns;
    }
    public get valueColumns(): Array<string> | undefined {
        return this['value_columns'];
    }
    public withTtl(ttl: string): QueryDBCacheRuleResponse {
        this['ttl'] = ttl;
        return this;
    }
    public withKeySeparator(keySeparator: string): QueryDBCacheRuleResponse {
        this['key_separator'] = keySeparator;
        return this;
    }
    public set keySeparator(keySeparator: string  | undefined) {
        this['key_separator'] = keySeparator;
    }
    public get keySeparator(): string | undefined {
        return this['key_separator'];
    }
    public withValueSeparator(valueSeparator: string): QueryDBCacheRuleResponse {
        this['value_separator'] = valueSeparator;
        return this;
    }
    public set valueSeparator(valueSeparator: string  | undefined) {
        this['value_separator'] = valueSeparator;
    }
    public get valueSeparator(): string | undefined {
        return this['value_separator'];
    }
    public withKeyPrefix(keyPrefix: string): QueryDBCacheRuleResponse {
        this['key_prefix'] = keyPrefix;
        return this;
    }
    public set keyPrefix(keyPrefix: string  | undefined) {
        this['key_prefix'] = keyPrefix;
    }
    public get keyPrefix(): string | undefined {
        return this['key_prefix'];
    }
}