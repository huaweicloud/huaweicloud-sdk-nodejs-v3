

export class ListProjectProtectedBranchesRequest {
    private 'project_id'?: string;
    public offset?: number;
    public limit?: number;
    public search?: string;
    private 'user_actions'?: boolean;
    public view?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListProjectProtectedBranchesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOffset(offset: number): ListProjectProtectedBranchesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProjectProtectedBranchesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearch(search: string): ListProjectProtectedBranchesRequest {
        this['search'] = search;
        return this;
    }
    public withUserActions(userActions: boolean): ListProjectProtectedBranchesRequest {
        this['user_actions'] = userActions;
        return this;
    }
    public set userActions(userActions: boolean  | undefined) {
        this['user_actions'] = userActions;
    }
    public get userActions(): boolean | undefined {
        return this['user_actions'];
    }
    public withView(view: string): ListProjectProtectedBranchesRequest {
        this['view'] = view;
        return this;
    }
}