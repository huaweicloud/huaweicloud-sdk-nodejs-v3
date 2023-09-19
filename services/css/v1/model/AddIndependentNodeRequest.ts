import { IndependentReq } from './IndependentReq';


export class AddIndependentNodeRequest {
    private 'cluster_id'?: string;
    public type?: string;
    public body?: IndependentReq;
    public constructor(clusterId?: string, type?: string) { 
        this['cluster_id'] = clusterId;
        this['type'] = type;
    }
    public withClusterId(clusterId: string): AddIndependentNodeRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withType(type: string): AddIndependentNodeRequest {
        this['type'] = type;
        return this;
    }
    public withBody(body: IndependentReq): AddIndependentNodeRequest {
        this['body'] = body;
        return this;
    }
}