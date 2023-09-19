import { UpdateFlavorReq } from './UpdateFlavorReq';


export class UpdateFlavorRequest {
    private 'cluster_id'?: string;
    public body?: UpdateFlavorReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateFlavorRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: UpdateFlavorReq): UpdateFlavorRequest {
        this['body'] = body;
        return this;
    }
}