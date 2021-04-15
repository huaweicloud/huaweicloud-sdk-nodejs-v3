import { NodePool } from './NodePool';


export class CreateNodePoolRequest {
    private 'Content-Type': string | undefined;
    private 'cluster_id': string | undefined;
    public body?: NodePool;
    public constructor(contentType?: any, clusterId?: any) { 
        this['Content-Type'] = contentType;
        this['cluster_id'] = clusterId;
    }
    public withContentType(contentType: string): CreateNodePoolRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withClusterId(clusterId: string): CreateNodePoolRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: NodePool): CreateNodePoolRequest {
        this['body'] = body;
        return this;
    }
}