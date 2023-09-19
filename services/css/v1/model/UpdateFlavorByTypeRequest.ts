import { UpdateFlavorByTypeReq } from './UpdateFlavorByTypeReq';


export class UpdateFlavorByTypeRequest {
    private 'cluster_id'?: string;
    public types?: string;
    public body?: UpdateFlavorByTypeReq;
    public constructor(clusterId?: string, types?: string) { 
        this['cluster_id'] = clusterId;
        this['types'] = types;
    }
    public withClusterId(clusterId: string): UpdateFlavorByTypeRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withTypes(types: string): UpdateFlavorByTypeRequest {
        this['types'] = types;
        return this;
    }
    public withBody(body: UpdateFlavorByTypeReq): UpdateFlavorByTypeRequest {
        this['body'] = body;
        return this;
    }
}