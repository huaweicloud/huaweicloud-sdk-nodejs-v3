import { ClusterTimezoneReq } from './ClusterTimezoneReq';


export class ModifyClusterTimezoneRequest {
    private 'cluster_id'?: string;
    public body?: ClusterTimezoneReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ModifyClusterTimezoneRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ClusterTimezoneReq): ModifyClusterTimezoneRequest {
        this['body'] = body;
        return this;
    }
}