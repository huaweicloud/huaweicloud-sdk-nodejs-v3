

export class CreateSlowLogExportTaskNewRequestBody {
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'bucket_name'?: string;
    private 'file_path'?: string;
    private 'export_type'?: string;
    private 'sort_field'?: string;
    private 'sort_asc'?: boolean;
    public client?: string;
    public user?: string;
    public killed?: string;
    private 'execute_time_min'?: number;
    private 'execute_time_max'?: number;
    private 'min_avg_execute_time'?: number;
    private 'max_avg_execute_time'?: number;
    private 'rows_max_examined'?: number;
    private 'rows_min_examined'?: number;
    private 'fuzzy_sql'?: string;
    public operation?: string;
    private 'time_zone'?: string;
    public constructor(startTime?: number, endTime?: number, bucketName?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['bucket_name'] = bucketName;
    }
    public withStartTime(startTime: number): CreateSlowLogExportTaskNewRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): CreateSlowLogExportTaskNewRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withBucketName(bucketName: string): CreateSlowLogExportTaskNewRequestBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withFilePath(filePath: string): CreateSlowLogExportTaskNewRequestBody {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withExportType(exportType: string): CreateSlowLogExportTaskNewRequestBody {
        this['export_type'] = exportType;
        return this;
    }
    public set exportType(exportType: string  | undefined) {
        this['export_type'] = exportType;
    }
    public get exportType(): string | undefined {
        return this['export_type'];
    }
    public withSortField(sortField: string): CreateSlowLogExportTaskNewRequestBody {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortAsc(sortAsc: boolean): CreateSlowLogExportTaskNewRequestBody {
        this['sort_asc'] = sortAsc;
        return this;
    }
    public set sortAsc(sortAsc: boolean  | undefined) {
        this['sort_asc'] = sortAsc;
    }
    public get sortAsc(): boolean | undefined {
        return this['sort_asc'];
    }
    public withClient(client: string): CreateSlowLogExportTaskNewRequestBody {
        this['client'] = client;
        return this;
    }
    public withUser(user: string): CreateSlowLogExportTaskNewRequestBody {
        this['user'] = user;
        return this;
    }
    public withKilled(killed: string): CreateSlowLogExportTaskNewRequestBody {
        this['killed'] = killed;
        return this;
    }
    public withExecuteTimeMin(executeTimeMin: number): CreateSlowLogExportTaskNewRequestBody {
        this['execute_time_min'] = executeTimeMin;
        return this;
    }
    public set executeTimeMin(executeTimeMin: number  | undefined) {
        this['execute_time_min'] = executeTimeMin;
    }
    public get executeTimeMin(): number | undefined {
        return this['execute_time_min'];
    }
    public withExecuteTimeMax(executeTimeMax: number): CreateSlowLogExportTaskNewRequestBody {
        this['execute_time_max'] = executeTimeMax;
        return this;
    }
    public set executeTimeMax(executeTimeMax: number  | undefined) {
        this['execute_time_max'] = executeTimeMax;
    }
    public get executeTimeMax(): number | undefined {
        return this['execute_time_max'];
    }
    public withMinAvgExecuteTime(minAvgExecuteTime: number): CreateSlowLogExportTaskNewRequestBody {
        this['min_avg_execute_time'] = minAvgExecuteTime;
        return this;
    }
    public set minAvgExecuteTime(minAvgExecuteTime: number  | undefined) {
        this['min_avg_execute_time'] = minAvgExecuteTime;
    }
    public get minAvgExecuteTime(): number | undefined {
        return this['min_avg_execute_time'];
    }
    public withMaxAvgExecuteTime(maxAvgExecuteTime: number): CreateSlowLogExportTaskNewRequestBody {
        this['max_avg_execute_time'] = maxAvgExecuteTime;
        return this;
    }
    public set maxAvgExecuteTime(maxAvgExecuteTime: number  | undefined) {
        this['max_avg_execute_time'] = maxAvgExecuteTime;
    }
    public get maxAvgExecuteTime(): number | undefined {
        return this['max_avg_execute_time'];
    }
    public withRowsMaxExamined(rowsMaxExamined: number): CreateSlowLogExportTaskNewRequestBody {
        this['rows_max_examined'] = rowsMaxExamined;
        return this;
    }
    public set rowsMaxExamined(rowsMaxExamined: number  | undefined) {
        this['rows_max_examined'] = rowsMaxExamined;
    }
    public get rowsMaxExamined(): number | undefined {
        return this['rows_max_examined'];
    }
    public withRowsMinExamined(rowsMinExamined: number): CreateSlowLogExportTaskNewRequestBody {
        this['rows_min_examined'] = rowsMinExamined;
        return this;
    }
    public set rowsMinExamined(rowsMinExamined: number  | undefined) {
        this['rows_min_examined'] = rowsMinExamined;
    }
    public get rowsMinExamined(): number | undefined {
        return this['rows_min_examined'];
    }
    public withFuzzySql(fuzzySql: string): CreateSlowLogExportTaskNewRequestBody {
        this['fuzzy_sql'] = fuzzySql;
        return this;
    }
    public set fuzzySql(fuzzySql: string  | undefined) {
        this['fuzzy_sql'] = fuzzySql;
    }
    public get fuzzySql(): string | undefined {
        return this['fuzzy_sql'];
    }
    public withOperation(operation: string): CreateSlowLogExportTaskNewRequestBody {
        this['operation'] = operation;
        return this;
    }
    public withTimeZone(timeZone: string): CreateSlowLogExportTaskNewRequestBody {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
}