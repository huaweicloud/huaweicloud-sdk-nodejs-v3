

export class ShowTasksListRequest {
    public page?: number;
    private 'page_size'?: number;
    public search?: string;
    private 'project_id'?: string;
    private 'review_result_types'?: string;
    private 'job_status_types'?: string;
    private 'order_by_execute_time'?: string;
    private 'task_classification_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_field'?: string;
    private 'sort_order'?: string;
    public operator?: string;
    private 'repo_url'?: string;
    public branch?: string;
    private 'repo_url_full_match'?: string;
    public constructor() { 
    }
    public withPage(page: number): ShowTasksListRequest {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: number): ShowTasksListRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withSearch(search: string): ShowTasksListRequest {
        this['search'] = search;
        return this;
    }
    public withProjectId(projectId: string): ShowTasksListRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withReviewResultTypes(reviewResultTypes: string): ShowTasksListRequest {
        this['review_result_types'] = reviewResultTypes;
        return this;
    }
    public set reviewResultTypes(reviewResultTypes: string  | undefined) {
        this['review_result_types'] = reviewResultTypes;
    }
    public get reviewResultTypes(): string | undefined {
        return this['review_result_types'];
    }
    public withJobStatusTypes(jobStatusTypes: string): ShowTasksListRequest {
        this['job_status_types'] = jobStatusTypes;
        return this;
    }
    public set jobStatusTypes(jobStatusTypes: string  | undefined) {
        this['job_status_types'] = jobStatusTypes;
    }
    public get jobStatusTypes(): string | undefined {
        return this['job_status_types'];
    }
    public withOrderByExecuteTime(orderByExecuteTime: string): ShowTasksListRequest {
        this['order_by_execute_time'] = orderByExecuteTime;
        return this;
    }
    public set orderByExecuteTime(orderByExecuteTime: string  | undefined) {
        this['order_by_execute_time'] = orderByExecuteTime;
    }
    public get orderByExecuteTime(): string | undefined {
        return this['order_by_execute_time'];
    }
    public withTaskClassificationId(taskClassificationId: string): ShowTasksListRequest {
        this['task_classification_id'] = taskClassificationId;
        return this;
    }
    public set taskClassificationId(taskClassificationId: string  | undefined) {
        this['task_classification_id'] = taskClassificationId;
    }
    public get taskClassificationId(): string | undefined {
        return this['task_classification_id'];
    }
    public withOffset(offset: number): ShowTasksListRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowTasksListRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortField(sortField: string): ShowTasksListRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortOrder(sortOrder: string): ShowTasksListRequest {
        this['sort_order'] = sortOrder;
        return this;
    }
    public set sortOrder(sortOrder: string  | undefined) {
        this['sort_order'] = sortOrder;
    }
    public get sortOrder(): string | undefined {
        return this['sort_order'];
    }
    public withOperator(operator: string): ShowTasksListRequest {
        this['operator'] = operator;
        return this;
    }
    public withRepoUrl(repoUrl: string): ShowTasksListRequest {
        this['repo_url'] = repoUrl;
        return this;
    }
    public set repoUrl(repoUrl: string  | undefined) {
        this['repo_url'] = repoUrl;
    }
    public get repoUrl(): string | undefined {
        return this['repo_url'];
    }
    public withBranch(branch: string): ShowTasksListRequest {
        this['branch'] = branch;
        return this;
    }
    public withRepoUrlFullMatch(repoUrlFullMatch: string): ShowTasksListRequest {
        this['repo_url_full_match'] = repoUrlFullMatch;
        return this;
    }
    public set repoUrlFullMatch(repoUrlFullMatch: string  | undefined) {
        this['repo_url_full_match'] = repoUrlFullMatch;
    }
    public get repoUrlFullMatch(): string | undefined {
        return this['repo_url_full_match'];
    }
}