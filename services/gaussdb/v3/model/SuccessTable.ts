

export class SuccessTable {
    private 'db_name'?: string;
    private 'table_name'?: string;
    private 'config_name'?: string;
    private 'row_number'?: number;
    private 'full_table_name'?: string;
    public valid?: boolean;
    public constructor() { 
    }
    public withDbName(dbName: string): SuccessTable {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): SuccessTable {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withConfigName(configName: string): SuccessTable {
        this['config_name'] = configName;
        return this;
    }
    public set configName(configName: string  | undefined) {
        this['config_name'] = configName;
    }
    public get configName(): string | undefined {
        return this['config_name'];
    }
    public withRowNumber(rowNumber: number): SuccessTable {
        this['row_number'] = rowNumber;
        return this;
    }
    public set rowNumber(rowNumber: number  | undefined) {
        this['row_number'] = rowNumber;
    }
    public get rowNumber(): number | undefined {
        return this['row_number'];
    }
    public withFullTableName(fullTableName: string): SuccessTable {
        this['full_table_name'] = fullTableName;
        return this;
    }
    public set fullTableName(fullTableName: string  | undefined) {
        this['full_table_name'] = fullTableName;
    }
    public get fullTableName(): string | undefined {
        return this['full_table_name'];
    }
    public withValid(valid: boolean): SuccessTable {
        this['valid'] = valid;
        return this;
    }
}