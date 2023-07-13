import { JobExecution } from './JobExecution';


export class CreateExecuteJobRequest {
    private 'cluster_id': string | undefined;
    public body?: JobExecution;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateExecuteJobRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: JobExecution): CreateExecuteJobRequest {
        this['body'] = body;
        return this;
    }
}