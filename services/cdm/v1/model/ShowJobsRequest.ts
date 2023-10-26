

export class ShowJobsRequest {
    private 'cluster_id'?: string;
    private 'job_name'?: string;
    public filter?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public jobType?: ShowJobsRequestJobTypeEnum | string;
    public constructor(clusterId?: string, jobName?: string) { 
        this['cluster_id'] = clusterId;
        this['job_name'] = jobName;
    }
    public withClusterId(clusterId: string): ShowJobsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withJobName(jobName: string): ShowJobsRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withFilter(filter: string): ShowJobsRequest {
        this['filter'] = filter;
        return this;
    }
    public withPageNo(pageNo: number): ShowJobsRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ShowJobsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withJobType(jobType: ShowJobsRequestJobTypeEnum | string): ShowJobsRequest {
        this['jobType'] = jobType;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowJobsRequestJobTypeEnum {
    NORMAL_JOB = 'NORMAL_JOB',
    BATCH_JOB = 'BATCH_JOB',
    SCENARIO_JOB = 'SCENARIO_JOB'
}
