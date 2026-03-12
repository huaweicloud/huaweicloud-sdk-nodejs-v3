

export class FullSqlTraceStatisticsResult {
    private 'hit_rate'?: number;
    private 'db_time'?: number;
    private 'cpu_time'?: number;
    private 'io_time'?: number;
    private 'execution_time'?: number;
    private 'scan_rows'?: number;
    private 'update_rows'?: number;
    private 'insert_rows'?: number;
    private 'delete_rows'?: number;
    public constructor() { 
    }
    public withHitRate(hitRate: number): FullSqlTraceStatisticsResult {
        this['hit_rate'] = hitRate;
        return this;
    }
    public set hitRate(hitRate: number  | undefined) {
        this['hit_rate'] = hitRate;
    }
    public get hitRate(): number | undefined {
        return this['hit_rate'];
    }
    public withDbTime(dbTime: number): FullSqlTraceStatisticsResult {
        this['db_time'] = dbTime;
        return this;
    }
    public set dbTime(dbTime: number  | undefined) {
        this['db_time'] = dbTime;
    }
    public get dbTime(): number | undefined {
        return this['db_time'];
    }
    public withCpuTime(cpuTime: number): FullSqlTraceStatisticsResult {
        this['cpu_time'] = cpuTime;
        return this;
    }
    public set cpuTime(cpuTime: number  | undefined) {
        this['cpu_time'] = cpuTime;
    }
    public get cpuTime(): number | undefined {
        return this['cpu_time'];
    }
    public withIoTime(ioTime: number): FullSqlTraceStatisticsResult {
        this['io_time'] = ioTime;
        return this;
    }
    public set ioTime(ioTime: number  | undefined) {
        this['io_time'] = ioTime;
    }
    public get ioTime(): number | undefined {
        return this['io_time'];
    }
    public withExecutionTime(executionTime: number): FullSqlTraceStatisticsResult {
        this['execution_time'] = executionTime;
        return this;
    }
    public set executionTime(executionTime: number  | undefined) {
        this['execution_time'] = executionTime;
    }
    public get executionTime(): number | undefined {
        return this['execution_time'];
    }
    public withScanRows(scanRows: number): FullSqlTraceStatisticsResult {
        this['scan_rows'] = scanRows;
        return this;
    }
    public set scanRows(scanRows: number  | undefined) {
        this['scan_rows'] = scanRows;
    }
    public get scanRows(): number | undefined {
        return this['scan_rows'];
    }
    public withUpdateRows(updateRows: number): FullSqlTraceStatisticsResult {
        this['update_rows'] = updateRows;
        return this;
    }
    public set updateRows(updateRows: number  | undefined) {
        this['update_rows'] = updateRows;
    }
    public get updateRows(): number | undefined {
        return this['update_rows'];
    }
    public withInsertRows(insertRows: number): FullSqlTraceStatisticsResult {
        this['insert_rows'] = insertRows;
        return this;
    }
    public set insertRows(insertRows: number  | undefined) {
        this['insert_rows'] = insertRows;
    }
    public get insertRows(): number | undefined {
        return this['insert_rows'];
    }
    public withDeleteRows(deleteRows: number): FullSqlTraceStatisticsResult {
        this['delete_rows'] = deleteRows;
        return this;
    }
    public set deleteRows(deleteRows: number  | undefined) {
        this['delete_rows'] = deleteRows;
    }
    public get deleteRows(): number | undefined {
        return this['delete_rows'];
    }
}