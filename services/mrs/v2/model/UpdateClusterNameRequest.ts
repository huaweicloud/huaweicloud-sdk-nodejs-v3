import { UpdateClusterReq } from './UpdateClusterReq';


export class UpdateClusterNameRequest {
    private 'cluster_id': string | undefined;
    public body?: UpdateClusterReq;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateClusterNameRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: UpdateClusterReq): UpdateClusterNameRequest {
        this['body'] = body;
        return this;
    }
}