

export class TopObjectOverview {
    private 'avg_cpu_time'?: number;
    private 'avg_cpu_time_percentage'?: number;
    private 'avg_execution_time'?: number;
    private 'avg_execution_time_percentage'?: number;
    private 'avg_logical_io'?: number;
    private 'avg_logical_io_percentage'?: number;
    private 'avg_logical_reads'?: number;
    private 'avg_logical_reads_percentage'?: number;
    private 'avg_logical_writes'?: number;
    private 'avg_logical_writes_percentage'?: number;
    private 'avg_physical_reads'?: number;
    private 'avg_physical_reads_percentage'?: number;
    private 'avg_rows'?: number;
    private 'avg_rows_percentage'?: number;
    private 'database_name'?: string;
    private 'object_id'?: string;
    private 'object_name'?: string;
    private 'row_id'?: string;
    private 'object_type'?: string;
    private 'schema_name'?: string;
    private 'total_cpu_time'?: number;
    private 'total_cpu_time_percentage'?: number;
    private 'total_execution_time'?: number;
    private 'total_execution_time_percentage'?: number;
    private 'total_execution_count'?: number;
    private 'total_logical_io'?: number;
    private 'total_logical_io_percentage'?: number;
    private 'total_logical_reads'?: number;
    private 'total_logical_reads_percentage'?: number;
    private 'total_logical_writes'?: number;
    private 'total_logical_writes_percentage'?: number;
    private 'total_physical_reads'?: number;
    private 'total_physical_reads_percentage'?: number;
    private 'total_rows'?: number;
    private 'total_rows_percentage'?: number;
    public constructor() { 
    }
    public withAvgCpuTime(avgCpuTime: number): TopObjectOverview {
        this['avg_cpu_time'] = avgCpuTime;
        return this;
    }
    public set avgCpuTime(avgCpuTime: number  | undefined) {
        this['avg_cpu_time'] = avgCpuTime;
    }
    public get avgCpuTime(): number | undefined {
        return this['avg_cpu_time'];
    }
    public withAvgCpuTimePercentage(avgCpuTimePercentage: number): TopObjectOverview {
        this['avg_cpu_time_percentage'] = avgCpuTimePercentage;
        return this;
    }
    public set avgCpuTimePercentage(avgCpuTimePercentage: number  | undefined) {
        this['avg_cpu_time_percentage'] = avgCpuTimePercentage;
    }
    public get avgCpuTimePercentage(): number | undefined {
        return this['avg_cpu_time_percentage'];
    }
    public withAvgExecutionTime(avgExecutionTime: number): TopObjectOverview {
        this['avg_execution_time'] = avgExecutionTime;
        return this;
    }
    public set avgExecutionTime(avgExecutionTime: number  | undefined) {
        this['avg_execution_time'] = avgExecutionTime;
    }
    public get avgExecutionTime(): number | undefined {
        return this['avg_execution_time'];
    }
    public withAvgExecutionTimePercentage(avgExecutionTimePercentage: number): TopObjectOverview {
        this['avg_execution_time_percentage'] = avgExecutionTimePercentage;
        return this;
    }
    public set avgExecutionTimePercentage(avgExecutionTimePercentage: number  | undefined) {
        this['avg_execution_time_percentage'] = avgExecutionTimePercentage;
    }
    public get avgExecutionTimePercentage(): number | undefined {
        return this['avg_execution_time_percentage'];
    }
    public withAvgLogicalIo(avgLogicalIo: number): TopObjectOverview {
        this['avg_logical_io'] = avgLogicalIo;
        return this;
    }
    public set avgLogicalIo(avgLogicalIo: number  | undefined) {
        this['avg_logical_io'] = avgLogicalIo;
    }
    public get avgLogicalIo(): number | undefined {
        return this['avg_logical_io'];
    }
    public withAvgLogicalIoPercentage(avgLogicalIoPercentage: number): TopObjectOverview {
        this['avg_logical_io_percentage'] = avgLogicalIoPercentage;
        return this;
    }
    public set avgLogicalIoPercentage(avgLogicalIoPercentage: number  | undefined) {
        this['avg_logical_io_percentage'] = avgLogicalIoPercentage;
    }
    public get avgLogicalIoPercentage(): number | undefined {
        return this['avg_logical_io_percentage'];
    }
    public withAvgLogicalReads(avgLogicalReads: number): TopObjectOverview {
        this['avg_logical_reads'] = avgLogicalReads;
        return this;
    }
    public set avgLogicalReads(avgLogicalReads: number  | undefined) {
        this['avg_logical_reads'] = avgLogicalReads;
    }
    public get avgLogicalReads(): number | undefined {
        return this['avg_logical_reads'];
    }
    public withAvgLogicalReadsPercentage(avgLogicalReadsPercentage: number): TopObjectOverview {
        this['avg_logical_reads_percentage'] = avgLogicalReadsPercentage;
        return this;
    }
    public set avgLogicalReadsPercentage(avgLogicalReadsPercentage: number  | undefined) {
        this['avg_logical_reads_percentage'] = avgLogicalReadsPercentage;
    }
    public get avgLogicalReadsPercentage(): number | undefined {
        return this['avg_logical_reads_percentage'];
    }
    public withAvgLogicalWrites(avgLogicalWrites: number): TopObjectOverview {
        this['avg_logical_writes'] = avgLogicalWrites;
        return this;
    }
    public set avgLogicalWrites(avgLogicalWrites: number  | undefined) {
        this['avg_logical_writes'] = avgLogicalWrites;
    }
    public get avgLogicalWrites(): number | undefined {
        return this['avg_logical_writes'];
    }
    public withAvgLogicalWritesPercentage(avgLogicalWritesPercentage: number): TopObjectOverview {
        this['avg_logical_writes_percentage'] = avgLogicalWritesPercentage;
        return this;
    }
    public set avgLogicalWritesPercentage(avgLogicalWritesPercentage: number  | undefined) {
        this['avg_logical_writes_percentage'] = avgLogicalWritesPercentage;
    }
    public get avgLogicalWritesPercentage(): number | undefined {
        return this['avg_logical_writes_percentage'];
    }
    public withAvgPhysicalReads(avgPhysicalReads: number): TopObjectOverview {
        this['avg_physical_reads'] = avgPhysicalReads;
        return this;
    }
    public set avgPhysicalReads(avgPhysicalReads: number  | undefined) {
        this['avg_physical_reads'] = avgPhysicalReads;
    }
    public get avgPhysicalReads(): number | undefined {
        return this['avg_physical_reads'];
    }
    public withAvgPhysicalReadsPercentage(avgPhysicalReadsPercentage: number): TopObjectOverview {
        this['avg_physical_reads_percentage'] = avgPhysicalReadsPercentage;
        return this;
    }
    public set avgPhysicalReadsPercentage(avgPhysicalReadsPercentage: number  | undefined) {
        this['avg_physical_reads_percentage'] = avgPhysicalReadsPercentage;
    }
    public get avgPhysicalReadsPercentage(): number | undefined {
        return this['avg_physical_reads_percentage'];
    }
    public withAvgRows(avgRows: number): TopObjectOverview {
        this['avg_rows'] = avgRows;
        return this;
    }
    public set avgRows(avgRows: number  | undefined) {
        this['avg_rows'] = avgRows;
    }
    public get avgRows(): number | undefined {
        return this['avg_rows'];
    }
    public withAvgRowsPercentage(avgRowsPercentage: number): TopObjectOverview {
        this['avg_rows_percentage'] = avgRowsPercentage;
        return this;
    }
    public set avgRowsPercentage(avgRowsPercentage: number  | undefined) {
        this['avg_rows_percentage'] = avgRowsPercentage;
    }
    public get avgRowsPercentage(): number | undefined {
        return this['avg_rows_percentage'];
    }
    public withDatabaseName(databaseName: string): TopObjectOverview {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withObjectId(objectId: string): TopObjectOverview {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withObjectName(objectName: string): TopObjectOverview {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withRowId(rowId: string): TopObjectOverview {
        this['row_id'] = rowId;
        return this;
    }
    public set rowId(rowId: string  | undefined) {
        this['row_id'] = rowId;
    }
    public get rowId(): string | undefined {
        return this['row_id'];
    }
    public withObjectType(objectType: string): TopObjectOverview {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withSchemaName(schemaName: string): TopObjectOverview {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTotalCpuTime(totalCpuTime: number): TopObjectOverview {
        this['total_cpu_time'] = totalCpuTime;
        return this;
    }
    public set totalCpuTime(totalCpuTime: number  | undefined) {
        this['total_cpu_time'] = totalCpuTime;
    }
    public get totalCpuTime(): number | undefined {
        return this['total_cpu_time'];
    }
    public withTotalCpuTimePercentage(totalCpuTimePercentage: number): TopObjectOverview {
        this['total_cpu_time_percentage'] = totalCpuTimePercentage;
        return this;
    }
    public set totalCpuTimePercentage(totalCpuTimePercentage: number  | undefined) {
        this['total_cpu_time_percentage'] = totalCpuTimePercentage;
    }
    public get totalCpuTimePercentage(): number | undefined {
        return this['total_cpu_time_percentage'];
    }
    public withTotalExecutionTime(totalExecutionTime: number): TopObjectOverview {
        this['total_execution_time'] = totalExecutionTime;
        return this;
    }
    public set totalExecutionTime(totalExecutionTime: number  | undefined) {
        this['total_execution_time'] = totalExecutionTime;
    }
    public get totalExecutionTime(): number | undefined {
        return this['total_execution_time'];
    }
    public withTotalExecutionTimePercentage(totalExecutionTimePercentage: number): TopObjectOverview {
        this['total_execution_time_percentage'] = totalExecutionTimePercentage;
        return this;
    }
    public set totalExecutionTimePercentage(totalExecutionTimePercentage: number  | undefined) {
        this['total_execution_time_percentage'] = totalExecutionTimePercentage;
    }
    public get totalExecutionTimePercentage(): number | undefined {
        return this['total_execution_time_percentage'];
    }
    public withTotalExecutionCount(totalExecutionCount: number): TopObjectOverview {
        this['total_execution_count'] = totalExecutionCount;
        return this;
    }
    public set totalExecutionCount(totalExecutionCount: number  | undefined) {
        this['total_execution_count'] = totalExecutionCount;
    }
    public get totalExecutionCount(): number | undefined {
        return this['total_execution_count'];
    }
    public withTotalLogicalIo(totalLogicalIo: number): TopObjectOverview {
        this['total_logical_io'] = totalLogicalIo;
        return this;
    }
    public set totalLogicalIo(totalLogicalIo: number  | undefined) {
        this['total_logical_io'] = totalLogicalIo;
    }
    public get totalLogicalIo(): number | undefined {
        return this['total_logical_io'];
    }
    public withTotalLogicalIoPercentage(totalLogicalIoPercentage: number): TopObjectOverview {
        this['total_logical_io_percentage'] = totalLogicalIoPercentage;
        return this;
    }
    public set totalLogicalIoPercentage(totalLogicalIoPercentage: number  | undefined) {
        this['total_logical_io_percentage'] = totalLogicalIoPercentage;
    }
    public get totalLogicalIoPercentage(): number | undefined {
        return this['total_logical_io_percentage'];
    }
    public withTotalLogicalReads(totalLogicalReads: number): TopObjectOverview {
        this['total_logical_reads'] = totalLogicalReads;
        return this;
    }
    public set totalLogicalReads(totalLogicalReads: number  | undefined) {
        this['total_logical_reads'] = totalLogicalReads;
    }
    public get totalLogicalReads(): number | undefined {
        return this['total_logical_reads'];
    }
    public withTotalLogicalReadsPercentage(totalLogicalReadsPercentage: number): TopObjectOverview {
        this['total_logical_reads_percentage'] = totalLogicalReadsPercentage;
        return this;
    }
    public set totalLogicalReadsPercentage(totalLogicalReadsPercentage: number  | undefined) {
        this['total_logical_reads_percentage'] = totalLogicalReadsPercentage;
    }
    public get totalLogicalReadsPercentage(): number | undefined {
        return this['total_logical_reads_percentage'];
    }
    public withTotalLogicalWrites(totalLogicalWrites: number): TopObjectOverview {
        this['total_logical_writes'] = totalLogicalWrites;
        return this;
    }
    public set totalLogicalWrites(totalLogicalWrites: number  | undefined) {
        this['total_logical_writes'] = totalLogicalWrites;
    }
    public get totalLogicalWrites(): number | undefined {
        return this['total_logical_writes'];
    }
    public withTotalLogicalWritesPercentage(totalLogicalWritesPercentage: number): TopObjectOverview {
        this['total_logical_writes_percentage'] = totalLogicalWritesPercentage;
        return this;
    }
    public set totalLogicalWritesPercentage(totalLogicalWritesPercentage: number  | undefined) {
        this['total_logical_writes_percentage'] = totalLogicalWritesPercentage;
    }
    public get totalLogicalWritesPercentage(): number | undefined {
        return this['total_logical_writes_percentage'];
    }
    public withTotalPhysicalReads(totalPhysicalReads: number): TopObjectOverview {
        this['total_physical_reads'] = totalPhysicalReads;
        return this;
    }
    public set totalPhysicalReads(totalPhysicalReads: number  | undefined) {
        this['total_physical_reads'] = totalPhysicalReads;
    }
    public get totalPhysicalReads(): number | undefined {
        return this['total_physical_reads'];
    }
    public withTotalPhysicalReadsPercentage(totalPhysicalReadsPercentage: number): TopObjectOverview {
        this['total_physical_reads_percentage'] = totalPhysicalReadsPercentage;
        return this;
    }
    public set totalPhysicalReadsPercentage(totalPhysicalReadsPercentage: number  | undefined) {
        this['total_physical_reads_percentage'] = totalPhysicalReadsPercentage;
    }
    public get totalPhysicalReadsPercentage(): number | undefined {
        return this['total_physical_reads_percentage'];
    }
    public withTotalRows(totalRows: number): TopObjectOverview {
        this['total_rows'] = totalRows;
        return this;
    }
    public set totalRows(totalRows: number  | undefined) {
        this['total_rows'] = totalRows;
    }
    public get totalRows(): number | undefined {
        return this['total_rows'];
    }
    public withTotalRowsPercentage(totalRowsPercentage: number): TopObjectOverview {
        this['total_rows_percentage'] = totalRowsPercentage;
        return this;
    }
    public set totalRowsPercentage(totalRowsPercentage: number  | undefined) {
        this['total_rows_percentage'] = totalRowsPercentage;
    }
    public get totalRowsPercentage(): number | undefined {
        return this['total_rows_percentage'];
    }
}