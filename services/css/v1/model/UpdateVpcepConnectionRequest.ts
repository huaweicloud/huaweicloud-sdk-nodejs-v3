import { UpdateVpcepConnectionReq } from './UpdateVpcepConnectionReq';


export class UpdateVpcepConnectionRequest {
    private 'cluster_id'?: string;
    public body?: UpdateVpcepConnectionReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateVpcepConnectionRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: UpdateVpcepConnectionReq): UpdateVpcepConnectionRequest {
        this['body'] = body;
        return this;
    }
}