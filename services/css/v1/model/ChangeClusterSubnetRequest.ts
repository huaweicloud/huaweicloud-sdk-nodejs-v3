import { ClusterChangeMainSubnet } from './ClusterChangeMainSubnet';


export class ChangeClusterSubnetRequest {
    private 'cluster_id'?: string;
    public body?: ClusterChangeMainSubnet;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ChangeClusterSubnetRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ClusterChangeMainSubnet): ChangeClusterSubnetRequest {
        this['body'] = body;
        return this;
    }
}