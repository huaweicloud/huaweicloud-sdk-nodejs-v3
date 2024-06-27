

export class ChDatabaseTableConfigCheckResult {
    private 'table_name'?: string;
    private 'table_config'?: string;
    private 'check_result'?: string;
    public constructor(tableName?: string, tableConfig?: string, checkResult?: string) { 
        this['table_name'] = tableName;
        this['table_config'] = tableConfig;
        this['check_result'] = checkResult;
    }
    public withTableName(tableName: string): ChDatabaseTableConfigCheckResult {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTableConfig(tableConfig: string): ChDatabaseTableConfigCheckResult {
        this['table_config'] = tableConfig;
        return this;
    }
    public set tableConfig(tableConfig: string  | undefined) {
        this['table_config'] = tableConfig;
    }
    public get tableConfig(): string | undefined {
        return this['table_config'];
    }
    public withCheckResult(checkResult: string): ChDatabaseTableConfigCheckResult {
        this['check_result'] = checkResult;
        return this;
    }
    public set checkResult(checkResult: string  | undefined) {
        this['check_result'] = checkResult;
    }
    public get checkResult(): string | undefined {
        return this['check_result'];
    }
}