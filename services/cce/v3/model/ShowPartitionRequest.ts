

export class ShowPartitionRequest {
    private 'cluster_id'?: string;
    private 'partition_name'?: string;
    public constructor(clusterId?: string, partitionName?: string) { 
        this['cluster_id'] = clusterId;
        this['partition_name'] = partitionName;
    }
    public withClusterId(clusterId: string): ShowPartitionRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withPartitionName(partitionName: string): ShowPartitionRequest {
        this['partition_name'] = partitionName;
        return this;
    }
    public set partitionName(partitionName: string  | undefined) {
        this['partition_name'] = partitionName;
    }
    public get partitionName(): string | undefined {
        return this['partition_name'];
    }
}