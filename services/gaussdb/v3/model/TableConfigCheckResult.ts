

export class TableConfigCheckResult {
    private 'table_name'?: string;
    private 'table_config'?: string;
    private 'check_result'?: string;
    public constructor() { 
    }
    public withTableName(tableName: string): TableConfigCheckResult {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTableConfig(tableConfig: string): TableConfigCheckResult {
        this['table_config'] = tableConfig;
        return this;
    }
    public set tableConfig(tableConfig: string  | undefined) {
        this['table_config'] = tableConfig;
    }
    public get tableConfig(): string | undefined {
        return this['table_config'];
    }
    public withCheckResult(checkResult: string): TableConfigCheckResult {
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