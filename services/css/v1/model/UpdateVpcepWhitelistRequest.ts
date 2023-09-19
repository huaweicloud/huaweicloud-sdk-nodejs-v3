import { UpdateVpcepWhitelistReq } from './UpdateVpcepWhitelistReq';


export class UpdateVpcepWhitelistRequest {
    private 'cluster_id'?: string;
    public body?: UpdateVpcepWhitelistReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateVpcepWhitelistRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: UpdateVpcepWhitelistReq): UpdateVpcepWhitelistRequest {
        this['body'] = body;
        return this;
    }
}