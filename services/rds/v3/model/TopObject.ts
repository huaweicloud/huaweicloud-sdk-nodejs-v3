

export class TopObject {
    private 'row_id'?: string;
    private 'database_name'?: string;
    private 'schema_name'?: string;
    private 'object_name'?: string;
    private 'object_id'?: string;
    private 'object_type'?: string;
    private 'sql_statement'?: string;
    private 'execution_count'?: string;
    private 'plan_generation_num'?: string;
    private 'last_execution_time'?: string;
    private 'avg_worker_time'?: string;
    private 'total_worker_time'?: string;
    private 'last_worker_time'?: string;
    private 'min_worker_time'?: string;
    private 'max_worker_time'?: string;
    private 'avg_logical_reads'?: string;
    private 'total_logical_reads'?: string;
    private 'last_logical_reads'?: string;
    private 'min_logical_reads'?: string;
    private 'max_logical_reads'?: string;
    private 'avg_logical_writes'?: string;
    private 'total_logical_writes'?: string;
    private 'last_logical_writes'?: string;
    private 'min_logical_writes'?: string;
    private 'max_logical_writes'?: string;
    private 'avg_logical_io'?: string;
    private 'total_logical_io'?: string;
    private 'last_logical_io'?: string;
    private 'min_logical_io'?: string;
    private 'max_logical_io'?: string;
    private 'avg_physical_reads'?: string;
    private 'total_physical_reads'?: string;
    private 'last_physical_reads'?: string;
    private 'min_physical_reads'?: string;
    private 'max_physical_reads'?: string;
    private 'avg_elapsed_time'?: string;
    private 'total_elapsed_time'?: string;
    private 'last_elapsed_time'?: string;
    private 'min_elapsed_time'?: string;
    private 'max_elapsed_time'?: string;
    private 'avg_rows'?: string;
    private 'total_rows'?: string;
    private 'last_rows'?: string;
    private 'min_rows'?: string;
    private 'max_rows'?: string;
    public constructor(rowId?: string, databaseName?: string, schemaName?: string) { 
        this['row_id'] = rowId;
        this['database_name'] = databaseName;
        this['schema_name'] = schemaName;
    }
    public withRowId(rowId: string): TopObject {
        this['row_id'] = rowId;
        return this;
    }
    public set rowId(rowId: string  | undefined) {
        this['row_id'] = rowId;
    }
    public get rowId(): string | undefined {
        return this['row_id'];
    }
    public withDatabaseName(databaseName: string): TopObject {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): TopObject {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withObjectName(objectName: string): TopObject {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withObjectId(objectId: string): TopObject {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withObjectType(objectType: string): TopObject {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withSqlStatement(sqlStatement: string): TopObject {
        this['sql_statement'] = sqlStatement;
        return this;
    }
    public set sqlStatement(sqlStatement: string  | undefined) {
        this['sql_statement'] = sqlStatement;
    }
    public get sqlStatement(): string | undefined {
        return this['sql_statement'];
    }
    public withExecutionCount(executionCount: string): TopObject {
        this['execution_count'] = executionCount;
        return this;
    }
    public set executionCount(executionCount: string  | undefined) {
        this['execution_count'] = executionCount;
    }
    public get executionCount(): string | undefined {
        return this['execution_count'];
    }
    public withPlanGenerationNum(planGenerationNum: string): TopObject {
        this['plan_generation_num'] = planGenerationNum;
        return this;
    }
    public set planGenerationNum(planGenerationNum: string  | undefined) {
        this['plan_generation_num'] = planGenerationNum;
    }
    public get planGenerationNum(): string | undefined {
        return this['plan_generation_num'];
    }
    public withLastExecutionTime(lastExecutionTime: string): TopObject {
        this['last_execution_time'] = lastExecutionTime;
        return this;
    }
    public set lastExecutionTime(lastExecutionTime: string  | undefined) {
        this['last_execution_time'] = lastExecutionTime;
    }
    public get lastExecutionTime(): string | undefined {
        return this['last_execution_time'];
    }
    public withAvgWorkerTime(avgWorkerTime: string): TopObject {
        this['avg_worker_time'] = avgWorkerTime;
        return this;
    }
    public set avgWorkerTime(avgWorkerTime: string  | undefined) {
        this['avg_worker_time'] = avgWorkerTime;
    }
    public get avgWorkerTime(): string | undefined {
        return this['avg_worker_time'];
    }
    public withTotalWorkerTime(totalWorkerTime: string): TopObject {
        this['total_worker_time'] = totalWorkerTime;
        return this;
    }
    public set totalWorkerTime(totalWorkerTime: string  | undefined) {
        this['total_worker_time'] = totalWorkerTime;
    }
    public get totalWorkerTime(): string | undefined {
        return this['total_worker_time'];
    }
    public withLastWorkerTime(lastWorkerTime: string): TopObject {
        this['last_worker_time'] = lastWorkerTime;
        return this;
    }
    public set lastWorkerTime(lastWorkerTime: string  | undefined) {
        this['last_worker_time'] = lastWorkerTime;
    }
    public get lastWorkerTime(): string | undefined {
        return this['last_worker_time'];
    }
    public withMinWorkerTime(minWorkerTime: string): TopObject {
        this['min_worker_time'] = minWorkerTime;
        return this;
    }
    public set minWorkerTime(minWorkerTime: string  | undefined) {
        this['min_worker_time'] = minWorkerTime;
    }
    public get minWorkerTime(): string | undefined {
        return this['min_worker_time'];
    }
    public withMaxWorkerTime(maxWorkerTime: string): TopObject {
        this['max_worker_time'] = maxWorkerTime;
        return this;
    }
    public set maxWorkerTime(maxWorkerTime: string  | undefined) {
        this['max_worker_time'] = maxWorkerTime;
    }
    public get maxWorkerTime(): string | undefined {
        return this['max_worker_time'];
    }
    public withAvgLogicalReads(avgLogicalReads: string): TopObject {
        this['avg_logical_reads'] = avgLogicalReads;
        return this;
    }
    public set avgLogicalReads(avgLogicalReads: string  | undefined) {
        this['avg_logical_reads'] = avgLogicalReads;
    }
    public get avgLogicalReads(): string | undefined {
        return this['avg_logical_reads'];
    }
    public withTotalLogicalReads(totalLogicalReads: string): TopObject {
        this['total_logical_reads'] = totalLogicalReads;
        return this;
    }
    public set totalLogicalReads(totalLogicalReads: string  | undefined) {
        this['total_logical_reads'] = totalLogicalReads;
    }
    public get totalLogicalReads(): string | undefined {
        return this['total_logical_reads'];
    }
    public withLastLogicalReads(lastLogicalReads: string): TopObject {
        this['last_logical_reads'] = lastLogicalReads;
        return this;
    }
    public set lastLogicalReads(lastLogicalReads: string  | undefined) {
        this['last_logical_reads'] = lastLogicalReads;
    }
    public get lastLogicalReads(): string | undefined {
        return this['last_logical_reads'];
    }
    public withMinLogicalReads(minLogicalReads: string): TopObject {
        this['min_logical_reads'] = minLogicalReads;
        return this;
    }
    public set minLogicalReads(minLogicalReads: string  | undefined) {
        this['min_logical_reads'] = minLogicalReads;
    }
    public get minLogicalReads(): string | undefined {
        return this['min_logical_reads'];
    }
    public withMaxLogicalReads(maxLogicalReads: string): TopObject {
        this['max_logical_reads'] = maxLogicalReads;
        return this;
    }
    public set maxLogicalReads(maxLogicalReads: string  | undefined) {
        this['max_logical_reads'] = maxLogicalReads;
    }
    public get maxLogicalReads(): string | undefined {
        return this['max_logical_reads'];
    }
    public withAvgLogicalWrites(avgLogicalWrites: string): TopObject {
        this['avg_logical_writes'] = avgLogicalWrites;
        return this;
    }
    public set avgLogicalWrites(avgLogicalWrites: string  | undefined) {
        this['avg_logical_writes'] = avgLogicalWrites;
    }
    public get avgLogicalWrites(): string | undefined {
        return this['avg_logical_writes'];
    }
    public withTotalLogicalWrites(totalLogicalWrites: string): TopObject {
        this['total_logical_writes'] = totalLogicalWrites;
        return this;
    }
    public set totalLogicalWrites(totalLogicalWrites: string  | undefined) {
        this['total_logical_writes'] = totalLogicalWrites;
    }
    public get totalLogicalWrites(): string | undefined {
        return this['total_logical_writes'];
    }
    public withLastLogicalWrites(lastLogicalWrites: string): TopObject {
        this['last_logical_writes'] = lastLogicalWrites;
        return this;
    }
    public set lastLogicalWrites(lastLogicalWrites: string  | undefined) {
        this['last_logical_writes'] = lastLogicalWrites;
    }
    public get lastLogicalWrites(): string | undefined {
        return this['last_logical_writes'];
    }
    public withMinLogicalWrites(minLogicalWrites: string): TopObject {
        this['min_logical_writes'] = minLogicalWrites;
        return this;
    }
    public set minLogicalWrites(minLogicalWrites: string  | undefined) {
        this['min_logical_writes'] = minLogicalWrites;
    }
    public get minLogicalWrites(): string | undefined {
        return this['min_logical_writes'];
    }
    public withMaxLogicalWrites(maxLogicalWrites: string): TopObject {
        this['max_logical_writes'] = maxLogicalWrites;
        return this;
    }
    public set maxLogicalWrites(maxLogicalWrites: string  | undefined) {
        this['max_logical_writes'] = maxLogicalWrites;
    }
    public get maxLogicalWrites(): string | undefined {
        return this['max_logical_writes'];
    }
    public withAvgLogicalIo(avgLogicalIo: string): TopObject {
        this['avg_logical_io'] = avgLogicalIo;
        return this;
    }
    public set avgLogicalIo(avgLogicalIo: string  | undefined) {
        this['avg_logical_io'] = avgLogicalIo;
    }
    public get avgLogicalIo(): string | undefined {
        return this['avg_logical_io'];
    }
    public withTotalLogicalIo(totalLogicalIo: string): TopObject {
        this['total_logical_io'] = totalLogicalIo;
        return this;
    }
    public set totalLogicalIo(totalLogicalIo: string  | undefined) {
        this['total_logical_io'] = totalLogicalIo;
    }
    public get totalLogicalIo(): string | undefined {
        return this['total_logical_io'];
    }
    public withLastLogicalIo(lastLogicalIo: string): TopObject {
        this['last_logical_io'] = lastLogicalIo;
        return this;
    }
    public set lastLogicalIo(lastLogicalIo: string  | undefined) {
        this['last_logical_io'] = lastLogicalIo;
    }
    public get lastLogicalIo(): string | undefined {
        return this['last_logical_io'];
    }
    public withMinLogicalIo(minLogicalIo: string): TopObject {
        this['min_logical_io'] = minLogicalIo;
        return this;
    }
    public set minLogicalIo(minLogicalIo: string  | undefined) {
        this['min_logical_io'] = minLogicalIo;
    }
    public get minLogicalIo(): string | undefined {
        return this['min_logical_io'];
    }
    public withMaxLogicalIo(maxLogicalIo: string): TopObject {
        this['max_logical_io'] = maxLogicalIo;
        return this;
    }
    public set maxLogicalIo(maxLogicalIo: string  | undefined) {
        this['max_logical_io'] = maxLogicalIo;
    }
    public get maxLogicalIo(): string | undefined {
        return this['max_logical_io'];
    }
    public withAvgPhysicalReads(avgPhysicalReads: string): TopObject {
        this['avg_physical_reads'] = avgPhysicalReads;
        return this;
    }
    public set avgPhysicalReads(avgPhysicalReads: string  | undefined) {
        this['avg_physical_reads'] = avgPhysicalReads;
    }
    public get avgPhysicalReads(): string | undefined {
        return this['avg_physical_reads'];
    }
    public withTotalPhysicalReads(totalPhysicalReads: string): TopObject {
        this['total_physical_reads'] = totalPhysicalReads;
        return this;
    }
    public set totalPhysicalReads(totalPhysicalReads: string  | undefined) {
        this['total_physical_reads'] = totalPhysicalReads;
    }
    public get totalPhysicalReads(): string | undefined {
        return this['total_physical_reads'];
    }
    public withLastPhysicalReads(lastPhysicalReads: string): TopObject {
        this['last_physical_reads'] = lastPhysicalReads;
        return this;
    }
    public set lastPhysicalReads(lastPhysicalReads: string  | undefined) {
        this['last_physical_reads'] = lastPhysicalReads;
    }
    public get lastPhysicalReads(): string | undefined {
        return this['last_physical_reads'];
    }
    public withMinPhysicalReads(minPhysicalReads: string): TopObject {
        this['min_physical_reads'] = minPhysicalReads;
        return this;
    }
    public set minPhysicalReads(minPhysicalReads: string  | undefined) {
        this['min_physical_reads'] = minPhysicalReads;
    }
    public get minPhysicalReads(): string | undefined {
        return this['min_physical_reads'];
    }
    public withMaxPhysicalReads(maxPhysicalReads: string): TopObject {
        this['max_physical_reads'] = maxPhysicalReads;
        return this;
    }
    public set maxPhysicalReads(maxPhysicalReads: string  | undefined) {
        this['max_physical_reads'] = maxPhysicalReads;
    }
    public get maxPhysicalReads(): string | undefined {
        return this['max_physical_reads'];
    }
    public withAvgElapsedTime(avgElapsedTime: string): TopObject {
        this['avg_elapsed_time'] = avgElapsedTime;
        return this;
    }
    public set avgElapsedTime(avgElapsedTime: string  | undefined) {
        this['avg_elapsed_time'] = avgElapsedTime;
    }
    public get avgElapsedTime(): string | undefined {
        return this['avg_elapsed_time'];
    }
    public withTotalElapsedTime(totalElapsedTime: string): TopObject {
        this['total_elapsed_time'] = totalElapsedTime;
        return this;
    }
    public set totalElapsedTime(totalElapsedTime: string  | undefined) {
        this['total_elapsed_time'] = totalElapsedTime;
    }
    public get totalElapsedTime(): string | undefined {
        return this['total_elapsed_time'];
    }
    public withLastElapsedTime(lastElapsedTime: string): TopObject {
        this['last_elapsed_time'] = lastElapsedTime;
        return this;
    }
    public set lastElapsedTime(lastElapsedTime: string  | undefined) {
        this['last_elapsed_time'] = lastElapsedTime;
    }
    public get lastElapsedTime(): string | undefined {
        return this['last_elapsed_time'];
    }
    public withMinElapsedTime(minElapsedTime: string): TopObject {
        this['min_elapsed_time'] = minElapsedTime;
        return this;
    }
    public set minElapsedTime(minElapsedTime: string  | undefined) {
        this['min_elapsed_time'] = minElapsedTime;
    }
    public get minElapsedTime(): string | undefined {
        return this['min_elapsed_time'];
    }
    public withMaxElapsedTime(maxElapsedTime: string): TopObject {
        this['max_elapsed_time'] = maxElapsedTime;
        return this;
    }
    public set maxElapsedTime(maxElapsedTime: string  | undefined) {
        this['max_elapsed_time'] = maxElapsedTime;
    }
    public get maxElapsedTime(): string | undefined {
        return this['max_elapsed_time'];
    }
    public withAvgRows(avgRows: string): TopObject {
        this['avg_rows'] = avgRows;
        return this;
    }
    public set avgRows(avgRows: string  | undefined) {
        this['avg_rows'] = avgRows;
    }
    public get avgRows(): string | undefined {
        return this['avg_rows'];
    }
    public withTotalRows(totalRows: string): TopObject {
        this['total_rows'] = totalRows;
        return this;
    }
    public set totalRows(totalRows: string  | undefined) {
        this['total_rows'] = totalRows;
    }
    public get totalRows(): string | undefined {
        return this['total_rows'];
    }
    public withLastRows(lastRows: string): TopObject {
        this['last_rows'] = lastRows;
        return this;
    }
    public set lastRows(lastRows: string  | undefined) {
        this['last_rows'] = lastRows;
    }
    public get lastRows(): string | undefined {
        return this['last_rows'];
    }
    public withMinRows(minRows: string): TopObject {
        this['min_rows'] = minRows;
        return this;
    }
    public set minRows(minRows: string  | undefined) {
        this['min_rows'] = minRows;
    }
    public get minRows(): string | undefined {
        return this['min_rows'];
    }
    public withMaxRows(maxRows: string): TopObject {
        this['max_rows'] = maxRows;
        return this;
    }
    public set maxRows(maxRows: string  | undefined) {
        this['max_rows'] = maxRows;
    }
    public get maxRows(): string | undefined {
        return this['max_rows'];
    }
}