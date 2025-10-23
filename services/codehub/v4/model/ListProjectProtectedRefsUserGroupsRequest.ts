

export class ListProjectProtectedRefsUserGroupsRequest {
    private 'project_id'?: string;
    public offset?: number;
    public limit?: number;
    public search?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListProjectProtectedRefsUserGroupsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOffset(offset: number): ListProjectProtectedRefsUserGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProjectProtectedRefsUserGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearch(search: string): ListProjectProtectedRefsUserGroupsRequest {
        this['search'] = search;
        return this;
    }
}