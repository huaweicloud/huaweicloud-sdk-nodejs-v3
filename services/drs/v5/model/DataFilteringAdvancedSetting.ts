

export class DataFilteringAdvancedSetting {
    private 'db_name'?: string;
    private 'table_name'?: string;
    private 'col_names'?: string;
    private 'prim_key_or_indexes'?: string;
    public indexes?: string;
    public values?: string;
    public constructor(dbName?: string, tableName?: string, colNames?: string, primKeyOrIndexes?: string, indexes?: string, values?: string) { 
        this['db_name'] = dbName;
        this['table_name'] = tableName;
        this['col_names'] = colNames;
        this['prim_key_or_indexes'] = primKeyOrIndexes;
        this['indexes'] = indexes;
        this['values'] = values;
    }
    public withDbName(dbName: string): DataFilteringAdvancedSetting {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): DataFilteringAdvancedSetting {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withColNames(colNames: string): DataFilteringAdvancedSetting {
        this['col_names'] = colNames;
        return this;
    }
    public set colNames(colNames: string  | undefined) {
        this['col_names'] = colNames;
    }
    public get colNames(): string | undefined {
        return this['col_names'];
    }
    public withPrimKeyOrIndexes(primKeyOrIndexes: string): DataFilteringAdvancedSetting {
        this['prim_key_or_indexes'] = primKeyOrIndexes;
        return this;
    }
    public set primKeyOrIndexes(primKeyOrIndexes: string  | undefined) {
        this['prim_key_or_indexes'] = primKeyOrIndexes;
    }
    public get primKeyOrIndexes(): string | undefined {
        return this['prim_key_or_indexes'];
    }
    public withIndexes(indexes: string): DataFilteringAdvancedSetting {
        this['indexes'] = indexes;
        return this;
    }
    public withValues(values: string): DataFilteringAdvancedSetting {
        this['values'] = values;
        return this;
    }
}