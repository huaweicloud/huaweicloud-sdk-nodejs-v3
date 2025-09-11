

export class FullSqlStatisticInfoResult {
    public template?: string;
    private 'sql_id'?: string;
    private 'sql_count'?: number;
    private 'avg_db_time'?: number;
    private 'avg_cpu_time'?: number;
    private 'avg_data_io_time'?: number;
    private 'avg_execution_time'?: number;
    private 'avg_n_blocks_hit'?: number;
    private 'start_time_stamp'?: string;
    private 'end_time_stamp'?: string;
    public constructor() { 
    }
    public withTemplate(template: string): FullSqlStatisticInfoResult {
        this['template'] = template;
        return this;
    }
    public withSqlId(sqlId: string): FullSqlStatisticInfoResult {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withSqlCount(sqlCount: number): FullSqlStatisticInfoResult {
        this['sql_count'] = sqlCount;
        return this;
    }
    public set sqlCount(sqlCount: number  | undefined) {
        this['sql_count'] = sqlCount;
    }
    public get sqlCount(): number | undefined {
        return this['sql_count'];
    }
    public withAvgDbTime(avgDbTime: number): FullSqlStatisticInfoResult {
        this['avg_db_time'] = avgDbTime;
        return this;
    }
    public set avgDbTime(avgDbTime: number  | undefined) {
        this['avg_db_time'] = avgDbTime;
    }
    public get avgDbTime(): number | undefined {
        return this['avg_db_time'];
    }
    public withAvgCpuTime(avgCpuTime: number): FullSqlStatisticInfoResult {
        this['avg_cpu_time'] = avgCpuTime;
        return this;
    }
    public set avgCpuTime(avgCpuTime: number  | undefined) {
        this['avg_cpu_time'] = avgCpuTime;
    }
    public get avgCpuTime(): number | undefined {
        return this['avg_cpu_time'];
    }
    public withAvgDataIoTime(avgDataIoTime: number): FullSqlStatisticInfoResult {
        this['avg_data_io_time'] = avgDataIoTime;
        return this;
    }
    public set avgDataIoTime(avgDataIoTime: number  | undefined) {
        this['avg_data_io_time'] = avgDataIoTime;
    }
    public get avgDataIoTime(): number | undefined {
        return this['avg_data_io_time'];
    }
    public withAvgExecutionTime(avgExecutionTime: number): FullSqlStatisticInfoResult {
        this['avg_execution_time'] = avgExecutionTime;
        return this;
    }
    public set avgExecutionTime(avgExecutionTime: number  | undefined) {
        this['avg_execution_time'] = avgExecutionTime;
    }
    public get avgExecutionTime(): number | undefined {
        return this['avg_execution_time'];
    }
    public withAvgNBlocksHit(avgNBlocksHit: number): FullSqlStatisticInfoResult {
        this['avg_n_blocks_hit'] = avgNBlocksHit;
        return this;
    }
    public set avgNBlocksHit(avgNBlocksHit: number  | undefined) {
        this['avg_n_blocks_hit'] = avgNBlocksHit;
    }
    public get avgNBlocksHit(): number | undefined {
        return this['avg_n_blocks_hit'];
    }
    public withStartTimeStamp(startTimeStamp: string): FullSqlStatisticInfoResult {
        this['start_time_stamp'] = startTimeStamp;
        return this;
    }
    public set startTimeStamp(startTimeStamp: string  | undefined) {
        this['start_time_stamp'] = startTimeStamp;
    }
    public get startTimeStamp(): string | undefined {
        return this['start_time_stamp'];
    }
    public withEndTimeStamp(endTimeStamp: string): FullSqlStatisticInfoResult {
        this['end_time_stamp'] = endTimeStamp;
        return this;
    }
    public set endTimeStamp(endTimeStamp: string  | undefined) {
        this['end_time_stamp'] = endTimeStamp;
    }
    public get endTimeStamp(): string | undefined {
        return this['end_time_stamp'];
    }
}