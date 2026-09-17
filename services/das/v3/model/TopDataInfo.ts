

export class TopDataInfo {
    private 'db_name'?: string;
    private 'table_name'?: string;
    public file?: number;
    public data?: number;
    public free?: number;
    private 'free_rate'?: number;
    public index?: number;
    private 'rows_count'?: number;
    public time?: number;
    public growth?: number;
    public constructor() { 
    }
    public withDbName(dbName: string): TopDataInfo {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): TopDataInfo {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withFile(file: number): TopDataInfo {
        this['file'] = file;
        return this;
    }
    public withData(data: number): TopDataInfo {
        this['data'] = data;
        return this;
    }
    public withFree(free: number): TopDataInfo {
        this['free'] = free;
        return this;
    }
    public withFreeRate(freeRate: number): TopDataInfo {
        this['free_rate'] = freeRate;
        return this;
    }
    public set freeRate(freeRate: number  | undefined) {
        this['free_rate'] = freeRate;
    }
    public get freeRate(): number | undefined {
        return this['free_rate'];
    }
    public withIndex(index: number): TopDataInfo {
        this['index'] = index;
        return this;
    }
    public withRowsCount(rowsCount: number): TopDataInfo {
        this['rows_count'] = rowsCount;
        return this;
    }
    public set rowsCount(rowsCount: number  | undefined) {
        this['rows_count'] = rowsCount;
    }
    public get rowsCount(): number | undefined {
        return this['rows_count'];
    }
    public withTime(time: number): TopDataInfo {
        this['time'] = time;
        return this;
    }
    public withGrowth(growth: number): TopDataInfo {
        this['growth'] = growth;
        return this;
    }
}