

export class ListSparkJobsRequest {
    private 'cluster_name'?: string;
    public end?: number;
    public from?: number;
    private 'job_name'?: string;
    private 'job-id'?: string;
    public order?: string;
    private 'queue_name'?: string;
    public size?: number;
    public start?: number;
    public state?: ListSparkJobsRequestStateEnum | string;
    public constructor() { 
    }
    public withClusterName(clusterName: string): ListSparkJobsRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withEnd(end: number): ListSparkJobsRequest {
        this['end'] = end;
        return this;
    }
    public withFrom(from: number): ListSparkJobsRequest {
        this['from'] = from;
        return this;
    }
    public withJobName(jobName: string): ListSparkJobsRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobId(jobId: string): ListSparkJobsRequest {
        this['job-id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job-id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job-id'];
    }
    public withOrder(order: string): ListSparkJobsRequest {
        this['order'] = order;
        return this;
    }
    public withQueueName(queueName: string): ListSparkJobsRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withSize(size: number): ListSparkJobsRequest {
        this['size'] = size;
        return this;
    }
    public withStart(start: number): ListSparkJobsRequest {
        this['start'] = start;
        return this;
    }
    public withState(state: ListSparkJobsRequestStateEnum | string): ListSparkJobsRequest {
        this['state'] = state;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSparkJobsRequestStateEnum {
    STARTING = 'starting',
    RUNNING = 'running',
    DEAD = 'dead',
    SUCCESS = 'success',
    RECOVERING = 'recovering'
}
