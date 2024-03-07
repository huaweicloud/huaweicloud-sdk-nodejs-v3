

export class ShowWorkloadQueueRequest {
    private 'cluster_id'?: string;
    private 'queue_name'?: string;
    private 'logical_cluster_name'?: string;
    public constructor(clusterId?: string, queueName?: string) { 
        this['cluster_id'] = clusterId;
        this['queue_name'] = queueName;
    }
    public withClusterId(clusterId: string): ShowWorkloadQueueRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withQueueName(queueName: string): ShowWorkloadQueueRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withLogicalClusterName(logicalClusterName: string): ShowWorkloadQueueRequest {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
}