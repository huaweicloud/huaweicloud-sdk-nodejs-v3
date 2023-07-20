

export class ListExecuteJobRequest {
    private 'page_size'?: string;
    private 'current_page'?: string;
    private 'job_name'?: string;
    private 'cluster_id'?: string;
    public state?: string;
    public id?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withPageSize(pageSize: string): ListExecuteJobRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: string  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): string | undefined {
        return this['page_size'];
    }
    public withCurrentPage(currentPage: string): ListExecuteJobRequest {
        this['current_page'] = currentPage;
        return this;
    }
    public set currentPage(currentPage: string  | undefined) {
        this['current_page'] = currentPage;
    }
    public get currentPage(): string | undefined {
        return this['current_page'];
    }
    public withJobName(jobName: string): ListExecuteJobRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withClusterId(clusterId: string): ListExecuteJobRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withState(state: string): ListExecuteJobRequest {
        this['state'] = state;
        return this;
    }
    public withId(id: string): ListExecuteJobRequest {
        this['id'] = id;
        return this;
    }
}