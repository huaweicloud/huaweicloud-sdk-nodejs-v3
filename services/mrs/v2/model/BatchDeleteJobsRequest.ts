import { JobBatchDelete } from './JobBatchDelete';


export class BatchDeleteJobsRequest {
    private 'cluster_id': string | undefined;
    public body?: JobBatchDelete;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): BatchDeleteJobsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: JobBatchDelete): BatchDeleteJobsRequest {
        this['body'] = body;
        return this;
    }
}