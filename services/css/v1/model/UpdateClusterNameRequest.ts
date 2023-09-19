import { UpdateClusterNameReq } from './UpdateClusterNameReq';


export class UpdateClusterNameRequest {
    private 'cluster_id'?: string;
    public body?: UpdateClusterNameReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateClusterNameRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: UpdateClusterNameReq): UpdateClusterNameRequest {
        this['body'] = body;
        return this;
    }
}