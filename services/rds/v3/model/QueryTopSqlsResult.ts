

export class QueryTopSqlsResult {
    public id?: string;
    public statement?: string;
    public query?: string;
    private 'db_name'?: string;
    private 'execution_count'?: string;
    private 'execution_count_percent'?: string;
    private 'total_cpu_time'?: string;
    private 'total_cpu_time_percent'?: string;
    private 'avg_cpu_time'?: string;
    private 'avg_cpu_time_percent'?: string;
    private 'total_duration_time'?: string;
    private 'total_duration_time_percent'?: string;
    private 'avg_duration_time'?: string;
    private 'avg_duration_time_percent'?: string;
    private 'total_rows'?: string;
    private 'total_rows_percent'?: string;
    private 'avg_rows'?: string;
    private 'avg_rows_percent'?: string;
    private 'total_logical_reads'?: string;
    private 'total_logical_reads_percent'?: string;
    private 'avg_logical_reads'?: string;
    private 'avg_logical_reads_percent'?: string;
    private 'avg_logical_write'?: string;
    private 'avg_logical_write_percent'?: string;
    private 'total_logical_write'?: string;
    private 'total_logical_write_percent'?: string;
    private 'avg_physical_reads'?: string;
    private 'avg_physical_reads_percent'?: string;
    private 'total_physical_reads'?: string;
    private 'total_physical_reads_percent'?: string;
    private 'last_execution_time'?: string;
    public constructor() { 
    }
    public withId(id: string): QueryTopSqlsResult {
        this['id'] = id;
        return this;
    }
    public withStatement(statement: string): QueryTopSqlsResult {
        this['statement'] = statement;
        return this;
    }
    public withQuery(query: string): QueryTopSqlsResult {
        this['query'] = query;
        return this;
    }
    public withDbName(dbName: string): QueryTopSqlsResult {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withExecutionCount(executionCount: string): QueryTopSqlsResult {
        this['execution_count'] = executionCount;
        return this;
    }
    public set executionCount(executionCount: string  | undefined) {
        this['execution_count'] = executionCount;
    }
    public get executionCount(): string | undefined {
        return this['execution_count'];
    }
    public withExecutionCountPercent(executionCountPercent: string): QueryTopSqlsResult {
        this['execution_count_percent'] = executionCountPercent;
        return this;
    }
    public set executionCountPercent(executionCountPercent: string  | undefined) {
        this['execution_count_percent'] = executionCountPercent;
    }
    public get executionCountPercent(): string | undefined {
        return this['execution_count_percent'];
    }
    public withTotalCpuTime(totalCpuTime: string): QueryTopSqlsResult {
        this['total_cpu_time'] = totalCpuTime;
        return this;
    }
    public set totalCpuTime(totalCpuTime: string  | undefined) {
        this['total_cpu_time'] = totalCpuTime;
    }
    public get totalCpuTime(): string | undefined {
        return this['total_cpu_time'];
    }
    public withTotalCpuTimePercent(totalCpuTimePercent: string): QueryTopSqlsResult {
        this['total_cpu_time_percent'] = totalCpuTimePercent;
        return this;
    }
    public set totalCpuTimePercent(totalCpuTimePercent: string  | undefined) {
        this['total_cpu_time_percent'] = totalCpuTimePercent;
    }
    public get totalCpuTimePercent(): string | undefined {
        return this['total_cpu_time_percent'];
    }
    public withAvgCpuTime(avgCpuTime: string): QueryTopSqlsResult {
        this['avg_cpu_time'] = avgCpuTime;
        return this;
    }
    public set avgCpuTime(avgCpuTime: string  | undefined) {
        this['avg_cpu_time'] = avgCpuTime;
    }
    public get avgCpuTime(): string | undefined {
        return this['avg_cpu_time'];
    }
    public withAvgCpuTimePercent(avgCpuTimePercent: string): QueryTopSqlsResult {
        this['avg_cpu_time_percent'] = avgCpuTimePercent;
        return this;
    }
    public set avgCpuTimePercent(avgCpuTimePercent: string  | undefined) {
        this['avg_cpu_time_percent'] = avgCpuTimePercent;
    }
    public get avgCpuTimePercent(): string | undefined {
        return this['avg_cpu_time_percent'];
    }
    public withTotalDurationTime(totalDurationTime: string): QueryTopSqlsResult {
        this['total_duration_time'] = totalDurationTime;
        return this;
    }
    public set totalDurationTime(totalDurationTime: string  | undefined) {
        this['total_duration_time'] = totalDurationTime;
    }
    public get totalDurationTime(): string | undefined {
        return this['total_duration_time'];
    }
    public withTotalDurationTimePercent(totalDurationTimePercent: string): QueryTopSqlsResult {
        this['total_duration_time_percent'] = totalDurationTimePercent;
        return this;
    }
    public set totalDurationTimePercent(totalDurationTimePercent: string  | undefined) {
        this['total_duration_time_percent'] = totalDurationTimePercent;
    }
    public get totalDurationTimePercent(): string | undefined {
        return this['total_duration_time_percent'];
    }
    public withAvgDurationTime(avgDurationTime: string): QueryTopSqlsResult {
        this['avg_duration_time'] = avgDurationTime;
        return this;
    }
    public set avgDurationTime(avgDurationTime: string  | undefined) {
        this['avg_duration_time'] = avgDurationTime;
    }
    public get avgDurationTime(): string | undefined {
        return this['avg_duration_time'];
    }
    public withAvgDurationTimePercent(avgDurationTimePercent: string): QueryTopSqlsResult {
        this['avg_duration_time_percent'] = avgDurationTimePercent;
        return this;
    }
    public set avgDurationTimePercent(avgDurationTimePercent: string  | undefined) {
        this['avg_duration_time_percent'] = avgDurationTimePercent;
    }
    public get avgDurationTimePercent(): string | undefined {
        return this['avg_duration_time_percent'];
    }
    public withTotalRows(totalRows: string): QueryTopSqlsResult {
        this['total_rows'] = totalRows;
        return this;
    }
    public set totalRows(totalRows: string  | undefined) {
        this['total_rows'] = totalRows;
    }
    public get totalRows(): string | undefined {
        return this['total_rows'];
    }
    public withTotalRowsPercent(totalRowsPercent: string): QueryTopSqlsResult {
        this['total_rows_percent'] = totalRowsPercent;
        return this;
    }
    public set totalRowsPercent(totalRowsPercent: string  | undefined) {
        this['total_rows_percent'] = totalRowsPercent;
    }
    public get totalRowsPercent(): string | undefined {
        return this['total_rows_percent'];
    }
    public withAvgRows(avgRows: string): QueryTopSqlsResult {
        this['avg_rows'] = avgRows;
        return this;
    }
    public set avgRows(avgRows: string  | undefined) {
        this['avg_rows'] = avgRows;
    }
    public get avgRows(): string | undefined {
        return this['avg_rows'];
    }
    public withAvgRowsPercent(avgRowsPercent: string): QueryTopSqlsResult {
        this['avg_rows_percent'] = avgRowsPercent;
        return this;
    }
    public set avgRowsPercent(avgRowsPercent: string  | undefined) {
        this['avg_rows_percent'] = avgRowsPercent;
    }
    public get avgRowsPercent(): string | undefined {
        return this['avg_rows_percent'];
    }
    public withTotalLogicalReads(totalLogicalReads: string): QueryTopSqlsResult {
        this['total_logical_reads'] = totalLogicalReads;
        return this;
    }
    public set totalLogicalReads(totalLogicalReads: string  | undefined) {
        this['total_logical_reads'] = totalLogicalReads;
    }
    public get totalLogicalReads(): string | undefined {
        return this['total_logical_reads'];
    }
    public withTotalLogicalReadsPercent(totalLogicalReadsPercent: string): QueryTopSqlsResult {
        this['total_logical_reads_percent'] = totalLogicalReadsPercent;
        return this;
    }
    public set totalLogicalReadsPercent(totalLogicalReadsPercent: string  | undefined) {
        this['total_logical_reads_percent'] = totalLogicalReadsPercent;
    }
    public get totalLogicalReadsPercent(): string | undefined {
        return this['total_logical_reads_percent'];
    }
    public withAvgLogicalReads(avgLogicalReads: string): QueryTopSqlsResult {
        this['avg_logical_reads'] = avgLogicalReads;
        return this;
    }
    public set avgLogicalReads(avgLogicalReads: string  | undefined) {
        this['avg_logical_reads'] = avgLogicalReads;
    }
    public get avgLogicalReads(): string | undefined {
        return this['avg_logical_reads'];
    }
    public withAvgLogicalReadsPercent(avgLogicalReadsPercent: string): QueryTopSqlsResult {
        this['avg_logical_reads_percent'] = avgLogicalReadsPercent;
        return this;
    }
    public set avgLogicalReadsPercent(avgLogicalReadsPercent: string  | undefined) {
        this['avg_logical_reads_percent'] = avgLogicalReadsPercent;
    }
    public get avgLogicalReadsPercent(): string | undefined {
        return this['avg_logical_reads_percent'];
    }
    public withAvgLogicalWrite(avgLogicalWrite: string): QueryTopSqlsResult {
        this['avg_logical_write'] = avgLogicalWrite;
        return this;
    }
    public set avgLogicalWrite(avgLogicalWrite: string  | undefined) {
        this['avg_logical_write'] = avgLogicalWrite;
    }
    public get avgLogicalWrite(): string | undefined {
        return this['avg_logical_write'];
    }
    public withAvgLogicalWritePercent(avgLogicalWritePercent: string): QueryTopSqlsResult {
        this['avg_logical_write_percent'] = avgLogicalWritePercent;
        return this;
    }
    public set avgLogicalWritePercent(avgLogicalWritePercent: string  | undefined) {
        this['avg_logical_write_percent'] = avgLogicalWritePercent;
    }
    public get avgLogicalWritePercent(): string | undefined {
        return this['avg_logical_write_percent'];
    }
    public withTotalLogicalWrite(totalLogicalWrite: string): QueryTopSqlsResult {
        this['total_logical_write'] = totalLogicalWrite;
        return this;
    }
    public set totalLogicalWrite(totalLogicalWrite: string  | undefined) {
        this['total_logical_write'] = totalLogicalWrite;
    }
    public get totalLogicalWrite(): string | undefined {
        return this['total_logical_write'];
    }
    public withTotalLogicalWritePercent(totalLogicalWritePercent: string): QueryTopSqlsResult {
        this['total_logical_write_percent'] = totalLogicalWritePercent;
        return this;
    }
    public set totalLogicalWritePercent(totalLogicalWritePercent: string  | undefined) {
        this['total_logical_write_percent'] = totalLogicalWritePercent;
    }
    public get totalLogicalWritePercent(): string | undefined {
        return this['total_logical_write_percent'];
    }
    public withAvgPhysicalReads(avgPhysicalReads: string): QueryTopSqlsResult {
        this['avg_physical_reads'] = avgPhysicalReads;
        return this;
    }
    public set avgPhysicalReads(avgPhysicalReads: string  | undefined) {
        this['avg_physical_reads'] = avgPhysicalReads;
    }
    public get avgPhysicalReads(): string | undefined {
        return this['avg_physical_reads'];
    }
    public withAvgPhysicalReadsPercent(avgPhysicalReadsPercent: string): QueryTopSqlsResult {
        this['avg_physical_reads_percent'] = avgPhysicalReadsPercent;
        return this;
    }
    public set avgPhysicalReadsPercent(avgPhysicalReadsPercent: string  | undefined) {
        this['avg_physical_reads_percent'] = avgPhysicalReadsPercent;
    }
    public get avgPhysicalReadsPercent(): string | undefined {
        return this['avg_physical_reads_percent'];
    }
    public withTotalPhysicalReads(totalPhysicalReads: string): QueryTopSqlsResult {
        this['total_physical_reads'] = totalPhysicalReads;
        return this;
    }
    public set totalPhysicalReads(totalPhysicalReads: string  | undefined) {
        this['total_physical_reads'] = totalPhysicalReads;
    }
    public get totalPhysicalReads(): string | undefined {
        return this['total_physical_reads'];
    }
    public withTotalPhysicalReadsPercent(totalPhysicalReadsPercent: string): QueryTopSqlsResult {
        this['total_physical_reads_percent'] = totalPhysicalReadsPercent;
        return this;
    }
    public set totalPhysicalReadsPercent(totalPhysicalReadsPercent: string  | undefined) {
        this['total_physical_reads_percent'] = totalPhysicalReadsPercent;
    }
    public get totalPhysicalReadsPercent(): string | undefined {
        return this['total_physical_reads_percent'];
    }
    public withLastExecutionTime(lastExecutionTime: string): QueryTopSqlsResult {
        this['last_execution_time'] = lastExecutionTime;
        return this;
    }
    public set lastExecutionTime(lastExecutionTime: string  | undefined) {
        this['last_execution_time'] = lastExecutionTime;
    }
    public get lastExecutionTime(): string | undefined {
        return this['last_execution_time'];
    }
}