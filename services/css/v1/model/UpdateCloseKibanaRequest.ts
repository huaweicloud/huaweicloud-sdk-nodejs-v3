import { CloseKibanaPublicReq } from './CloseKibanaPublicReq';


export class UpdateCloseKibanaRequest {
    private 'cluster_id'?: string;
    public body?: CloseKibanaPublicReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateCloseKibanaRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: CloseKibanaPublicReq): UpdateCloseKibanaRequest {
        this['body'] = body;
        return this;
    }
}