import { CreateAiOpsRequestBody } from './CreateAiOpsRequestBody';


export class CreateAiOpsRequest {
    private 'cluster_id'?: string;
    public body?: CreateAiOpsRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateAiOpsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: CreateAiOpsRequestBody): CreateAiOpsRequest {
        this['body'] = body;
        return this;
    }
}