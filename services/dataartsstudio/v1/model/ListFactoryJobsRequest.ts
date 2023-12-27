

export class ListFactoryJobsRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    private 'job_type'?: ListFactoryJobsRequestJobTypeEnum | string;
    private 'job_name'?: string;
    public tags?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListFactoryJobsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListFactoryJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListFactoryJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withJobType(jobType: ListFactoryJobsRequestJobTypeEnum | string): ListFactoryJobsRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ListFactoryJobsRequestJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): ListFactoryJobsRequestJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withJobName(jobName: string): ListFactoryJobsRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withTags(tags: string): ListFactoryJobsRequest {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFactoryJobsRequestJobTypeEnum {
    REAL_TIME = 'REAL_TIME',
    BATCH = 'BATCH'
}
