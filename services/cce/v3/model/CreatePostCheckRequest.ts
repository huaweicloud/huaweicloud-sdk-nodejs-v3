import { PostcheckClusterRequestBody } from './PostcheckClusterRequestBody';


export class CreatePostCheckRequest {
    private 'cluster_id'?: string;
    public body?: PostcheckClusterRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreatePostCheckRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: PostcheckClusterRequestBody): CreatePostCheckRequest {
        this['body'] = body;
        return this;
    }
}