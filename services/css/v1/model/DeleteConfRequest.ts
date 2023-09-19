import { DeleteConfReq } from './DeleteConfReq';


export class DeleteConfRequest {
    private 'cluster_id'?: string;
    public body?: DeleteConfReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): DeleteConfRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: DeleteConfReq): DeleteConfRequest {
        this['body'] = body;
        return this;
    }
}