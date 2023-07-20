

export class ShowJobExeListNewRequest {
    private 'cluster_id'?: string;
    private 'job_name'?: string;
    private 'job_id'?: string;
    public user?: string;
    private 'job_type'?: string;
    private 'job_state'?: ShowJobExeListNewRequestJobStateEnum | string;
    private 'job_result'?: ShowJobExeListNewRequestJobResultEnum | string;
    public queue?: string;
    public limit?: string;
    public offset?: string;
    private 'sort_by'?: string;
    private 'submitted_time_begin'?: number;
    private 'submitted_time_end'?: number;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ShowJobExeListNewRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withJobName(jobName: string): ShowJobExeListNewRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobId(jobId: string): ShowJobExeListNewRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withUser(user: string): ShowJobExeListNewRequest {
        this['user'] = user;
        return this;
    }
    public withJobType(jobType: string): ShowJobExeListNewRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withJobState(jobState: ShowJobExeListNewRequestJobStateEnum | string): ShowJobExeListNewRequest {
        this['job_state'] = jobState;
        return this;
    }
    public set jobState(jobState: ShowJobExeListNewRequestJobStateEnum | string  | undefined) {
        this['job_state'] = jobState;
    }
    public get jobState(): ShowJobExeListNewRequestJobStateEnum | string | undefined {
        return this['job_state'];
    }
    public withJobResult(jobResult: ShowJobExeListNewRequestJobResultEnum | string): ShowJobExeListNewRequest {
        this['job_result'] = jobResult;
        return this;
    }
    public set jobResult(jobResult: ShowJobExeListNewRequestJobResultEnum | string  | undefined) {
        this['job_result'] = jobResult;
    }
    public get jobResult(): ShowJobExeListNewRequestJobResultEnum | string | undefined {
        return this['job_result'];
    }
    public withQueue(queue: string): ShowJobExeListNewRequest {
        this['queue'] = queue;
        return this;
    }
    public withLimit(limit: string): ShowJobExeListNewRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ShowJobExeListNewRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortBy(sortBy: string): ShowJobExeListNewRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withSubmittedTimeBegin(submittedTimeBegin: number): ShowJobExeListNewRequest {
        this['submitted_time_begin'] = submittedTimeBegin;
        return this;
    }
    public set submittedTimeBegin(submittedTimeBegin: number  | undefined) {
        this['submitted_time_begin'] = submittedTimeBegin;
    }
    public get submittedTimeBegin(): number | undefined {
        return this['submitted_time_begin'];
    }
    public withSubmittedTimeEnd(submittedTimeEnd: number): ShowJobExeListNewRequest {
        this['submitted_time_end'] = submittedTimeEnd;
        return this;
    }
    public set submittedTimeEnd(submittedTimeEnd: number  | undefined) {
        this['submitted_time_end'] = submittedTimeEnd;
    }
    public get submittedTimeEnd(): number | undefined {
        return this['submitted_time_end'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowJobExeListNewRequestJobStateEnum {
    FAILED = 'FAILED',
    KILLED = 'KILLED',
    NEW = 'NEW',
    NEW_SAVING = 'NEW_SAVING',
    SUBMITTED = 'SUBMITTED',
    ACCEPTED = 'ACCEPTED',
    RUNNING = 'RUNNING',
    FINISHED = 'FINISHED'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowJobExeListNewRequestJobResultEnum {
    FAILED = 'FAILED',
    KILLED = 'KILLED',
    UNDEFINED = 'UNDEFINED',
    SUCCEEDED = 'SUCCEEDED'
}
