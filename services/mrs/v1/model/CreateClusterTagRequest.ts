import { CreateTagReq } from './CreateTagReq';


export class CreateClusterTagRequest {
    private 'cluster_id': string | undefined;
    public body?: CreateTagReq;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateClusterTagRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: CreateTagReq): CreateClusterTagRequest {
        this['body'] = body;
        return this;
    }
}