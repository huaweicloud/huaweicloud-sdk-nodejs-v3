

export class ListBatchesRequest {
    private 'cluster_name'?: string;
    public end?: number;
    public from?: number;
    private 'job-id'?: string;
    public order?: string;
    private 'queue_name'?: string;
    public size?: number;
    public start?: number;
    public state?: string;
    public constructor() { 
    }
    public withClusterName(clusterName: string): ListBatchesRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withEnd(end: number): ListBatchesRequest {
        this['end'] = end;
        return this;
    }
    public withFrom(from: number): ListBatchesRequest {
        this['from'] = from;
        return this;
    }
    public withJobId(jobId: string): ListBatchesRequest {
        this['job-id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job-id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job-id'];
    }
    public withOrder(order: string): ListBatchesRequest {
        this['order'] = order;
        return this;
    }
    public withQueueName(queueName: string): ListBatchesRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withSize(size: number): ListBatchesRequest {
        this['size'] = size;
        return this;
    }
    public withStart(start: number): ListBatchesRequest {
        this['start'] = start;
        return this;
    }
    public withState(state: string): ListBatchesRequest {
        this['state'] = state;
        return this;
    }
}