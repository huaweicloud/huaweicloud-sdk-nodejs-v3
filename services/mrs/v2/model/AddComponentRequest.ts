import { AddComponentsReq } from './AddComponentsReq';


export class AddComponentRequest {
    private 'cluster_id'?: string;
    public body?: AddComponentsReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): AddComponentRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: AddComponentsReq): AddComponentRequest {
        this['body'] = body;
        return this;
    }
}