import { UpdateRouteRequestBody } from './UpdateRouteRequestBody';


export class UpdateRouteRequest {
    private 'cluster_id'?: string;
    public body?: UpdateRouteRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateRouteRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: UpdateRouteRequestBody): UpdateRouteRequest {
        this['body'] = body;
        return this;
    }
}