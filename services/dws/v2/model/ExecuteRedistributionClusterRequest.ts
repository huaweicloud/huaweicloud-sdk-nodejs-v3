import { RedistributionReq } from './RedistributionReq';


export class ExecuteRedistributionClusterRequest {
    private 'cluster_id': string | undefined;
    public body?: RedistributionReq;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ExecuteRedistributionClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: RedistributionReq): ExecuteRedistributionClusterRequest {
        this['body'] = body;
        return this;
    }
}