

export class ListVariablesRequest {
    private 'group_id'?: string;
    private 'page_no'?: string;
    private 'page_size'?: string;
    private 'project_id'?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withGroupId(groupId: string): ListVariablesRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withPageNo(pageNo: string): ListVariablesRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: string  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): string | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: string): ListVariablesRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: string  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): string | undefined {
        return this['page_size'];
    }
    public withProjectId(projectId: string): ListVariablesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}