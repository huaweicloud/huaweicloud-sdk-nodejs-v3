import { EncryptClusterReq } from './EncryptClusterReq';


export class EncryptClusterRequest {
    private 'cluster_id'?: string;
    public body?: EncryptClusterReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): EncryptClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: EncryptClusterReq): EncryptClusterRequest {
        this['body'] = body;
        return this;
    }
}