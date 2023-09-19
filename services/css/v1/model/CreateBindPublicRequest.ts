import { BindPublicReq } from './BindPublicReq';


export class CreateBindPublicRequest {
    private 'cluster_id'?: string;
    public body?: BindPublicReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateBindPublicRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: BindPublicReq): CreateBindPublicRequest {
        this['body'] = body;
        return this;
    }
}