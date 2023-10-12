import { StopHotPipelineRequestBody } from './StopHotPipelineRequestBody';


export class StopHotPipelineRequest {
    private 'cluster_id'?: string;
    public body?: StopHotPipelineRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): StopHotPipelineRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: StopHotPipelineRequestBody): StopHotPipelineRequest {
        this['body'] = body;
        return this;
    }
}