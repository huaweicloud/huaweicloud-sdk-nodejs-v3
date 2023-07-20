import { RedistributionReq } from './RedistributionReq';


export class ExecuteRedistributionClusterRequest {
    private 'cluster_id'?: string;
    public body?: RedistributionReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ExecuteRedistributionClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: RedistributionReq): ExecuteRedistributionClusterRequest {
        this['body'] = body;
        return this;
    }
}