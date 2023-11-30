import { PartitionReqBody } from './PartitionReqBody';


export class UpdatePartitionRequest {
    private 'cluster_id'?: string;
    private 'partition_name'?: string;
    public body?: PartitionReqBody;
    public constructor(clusterId?: string, partitionName?: string) { 
        this['cluster_id'] = clusterId;
        this['partition_name'] = partitionName;
    }
    public withClusterId(clusterId: string): UpdatePartitionRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withPartitionName(partitionName: string): UpdatePartitionRequest {
        this['partition_name'] = partitionName;
        return this;
    }
    public set partitionName(partitionName: string  | undefined) {
        this['partition_name'] = partitionName;
    }
    public get partitionName(): string | undefined {
        return this['partition_name'];
    }
    public withBody(body: PartitionReqBody): UpdatePartitionRequest {
        this['body'] = body;
        return this;
    }
}