

export class ListTablesStatisticDto {
    private 'db_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'table_owner'?: string;
    private 'table_size'?: string;
    private 'skew_rate'?: number;
    private 'dirty_page_rate'?: number;
    public constructor() { 
    }
    public withDbName(dbName: string): ListTablesStatisticDto {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): ListTablesStatisticDto {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): ListTablesStatisticDto {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTableOwner(tableOwner: string): ListTablesStatisticDto {
        this['table_owner'] = tableOwner;
        return this;
    }
    public set tableOwner(tableOwner: string  | undefined) {
        this['table_owner'] = tableOwner;
    }
    public get tableOwner(): string | undefined {
        return this['table_owner'];
    }
    public withTableSize(tableSize: string): ListTablesStatisticDto {
        this['table_size'] = tableSize;
        return this;
    }
    public set tableSize(tableSize: string  | undefined) {
        this['table_size'] = tableSize;
    }
    public get tableSize(): string | undefined {
        return this['table_size'];
    }
    public withSkewRate(skewRate: number): ListTablesStatisticDto {
        this['skew_rate'] = skewRate;
        return this;
    }
    public set skewRate(skewRate: number  | undefined) {
        this['skew_rate'] = skewRate;
    }
    public get skewRate(): number | undefined {
        return this['skew_rate'];
    }
    public withDirtyPageRate(dirtyPageRate: number): ListTablesStatisticDto {
        this['dirty_page_rate'] = dirtyPageRate;
        return this;
    }
    public set dirtyPageRate(dirtyPageRate: number  | undefined) {
        this['dirty_page_rate'] = dirtyPageRate;
    }
    public get dirtyPageRate(): number | undefined {
        return this['dirty_page_rate'];
    }
}