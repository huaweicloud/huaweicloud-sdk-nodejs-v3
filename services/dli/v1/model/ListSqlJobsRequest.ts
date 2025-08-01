

export class ListSqlJobsRequest {
    private 'current-page'?: number;
    private 'db_name'?: string;
    public end?: number;
    private 'engine-type'?: ListSqlJobsRequestEngineTypeEnum | string;
    private 'job-status'?: ListSqlJobsRequestJobStatusEnum | string;
    private 'job-id'?: string;
    private 'job-type'?: ListSqlJobsRequestJobTypeEnum | string;
    public order?: ListSqlJobsRequestOrderEnum | string;
    public owner?: string;
    private 'page-size'?: number;
    private 'queue_name'?: string;
    private 'sql_pattern'?: string;
    public start?: number;
    private 'table_name'?: string;
    public tags?: string;
    private 'job_types'?: Array<ListSqlJobsRequestJobTypesEnum> | Array<string>;
    public constructor() { 
    }
    public withCurrentPage(currentPage: number): ListSqlJobsRequest {
        this['current-page'] = currentPage;
        return this;
    }
    public set currentPage(currentPage: number  | undefined) {
        this['current-page'] = currentPage;
    }
    public get currentPage(): number | undefined {
        return this['current-page'];
    }
    public withDbName(dbName: string): ListSqlJobsRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withEnd(end: number): ListSqlJobsRequest {
        this['end'] = end;
        return this;
    }
    public withEngineType(engineType: ListSqlJobsRequestEngineTypeEnum | string): ListSqlJobsRequest {
        this['engine-type'] = engineType;
        return this;
    }
    public set engineType(engineType: ListSqlJobsRequestEngineTypeEnum | string  | undefined) {
        this['engine-type'] = engineType;
    }
    public get engineType(): ListSqlJobsRequestEngineTypeEnum | string | undefined {
        return this['engine-type'];
    }
    public withJobStatus(jobStatus: ListSqlJobsRequestJobStatusEnum | string): ListSqlJobsRequest {
        this['job-status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: ListSqlJobsRequestJobStatusEnum | string  | undefined) {
        this['job-status'] = jobStatus;
    }
    public get jobStatus(): ListSqlJobsRequestJobStatusEnum | string | undefined {
        return this['job-status'];
    }
    public withJobId(jobId: string): ListSqlJobsRequest {
        this['job-id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job-id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job-id'];
    }
    public withJobType(jobType: ListSqlJobsRequestJobTypeEnum | string): ListSqlJobsRequest {
        this['job-type'] = jobType;
        return this;
    }
    public set jobType(jobType: ListSqlJobsRequestJobTypeEnum | string  | undefined) {
        this['job-type'] = jobType;
    }
    public get jobType(): ListSqlJobsRequestJobTypeEnum | string | undefined {
        return this['job-type'];
    }
    public withOrder(order: ListSqlJobsRequestOrderEnum | string): ListSqlJobsRequest {
        this['order'] = order;
        return this;
    }
    public withOwner(owner: string): ListSqlJobsRequest {
        this['owner'] = owner;
        return this;
    }
    public withPageSize(pageSize: number): ListSqlJobsRequest {
        this['page-size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page-size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page-size'];
    }
    public withQueueName(queueName: string): ListSqlJobsRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withSqlPattern(sqlPattern: string): ListSqlJobsRequest {
        this['sql_pattern'] = sqlPattern;
        return this;
    }
    public set sqlPattern(sqlPattern: string  | undefined) {
        this['sql_pattern'] = sqlPattern;
    }
    public get sqlPattern(): string | undefined {
        return this['sql_pattern'];
    }
    public withStart(start: number): ListSqlJobsRequest {
        this['start'] = start;
        return this;
    }
    public withTableName(tableName: string): ListSqlJobsRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTags(tags: string): ListSqlJobsRequest {
        this['tags'] = tags;
        return this;
    }
    public withJobTypes(jobTypes: Array<ListSqlJobsRequestJobTypesEnum> | Array<string>): ListSqlJobsRequest {
        this['job_types'] = jobTypes;
        return this;
    }
    public set jobTypes(jobTypes: Array<ListSqlJobsRequestJobTypesEnum> | Array<string>  | undefined) {
        this['job_types'] = jobTypes;
    }
    public get jobTypes(): Array<ListSqlJobsRequestJobTypesEnum> | Array<string> | undefined {
        return this['job_types'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSqlJobsRequestEngineTypeEnum {
    SPARK = 'spark',
    HETUENGINE = 'hetuEngine'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSqlJobsRequestJobStatusEnum {
    LAUNCHING = 'LAUNCHING',
    RUNNING = 'RUNNING',
    FAILED = 'FAILED',
    CANCELLED = 'CANCELLED',
    COMPUTED = 'COMPUTED',
    SUSPENDED = 'SUSPENDED',
    ACTIVE = 'ACTIVE',
    DELETED = 'DELETED',
    CREATING = 'CREATING',
    FINISHED = 'FINISHED',
    SCALING = 'SCALING'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSqlJobsRequestJobTypeEnum {
    DDL = 'DDL',
    DCL = 'DCL',
    IMPORT = 'IMPORT',
    EXPORT = 'EXPORT',
    QUERY = 'QUERY',
    INSERT = 'INSERT',
    DATA_MIGRATION = 'DATA_MIGRATION',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
    RESTART_QUEUE = 'RESTART_QUEUE',
    SCALE_QUEUE = 'SCALE_QUEUE',
    ALL = 'ALL'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSqlJobsRequestOrderEnum {
    DURATION_DESC = 'duration_desc',
    DURATION_ASC = 'duration_asc',
    START_TIME_DESC = 'start_time_desc',
    START_TIME_ASC = 'start_time_asc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSqlJobsRequestJobTypesEnum {
    DDL = 'DDL',
    DCL = 'DCL',
    IMPORT = 'IMPORT',
    EXPORT = 'EXPORT',
    QUERY = 'QUERY',
    INSERT = 'INSERT',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE'
}
