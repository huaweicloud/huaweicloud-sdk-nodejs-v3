import { JobBatchDelete } from './JobBatchDelete';


export class BatchDeleteJobsRequest {
    private 'cluster_id'?: string;
    public body?: JobBatchDelete;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): BatchDeleteJobsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: JobBatchDelete): BatchDeleteJobsRequest {
        this['body'] = body;
        return this;
    }
}