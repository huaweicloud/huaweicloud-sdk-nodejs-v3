

export class ListFlinkJobsRequest {
    private 'job_type'?: ListFlinkJobsRequestJobTypeEnum | string;
    public limit?: number;
    public name?: string;
    public offset?: number;
    public order?: string;
    private 'queue_name'?: string;
    private 'root_job_id'?: number;
    private 'show_detail'?: boolean;
    public status?: ListFlinkJobsRequestStatusEnum | string;
    private 'sys_enterprise_project_name'?: string;
    public tags?: string;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withJobType(jobType: ListFlinkJobsRequestJobTypeEnum | string): ListFlinkJobsRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ListFlinkJobsRequestJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): ListFlinkJobsRequestJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withLimit(limit: number): ListFlinkJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListFlinkJobsRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListFlinkJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrder(order: string): ListFlinkJobsRequest {
        this['order'] = order;
        return this;
    }
    public withQueueName(queueName: string): ListFlinkJobsRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withRootJobId(rootJobId: number): ListFlinkJobsRequest {
        this['root_job_id'] = rootJobId;
        return this;
    }
    public set rootJobId(rootJobId: number  | undefined) {
        this['root_job_id'] = rootJobId;
    }
    public get rootJobId(): number | undefined {
        return this['root_job_id'];
    }
    public withShowDetail(showDetail: boolean): ListFlinkJobsRequest {
        this['show_detail'] = showDetail;
        return this;
    }
    public set showDetail(showDetail: boolean  | undefined) {
        this['show_detail'] = showDetail;
    }
    public get showDetail(): boolean | undefined {
        return this['show_detail'];
    }
    public withStatus(status: ListFlinkJobsRequestStatusEnum | string): ListFlinkJobsRequest {
        this['status'] = status;
        return this;
    }
    public withSysEnterpriseProjectName(sysEnterpriseProjectName: string): ListFlinkJobsRequest {
        this['sys_enterprise_project_name'] = sysEnterpriseProjectName;
        return this;
    }
    public set sysEnterpriseProjectName(sysEnterpriseProjectName: string  | undefined) {
        this['sys_enterprise_project_name'] = sysEnterpriseProjectName;
    }
    public get sysEnterpriseProjectName(): string | undefined {
        return this['sys_enterprise_project_name'];
    }
    public withTags(tags: string): ListFlinkJobsRequest {
        this['tags'] = tags;
        return this;
    }
    public withUserName(userName: string): ListFlinkJobsRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFlinkJobsRequestJobTypeEnum {
    FLINK_SQL_JOB = 'flink_sql_job',
    FLINK_OPENSOURCE_SQL_JOB = 'flink_opensource_sql_job',
    FLINK_SQL_EDGE_JOB = 'flink_sql_edge_job',
    FLINK_JAR_JOB = 'flink_jar_job'
}
/**
    * @export
    * @enum {string}
    */
export enum ListFlinkJobsRequestStatusEnum {
    JOB_INIT = 'job_init',
    JOB_SUBMITTING = 'job_submitting',
    JOB_SUBMIT_FAIL = 'job_submit_fail',
    JOB_RUNNING = 'job_running',
    JOB_RUNNING_EXCEPTION = 'job_running_exception',
    JOB_DOWNLOADING = 'job_downloading',
    JOB_IDLE = 'job_idle',
    JOB_CANCELING = 'job_canceling',
    JOB_CANCEL_SUCCESS = 'job_cancel_success',
    JOB_CANCEL_FAIL = 'job_cancel_fail',
    JOB_SAVEPOINTING = 'job_savepointing',
    JOB_ARREARAGE_STOPPED = 'job_arrearage_stopped',
    JOB_ARREARAGE_RECOVERING = 'job_arrearage_recovering',
    JOB_FINISH = 'job_finish'
}
