

export class DatabaseForListTableResult {
    private 'table_name'?: string;
    public constructor(tableName?: string) { 
        this['table_name'] = tableName;
    }
    public withTableName(tableName: string): DatabaseForListTableResult {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
}