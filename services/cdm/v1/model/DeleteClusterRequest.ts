import { CdmDeleteClusterReq } from './CdmDeleteClusterReq';


export class DeleteClusterRequest {
    private 'cluster_id'?: string;
    public body?: CdmDeleteClusterReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): DeleteClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: CdmDeleteClusterReq): DeleteClusterRequest {
        this['body'] = body;
        return this;
    }
}