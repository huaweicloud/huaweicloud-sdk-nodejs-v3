

export class ListExecuteJobRequest {
    private 'page_size'?: string | undefined;
    private 'current_page'?: string | undefined;
    private 'job_name'?: string | undefined;
    private 'cluster_id': string | undefined;
    public state?: string;
    public id?: string;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withPageSize(pageSize: string): ListExecuteJobRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: string | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize() {
        return this['page_size'];
    }
    public withCurrentPage(currentPage: string): ListExecuteJobRequest {
        this['current_page'] = currentPage;
        return this;
    }
    public set currentPage(currentPage: string | undefined) {
        this['current_page'] = currentPage;
    }
    public get currentPage() {
        return this['current_page'];
    }
    public withJobName(jobName: string): ListExecuteJobRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName() {
        return this['job_name'];
    }
    public withClusterId(clusterId: string): ListExecuteJobRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
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