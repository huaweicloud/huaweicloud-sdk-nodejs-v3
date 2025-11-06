

export class ListProductPermissionResourcesGrantedUsersRequest {
    private 'project_id'?: string;
    public query?: string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListProductPermissionResourcesGrantedUsersRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withQuery(query: string): ListProductPermissionResourcesGrantedUsersRequest {
        this['query'] = query;
        return this;
    }
    public withOffset(offset: number): ListProductPermissionResourcesGrantedUsersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProductPermissionResourcesGrantedUsersRequest {
        this['limit'] = limit;
        return this;
    }
}