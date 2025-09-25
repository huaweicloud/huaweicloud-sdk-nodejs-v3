

export class FullSqlStatisticInfoResult {
    public template?: string;
    private 'sql_id'?: string;
    private 'sql_count'?: number;
    private 'total_sql_time'?: number;
    private 'avg_sql_time'?: number;
    private 'total_db_time'?: number;
    private 'total_cpu_time'?: number;
    private 'avg_parse_time'?: number;
    private 'avg_plan_time'?: number;
    private 'total_data_io_time'?: number;
    private 'avg_n_returned_rows'?: number;
    private 'avg_n_tuples_fetched'?: number;
    private 'avg_db_time'?: number;
    private 'avg_cpu_time'?: number;
    private 'avg_data_io_time'?: number;
    private 'avg_execution_time'?: number;
    private 'avg_n_blocks_hit'?: number;
    private 'start_time_stamp'?: number;
    private 'end_time_stamp'?: number;
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
    public withTotalSqlTime(totalSqlTime: number): FullSqlStatisticInfoResult {
        this['total_sql_time'] = totalSqlTime;
        return this;
    }
    public set totalSqlTime(totalSqlTime: number  | undefined) {
        this['total_sql_time'] = totalSqlTime;
    }
    public get totalSqlTime(): number | undefined {
        return this['total_sql_time'];
    }
    public withAvgSqlTime(avgSqlTime: number): FullSqlStatisticInfoResult {
        this['avg_sql_time'] = avgSqlTime;
        return this;
    }
    public set avgSqlTime(avgSqlTime: number  | undefined) {
        this['avg_sql_time'] = avgSqlTime;
    }
    public get avgSqlTime(): number | undefined {
        return this['avg_sql_time'];
    }
    public withTotalDbTime(totalDbTime: number): FullSqlStatisticInfoResult {
        this['total_db_time'] = totalDbTime;
        return this;
    }
    public set totalDbTime(totalDbTime: number  | undefined) {
        this['total_db_time'] = totalDbTime;
    }
    public get totalDbTime(): number | undefined {
        return this['total_db_time'];
    }
    public withTotalCpuTime(totalCpuTime: number): FullSqlStatisticInfoResult {
        this['total_cpu_time'] = totalCpuTime;
        return this;
    }
    public set totalCpuTime(totalCpuTime: number  | undefined) {
        this['total_cpu_time'] = totalCpuTime;
    }
    public get totalCpuTime(): number | undefined {
        return this['total_cpu_time'];
    }
    public withAvgParseTime(avgParseTime: number): FullSqlStatisticInfoResult {
        this['avg_parse_time'] = avgParseTime;
        return this;
    }
    public set avgParseTime(avgParseTime: number  | undefined) {
        this['avg_parse_time'] = avgParseTime;
    }
    public get avgParseTime(): number | undefined {
        return this['avg_parse_time'];
    }
    public withAvgPlanTime(avgPlanTime: number): FullSqlStatisticInfoResult {
        this['avg_plan_time'] = avgPlanTime;
        return this;
    }
    public set avgPlanTime(avgPlanTime: number  | undefined) {
        this['avg_plan_time'] = avgPlanTime;
    }
    public get avgPlanTime(): number | undefined {
        return this['avg_plan_time'];
    }
    public withTotalDataIoTime(totalDataIoTime: number): FullSqlStatisticInfoResult {
        this['total_data_io_time'] = totalDataIoTime;
        return this;
    }
    public set totalDataIoTime(totalDataIoTime: number  | undefined) {
        this['total_data_io_time'] = totalDataIoTime;
    }
    public get totalDataIoTime(): number | undefined {
        return this['total_data_io_time'];
    }
    public withAvgNReturnedRows(avgNReturnedRows: number): FullSqlStatisticInfoResult {
        this['avg_n_returned_rows'] = avgNReturnedRows;
        return this;
    }
    public set avgNReturnedRows(avgNReturnedRows: number  | undefined) {
        this['avg_n_returned_rows'] = avgNReturnedRows;
    }
    public get avgNReturnedRows(): number | undefined {
        return this['avg_n_returned_rows'];
    }
    public withAvgNTuplesFetched(avgNTuplesFetched: number): FullSqlStatisticInfoResult {
        this['avg_n_tuples_fetched'] = avgNTuplesFetched;
        return this;
    }
    public set avgNTuplesFetched(avgNTuplesFetched: number  | undefined) {
        this['avg_n_tuples_fetched'] = avgNTuplesFetched;
    }
    public get avgNTuplesFetched(): number | undefined {
        return this['avg_n_tuples_fetched'];
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
    public withStartTimeStamp(startTimeStamp: number): FullSqlStatisticInfoResult {
        this['start_time_stamp'] = startTimeStamp;
        return this;
    }
    public set startTimeStamp(startTimeStamp: number  | undefined) {
        this['start_time_stamp'] = startTimeStamp;
    }
    public get startTimeStamp(): number | undefined {
        return this['start_time_stamp'];
    }
    public withEndTimeStamp(endTimeStamp: number): FullSqlStatisticInfoResult {
        this['end_time_stamp'] = endTimeStamp;
        return this;
    }
    public set endTimeStamp(endTimeStamp: number  | undefined) {
        this['end_time_stamp'] = endTimeStamp;
    }
    public get endTimeStamp(): number | undefined {
        return this['end_time_stamp'];
    }
}