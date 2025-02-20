

export class JobDetailRespRepairProgressInfoRepairProgressDetails {
    private 'query_id'?: string;
    private 'db_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'total_row_count'?: number;
    private 'complete_row_count'?: number;
    private 'filter_row_count'?: number;
    private 'repaired_row_count'?: number;
    private 'failed_row_count'?: number;
    private 'repair_status'?: number;
    private 'start_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withQueryId(queryId: string): JobDetailRespRepairProgressInfoRepairProgressDetails {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withDbName(dbName: string): JobDetailRespRepairProgressInfoRepairProgressDetails {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): JobDetailRespRepairProgressInfoRepairProgressDetails {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): JobDetailRespRepairProgressInfoRepairProgressDetails {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTotalRowCount(totalRowCount: number): JobDetailRespRepairProgressInfoRepairProgressDetails {
        this['total_row_count'] = totalRowCount;
        return this;
    }
    public set totalRowCount(totalRowCount: number  | undefined) {
        this['total_row_count'] = totalRowCount;
    }
    public get totalRowCount(): number | undefined {
        return this['total_row_count'];
    }
    public withCompleteRowCount(completeRowCount: number): JobDetailRespRepairProgressInfoRepairProgressDetails {
        this['complete_row_count'] = completeRowCount;
        return this;
    }
    public set completeRowCount(completeRowCount: number  | undefined) {
        this['complete_row_count'] = completeRowCount;
    }
    public get completeRowCount(): number | undefined {
        return this['complete_row_count'];
    }
    public withFilterRowCount(filterRowCount: number): JobDetailRespRepairProgressInfoRepairProgressDetails {
        this['filter_row_count'] = filterRowCount;
        return this;
    }
    public set filterRowCount(filterRowCount: number  | undefined) {
        this['filter_row_count'] = filterRowCount;
    }
    public get filterRowCount(): number | undefined {
        return this['filter_row_count'];
    }
    public withRepairedRowCount(repairedRowCount: number): JobDetailRespRepairProgressInfoRepairProgressDetails {
        this['repaired_row_count'] = repairedRowCount;
        return this;
    }
    public set repairedRowCount(repairedRowCount: number  | undefined) {
        this['repaired_row_count'] = repairedRowCount;
    }
    public get repairedRowCount(): number | undefined {
        return this['repaired_row_count'];
    }
    public withFailedRowCount(failedRowCount: number): JobDetailRespRepairProgressInfoRepairProgressDetails {
        this['failed_row_count'] = failedRowCount;
        return this;
    }
    public set failedRowCount(failedRowCount: number  | undefined) {
        this['failed_row_count'] = failedRowCount;
    }
    public get failedRowCount(): number | undefined {
        return this['failed_row_count'];
    }
    public withRepairStatus(repairStatus: number): JobDetailRespRepairProgressInfoRepairProgressDetails {
        this['repair_status'] = repairStatus;
        return this;
    }
    public set repairStatus(repairStatus: number  | undefined) {
        this['repair_status'] = repairStatus;
    }
    public get repairStatus(): number | undefined {
        return this['repair_status'];
    }
    public withStartTime(startTime: string): JobDetailRespRepairProgressInfoRepairProgressDetails {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withUpdateTime(updateTime: string): JobDetailRespRepairProgressInfoRepairProgressDetails {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}