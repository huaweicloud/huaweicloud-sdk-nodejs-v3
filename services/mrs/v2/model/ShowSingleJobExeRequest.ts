

export class ShowSingleJobExeRequest {
    private 'job_execution_id': string | undefined;
    private 'cluster_id': string | undefined;
    public constructor(jobExecutionId?: any, clusterId?: any) { 
        this['job_execution_id'] = jobExecutionId;
        this['cluster_id'] = clusterId;
    }
    public withJobExecutionId(jobExecutionId: string): ShowSingleJobExeRequest {
        this['job_execution_id'] = jobExecutionId;
        return this;
    }
    public set jobExecutionId(jobExecutionId: string | undefined) {
        this['job_execution_id'] = jobExecutionId;
    }
    public get jobExecutionId() {
        return this['job_execution_id'];
    }
    public withClusterId(clusterId: string): ShowSingleJobExeRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
}