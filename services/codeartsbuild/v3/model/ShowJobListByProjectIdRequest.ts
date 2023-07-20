

export class ShowJobListByProjectIdRequest {
    private 'project_id'?: string;
    private 'page_index'?: number;
    private 'page_size'?: number;
    public constructor(projectId?: string, pageIndex?: number, pageSize?: number) { 
        this['project_id'] = projectId;
        this['page_index'] = pageIndex;
        this['page_size'] = pageSize;
    }
    public withProjectId(projectId: string): ShowJobListByProjectIdRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPageIndex(pageIndex: number): ShowJobListByProjectIdRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): number | undefined {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ShowJobListByProjectIdRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}