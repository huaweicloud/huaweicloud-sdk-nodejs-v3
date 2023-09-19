import { StartPipelineReq } from './StartPipelineReq';


export class StartPipelineRequest {
    private 'cluster_id'?: string;
    public body?: StartPipelineReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): StartPipelineRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: StartPipelineReq): StartPipelineRequest {
        this['body'] = body;
        return this;
    }
}