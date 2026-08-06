

export class HealthReportTableSpaceTopDataDto {
    private 'db_name'?: string;
    private 'table_name'?: string;
    public file?: number;
    public data?: number;
    public free?: number;
    private 'free_rate'?: number;
    public index?: number;
    private 'rows_count'?: number;
    public time?: number;
    public constructor() { 
    }
    public withDbName(dbName: string): HealthReportTableSpaceTopDataDto {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): HealthReportTableSpaceTopDataDto {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withFile(file: number): HealthReportTableSpaceTopDataDto {
        this['file'] = file;
        return this;
    }
    public withData(data: number): HealthReportTableSpaceTopDataDto {
        this['data'] = data;
        return this;
    }
    public withFree(free: number): HealthReportTableSpaceTopDataDto {
        this['free'] = free;
        return this;
    }
    public withFreeRate(freeRate: number): HealthReportTableSpaceTopDataDto {
        this['free_rate'] = freeRate;
        return this;
    }
    public set freeRate(freeRate: number  | undefined) {
        this['free_rate'] = freeRate;
    }
    public get freeRate(): number | undefined {
        return this['free_rate'];
    }
    public withIndex(index: number): HealthReportTableSpaceTopDataDto {
        this['index'] = index;
        return this;
    }
    public withRowsCount(rowsCount: number): HealthReportTableSpaceTopDataDto {
        this['rows_count'] = rowsCount;
        return this;
    }
    public set rowsCount(rowsCount: number  | undefined) {
        this['rows_count'] = rowsCount;
    }
    public get rowsCount(): number | undefined {
        return this['rows_count'];
    }
    public withTime(time: number): HealthReportTableSpaceTopDataDto {
        this['time'] = time;
        return this;
    }
}