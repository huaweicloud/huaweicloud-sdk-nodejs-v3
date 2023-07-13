

export class ShowJobListByProjectIdRequest {
    private 'project_id': string | undefined;
    private 'page_index': number | undefined;
    private 'page_size': number | undefined;
    public constructor(projectId?: any, pageIndex?: any, pageSize?: any) { 
        this['project_id'] = projectId;
        this['page_index'] = pageIndex;
        this['page_size'] = pageSize;
    }
    public withProjectId(projectId: string): ShowJobListByProjectIdRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withPageIndex(pageIndex: number): ShowJobListByProjectIdRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex() {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ShowJobListByProjectIdRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize() {
        return this['page_size'];
    }
}