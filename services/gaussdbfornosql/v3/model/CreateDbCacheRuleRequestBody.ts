

export class CreateDbCacheRuleRequestBody {
    private 'dbcache_mapping_id'?: string;
    public name?: string;
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
    public constructor(dbcacheMappingId?: string, name?: string, sourceDbSchema?: string, sourceDbTable?: string, storageType?: string, targetDatabase?: string, keyColumns?: Array<string>, valueColumns?: Array<string>, keySeparator?: string, keyPrefix?: string) { 
        this['dbcache_mapping_id'] = dbcacheMappingId;
        this['name'] = name;
        this['source_db_schema'] = sourceDbSchema;
        this['source_db_table'] = sourceDbTable;
        this['storage_type'] = storageType;
        this['target_database'] = targetDatabase;
        this['key_columns'] = keyColumns;
        this['value_columns'] = valueColumns;
        this['key_separator'] = keySeparator;
        this['key_prefix'] = keyPrefix;
    }
    public withDbcacheMappingId(dbcacheMappingId: string): CreateDbCacheRuleRequestBody {
        this['dbcache_mapping_id'] = dbcacheMappingId;
        return this;
    }
    public set dbcacheMappingId(dbcacheMappingId: string  | undefined) {
        this['dbcache_mapping_id'] = dbcacheMappingId;
    }
    public get dbcacheMappingId(): string | undefined {
        return this['dbcache_mapping_id'];
    }
    public withName(name: string): CreateDbCacheRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withSourceDbSchema(sourceDbSchema: string): CreateDbCacheRuleRequestBody {
        this['source_db_schema'] = sourceDbSchema;
        return this;
    }
    public set sourceDbSchema(sourceDbSchema: string  | undefined) {
        this['source_db_schema'] = sourceDbSchema;
    }
    public get sourceDbSchema(): string | undefined {
        return this['source_db_schema'];
    }
    public withSourceDbTable(sourceDbTable: string): CreateDbCacheRuleRequestBody {
        this['source_db_table'] = sourceDbTable;
        return this;
    }
    public set sourceDbTable(sourceDbTable: string  | undefined) {
        this['source_db_table'] = sourceDbTable;
    }
    public get sourceDbTable(): string | undefined {
        return this['source_db_table'];
    }
    public withStorageType(storageType: string): CreateDbCacheRuleRequestBody {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: string  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): string | undefined {
        return this['storage_type'];
    }
    public withTargetDatabase(targetDatabase: string): CreateDbCacheRuleRequestBody {
        this['target_database'] = targetDatabase;
        return this;
    }
    public set targetDatabase(targetDatabase: string  | undefined) {
        this['target_database'] = targetDatabase;
    }
    public get targetDatabase(): string | undefined {
        return this['target_database'];
    }
    public withKeyColumns(keyColumns: Array<string>): CreateDbCacheRuleRequestBody {
        this['key_columns'] = keyColumns;
        return this;
    }
    public set keyColumns(keyColumns: Array<string>  | undefined) {
        this['key_columns'] = keyColumns;
    }
    public get keyColumns(): Array<string> | undefined {
        return this['key_columns'];
    }
    public withValueColumns(valueColumns: Array<string>): CreateDbCacheRuleRequestBody {
        this['value_columns'] = valueColumns;
        return this;
    }
    public set valueColumns(valueColumns: Array<string>  | undefined) {
        this['value_columns'] = valueColumns;
    }
    public get valueColumns(): Array<string> | undefined {
        return this['value_columns'];
    }
    public withTtl(ttl: string): CreateDbCacheRuleRequestBody {
        this['ttl'] = ttl;
        return this;
    }
    public withKeySeparator(keySeparator: string): CreateDbCacheRuleRequestBody {
        this['key_separator'] = keySeparator;
        return this;
    }
    public set keySeparator(keySeparator: string  | undefined) {
        this['key_separator'] = keySeparator;
    }
    public get keySeparator(): string | undefined {
        return this['key_separator'];
    }
    public withValueSeparator(valueSeparator: string): CreateDbCacheRuleRequestBody {
        this['value_separator'] = valueSeparator;
        return this;
    }
    public set valueSeparator(valueSeparator: string  | undefined) {
        this['value_separator'] = valueSeparator;
    }
    public get valueSeparator(): string | undefined {
        return this['value_separator'];
    }
    public withKeyPrefix(keyPrefix: string): CreateDbCacheRuleRequestBody {
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