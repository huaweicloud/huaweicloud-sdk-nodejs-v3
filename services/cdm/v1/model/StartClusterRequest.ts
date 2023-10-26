import { CdmStartClusterReq } from './CdmStartClusterReq';


export class StartClusterRequest {
    private 'cluster_id'?: string;
    public body?: CdmStartClusterReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): StartClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: CdmStartClusterReq): StartClusterRequest {
        this['body'] = body;
        return this;
    }
}