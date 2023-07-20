

export class ShowSqlResultWithJobRequest {
    private 'job_execution_id'?: string;
    private 'cluster_id'?: string;
    public constructor(jobExecutionId?: string, clusterId?: string) { 
        this['job_execution_id'] = jobExecutionId;
        this['cluster_id'] = clusterId;
    }
    public withJobExecutionId(jobExecutionId: string): ShowSqlResultWithJobRequest {
        this['job_execution_id'] = jobExecutionId;
        return this;
    }
    public set jobExecutionId(jobExecutionId: string  | undefined) {
        this['job_execution_id'] = jobExecutionId;
    }
    public get jobExecutionId(): string | undefined {
        return this['job_execution_id'];
    }
    public withClusterId(clusterId: string): ShowSqlResultWithJobRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}