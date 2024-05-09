

export class TablesConfig {
    private 'table_name'?: string;
    private 'table_config'?: string;
    public constructor() { 
    }
    public withTableName(tableName: string): TablesConfig {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTableConfig(tableConfig: string): TablesConfig {
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