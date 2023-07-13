

export class ShowHistoryTaskDetailsRequest {
    private 'enterprise_project_id'?: string | undefined;
    private 'history_tasks_id': string | undefined;
    private 'page_size'?: number | undefined;
    private 'page_number'?: number | undefined;
    public status?: string;
    public url?: string;
    private 'create_time'?: number | undefined;
    public constructor(historyTasksId?: any) { 
        this['history_tasks_id'] = historyTasksId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowHistoryTaskDetailsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withHistoryTasksId(historyTasksId: string): ShowHistoryTaskDetailsRequest {
        this['history_tasks_id'] = historyTasksId;
        return this;
    }
    public set historyTasksId(historyTasksId: string | undefined) {
        this['history_tasks_id'] = historyTasksId;
    }
    public get historyTasksId() {
        return this['history_tasks_id'];
    }
    public withPageSize(pageSize: number): ShowHistoryTaskDetailsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize() {
        return this['page_size'];
    }
    public withPageNumber(pageNumber: number): ShowHistoryTaskDetailsRequest {
        this['page_number'] = pageNumber;
        return this;
    }
    public set pageNumber(pageNumber: number | undefined) {
        this['page_number'] = pageNumber;
    }
    public get pageNumber() {
        return this['page_number'];
    }
    public withStatus(status: string): ShowHistoryTaskDetailsRequest {
        this['status'] = status;
        return this;
    }
    public withUrl(url: string): ShowHistoryTaskDetailsRequest {
        this['url'] = url;
        return this;
    }
    public withCreateTime(createTime: number): ShowHistoryTaskDetailsRequest {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
}