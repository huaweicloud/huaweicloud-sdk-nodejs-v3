import { TmsTagEntity } from './TmsTagEntity';


export class ListJobsJobs {
    private 'job_id'?: string;
    private 'job_type'?: string;
    private 'queue_name'?: string;
    public owner?: string;
    private 'start_time'?: number;
    public duration?: number;
    public status?: ListJobsJobsStatusEnum | string;
    private 'input_row_count'?: number;
    private 'bad_row_count'?: number;
    private 'input_size'?: number;
    private 'result_count'?: number;
    private 'database_name'?: string;
    private 'table_name'?: string;
    private 'with_column_header'?: boolean;
    public detail?: string;
    public statement?: string;
    public tags?: Array<TmsTagEntity>;
    public message?: string;
    private 'end_time'?: number;
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
    public withJobId(jobId: string): ListJobsJobs {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: string): ListJobsJobs {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withQueueName(queueName: string): ListJobsJobs {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withOwner(owner: string): ListJobsJobs {
        this['owner'] = owner;
        return this;
    }
    public withStartTime(startTime: number): ListJobsJobs {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withDuration(duration: number): ListJobsJobs {
        this['duration'] = duration;
        return this;
    }
    public withStatus(status: ListJobsJobsStatusEnum | string): ListJobsJobs {
        this['status'] = status;
        return this;
    }
    public withInputRowCount(inputRowCount: number): ListJobsJobs {
        this['input_row_count'] = inputRowCount;
        return this;
    }
    public set inputRowCount(inputRowCount: number  | undefined) {
        this['input_row_count'] = inputRowCount;
    }
    public get inputRowCount(): number | undefined {
        return this['input_row_count'];
    }
    public withBadRowCount(badRowCount: number): ListJobsJobs {
        this['bad_row_count'] = badRowCount;
        return this;
    }
    public set badRowCount(badRowCount: number  | undefined) {
        this['bad_row_count'] = badRowCount;
    }
    public get badRowCount(): number | undefined {
        return this['bad_row_count'];
    }
    public withInputSize(inputSize: number): ListJobsJobs {
        this['input_size'] = inputSize;
        return this;
    }
    public set inputSize(inputSize: number  | undefined) {
        this['input_size'] = inputSize;
    }
    public get inputSize(): number | undefined {
        return this['input_size'];
    }
    public withResultCount(resultCount: number): ListJobsJobs {
        this['result_count'] = resultCount;
        return this;
    }
    public set resultCount(resultCount: number  | undefined) {
        this['result_count'] = resultCount;
    }
    public get resultCount(): number | undefined {
        return this['result_count'];
    }
    public withDatabaseName(databaseName: string): ListJobsJobs {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ListJobsJobs {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withWithColumnHeader(withColumnHeader: boolean): ListJobsJobs {
        this['with_column_header'] = withColumnHeader;
        return this;
    }
    public set withColumnHeader(withColumnHeader: boolean  | undefined) {
        this['with_column_header'] = withColumnHeader;
    }
    public get withColumnHeader(): boolean | undefined {
        return this['with_column_header'];
    }
    public withDetail(detail: string): ListJobsJobs {
        this['detail'] = detail;
        return this;
    }
    public withStatement(statement: string): ListJobsJobs {
        this['statement'] = statement;
        return this;
    }
    public withTags(tags: Array<TmsTagEntity>): ListJobsJobs {
        this['tags'] = tags;
        return this;
    }
    public withMessage(message: string): ListJobsJobs {
        this['message'] = message;
        return this;
    }
    public withEndTime(endTime: number): ListJobsJobs {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListJobsJobsStatusEnum {
    LAUNCHING = 'LAUNCHING',
    RUNNING = 'RUNNING',
    FINISHED = 'FINISHED',
    FAILED = 'FAILED',
    CANCELLED = 'CANCELLED'
}
