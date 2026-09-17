

export class RapidGrowthTableInfo {
    private 'db_name'?: string;
    private 'table_name'?: string;
    public growth?: number;
    public constructor() { 
    }
    public withDbName(dbName: string): RapidGrowthTableInfo {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): RapidGrowthTableInfo {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withGrowth(growth: number): RapidGrowthTableInfo {
        this['growth'] = growth;
        return this;
    }
}