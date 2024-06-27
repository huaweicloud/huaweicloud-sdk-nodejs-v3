

export class ChDatabaseTablesConfigsInfo {
    private 'table_name'?: string;
    private 'table_config'?: string;
    public constructor(tableName?: string, tableConfig?: string) { 
        this['table_name'] = tableName;
        this['table_config'] = tableConfig;
    }
    public withTableName(tableName: string): ChDatabaseTablesConfigsInfo {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTableConfig(tableConfig: string): ChDatabaseTablesConfigsInfo {
        this['table_config'] = tableConfig;
        return this;
    }
    public set tableConfig(tableConfig: string  | undefined) {
        this['table_config'] = tableConfig;
    }
    public get tableConfig(): string | undefined {
        return this['table_config'];
    }
}