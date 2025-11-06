import { StartHotPipelineRequestBody } from './StartHotPipelineRequestBody';


export class StartHotPipelineRequest {
    private 'cluster_id'?: string;
    public body?: StartHotPipelineRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): StartHotPipelineRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: StartHotPipelineRequestBody): StartHotPipelineRequest {
        this['body'] = body;
        return this;
    }
}