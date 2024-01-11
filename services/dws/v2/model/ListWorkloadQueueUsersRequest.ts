

export class ListWorkloadQueueUsersRequest {
    private 'cluster_id'?: string;
    private 'queue_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(clusterId?: string, queueName?: string) { 
        this['cluster_id'] = clusterId;
        this['queue_name'] = queueName;
    }
    public withClusterId(clusterId: string): ListWorkloadQueueUsersRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withQueueName(queueName: string): ListWorkloadQueueUsersRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withLimit(limit: number): ListWorkloadQueueUsersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListWorkloadQueueUsersRequest {
        this['offset'] = offset;
        return this;
    }
}