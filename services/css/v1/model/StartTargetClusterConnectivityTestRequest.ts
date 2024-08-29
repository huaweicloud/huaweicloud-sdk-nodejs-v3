import { StartTargetClusterConnectivityTestReq } from './StartTargetClusterConnectivityTestReq';


export class StartTargetClusterConnectivityTestRequest {
    private 'cluster_id'?: string;
    public body?: StartTargetClusterConnectivityTestReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): StartTargetClusterConnectivityTestRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: StartTargetClusterConnectivityTestReq): StartTargetClusterConnectivityTestRequest {
        this['body'] = body;
        return this;
    }
}