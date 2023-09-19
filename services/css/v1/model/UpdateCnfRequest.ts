import { CreateCnfReq } from './CreateCnfReq';


export class UpdateCnfRequest {
    private 'cluster_id'?: string;
    public body?: CreateCnfReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateCnfRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: CreateCnfReq): UpdateCnfRequest {
        this['body'] = body;
        return this;
    }
}