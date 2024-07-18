import { PostcheckClusterRequestBody } from './PostcheckClusterRequestBody';


export class CreateAutopilotPostCheckRequest {
    private 'cluster_id'?: string;
    public body?: PostcheckClusterRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateAutopilotPostCheckRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: PostcheckClusterRequestBody): CreateAutopilotPostCheckRequest {
        this['body'] = body;
        return this;
    }
}