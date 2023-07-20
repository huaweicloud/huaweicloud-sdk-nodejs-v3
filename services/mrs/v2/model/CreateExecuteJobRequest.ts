import { JobExecution } from './JobExecution';


export class CreateExecuteJobRequest {
    private 'cluster_id'?: string;
    public body?: JobExecution;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateExecuteJobRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: JobExecution): CreateExecuteJobRequest {
        this['body'] = body;
        return this;
    }
}