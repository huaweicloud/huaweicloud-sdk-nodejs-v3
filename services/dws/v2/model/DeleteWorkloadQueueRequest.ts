

export class DeleteWorkloadQueueRequest {
    private 'cluster_id': string | undefined;
    private 'logical_cluster_name'?: string | undefined;
    private 'workload_queue_name': string | undefined;
    public constructor(clusterId?: any, workloadQueueName?: any) { 
        this['cluster_id'] = clusterId;
        this['workload_queue_name'] = workloadQueueName;
    }
    public withClusterId(clusterId: string): DeleteWorkloadQueueRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withLogicalClusterName(logicalClusterName: string): DeleteWorkloadQueueRequest {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName() {
        return this['logical_cluster_name'];
    }
    public withWorkloadQueueName(workloadQueueName: string): DeleteWorkloadQueueRequest {
        this['workload_queue_name'] = workloadQueueName;
        return this;
    }
    public set workloadQueueName(workloadQueueName: string | undefined) {
        this['workload_queue_name'] = workloadQueueName;
    }
    public get workloadQueueName() {
        return this['workload_queue_name'];
    }
}