import { Tag } from './Tag';


export class SqlJob {
    private 'job_id'?: string;
    private 'job_type'?: string;
    private 'queue_name'?: string;
    public owner?: string;
    private 'start_time'?: number;
    public duration?: number;
    public status?: SqlJobStatusEnum | string;
    private 'input_row_count'?: number;
    private 'bad_row_count'?: number;
    private 'input_size'?: number;
    private 'result_count'?: number;
    private 'database_name'?: string;
    private 'table_name'?: string;
    private 'with_column_header'?: boolean;
    public detail?: string;
    private 'engine_type'?: SqlJobEngineTypeEnum | string;
    public statement?: string;
    public tags?: Array<Tag>;
    public message?: string;
    private 'end_time'?: number;
    private 'cpu_cost'?: string;
    private 'output_byte'?: string;
    private 'result_path'?: string;
    private 'result_format'?: string;
    private 'execution_details_path'?: string;
    public constructor(jobId?: string, jobType?: string, queueName?: string, owner?: string, startTime?: number, status?: string, inputSize?: number, resultCount?: number, detail?: string, statement?: string) { 
        this['job_id'] = jobId;
        this['job_type'] = jobType;
        this['queue_name'] = queueName;
        this['owner'] = owner;
        this['start_time'] = startTime;
        this['status'] = status;
        this['input_size'] = inputSize;
        this['result_count'] = resultCount;
        this['detail'] = detail;
        this['statement'] = statement;
    }
    public withJobId(jobId: string): SqlJob {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: string): SqlJob {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withQueueName(queueName: string): SqlJob {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withOwner(owner: string): SqlJob {
        this['owner'] = owner;
        return this;
    }
    public withStartTime(startTime: number): SqlJob {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withDuration(duration: number): SqlJob {
        this['duration'] = duration;
        return this;
    }
    public withStatus(status: SqlJobStatusEnum | string): SqlJob {
        this['status'] = status;
        return this;
    }
    public withInputRowCount(inputRowCount: number): SqlJob {
        this['input_row_count'] = inputRowCount;
        return this;
    }
    public set inputRowCount(inputRowCount: number  | undefined) {
        this['input_row_count'] = inputRowCount;
    }
    public get inputRowCount(): number | undefined {
        return this['input_row_count'];
    }
    public withBadRowCount(badRowCount: number): SqlJob {
        this['bad_row_count'] = badRowCount;
        return this;
    }
    public set badRowCount(badRowCount: number  | undefined) {
        this['bad_row_count'] = badRowCount;
    }
    public get badRowCount(): number | undefined {
        return this['bad_row_count'];
    }
    public withInputSize(inputSize: number): SqlJob {
        this['input_size'] = inputSize;
        return this;
    }
    public set inputSize(inputSize: number  | undefined) {
        this['input_size'] = inputSize;
    }
    public get inputSize(): number | undefined {
        return this['input_size'];
    }
    public withResultCount(resultCount: number): SqlJob {
        this['result_count'] = resultCount;
        return this;
    }
    public set resultCount(resultCount: number  | undefined) {
        this['result_count'] = resultCount;
    }
    public get resultCount(): number | undefined {
        return this['result_count'];
    }
    public withDatabaseName(databaseName: string): SqlJob {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): SqlJob {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withWithColumnHeader(withColumnHeader: boolean): SqlJob {
        this['with_column_header'] = withColumnHeader;
        return this;
    }
    public set withColumnHeader(withColumnHeader: boolean  | undefined) {
        this['with_column_header'] = withColumnHeader;
    }
    public get withColumnHeader(): boolean | undefined {
        return this['with_column_header'];
    }
    public withDetail(detail: string): SqlJob {
        this['detail'] = detail;
        return this;
    }
    public withEngineType(engineType: SqlJobEngineTypeEnum | string): SqlJob {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: SqlJobEngineTypeEnum | string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): SqlJobEngineTypeEnum | string | undefined {
        return this['engine_type'];
    }
    public withStatement(statement: string): SqlJob {
        this['statement'] = statement;
        return this;
    }
    public withTags(tags: Array<Tag>): SqlJob {
        this['tags'] = tags;
        return this;
    }
    public withMessage(message: string): SqlJob {
        this['message'] = message;
        return this;
    }
    public withEndTime(endTime: number): SqlJob {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withCpuCost(cpuCost: string): SqlJob {
        this['cpu_cost'] = cpuCost;
        return this;
    }
    public set cpuCost(cpuCost: string  | undefined) {
        this['cpu_cost'] = cpuCost;
    }
    public get cpuCost(): string | undefined {
        return this['cpu_cost'];
    }
    public withOutputByte(outputByte: string): SqlJob {
        this['output_byte'] = outputByte;
        return this;
    }
    public set outputByte(outputByte: string  | undefined) {
        this['output_byte'] = outputByte;
    }
    public get outputByte(): string | undefined {
        return this['output_byte'];
    }
    public withResultPath(resultPath: string): SqlJob {
        this['result_path'] = resultPath;
        return this;
    }
    public set resultPath(resultPath: string  | undefined) {
        this['result_path'] = resultPath;
    }
    public get resultPath(): string | undefined {
        return this['result_path'];
    }
    public withResultFormat(resultFormat: string): SqlJob {
        this['result_format'] = resultFormat;
        return this;
    }
    public set resultFormat(resultFormat: string  | undefined) {
        this['result_format'] = resultFormat;
    }
    public get resultFormat(): string | undefined {
        return this['result_format'];
    }
    public withExecutionDetailsPath(executionDetailsPath: string): SqlJob {
        this['execution_details_path'] = executionDetailsPath;
        return this;
    }
    public set executionDetailsPath(executionDetailsPath: string  | undefined) {
        this['execution_details_path'] = executionDetailsPath;
    }
    public get executionDetailsPath(): string | undefined {
        return this['execution_details_path'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SqlJobStatusEnum {
    LAUNCHING = 'LAUNCHING',
    RUNNING = 'RUNNING',
    FINISHED = 'FINISHED',
    FAILED = 'FAILED',
    CANCELLED = 'CANCELLED'
}
/**
    * @export
    * @enum {string}
    */
export enum SqlJobEngineTypeEnum {
    SPARK = 'spark',
    HETUENGINE = 'hetuEngine'
}
