

export class ListAlgorithmsRequest {
    public offset?: number;
    public limit?: number;
    private 'sort_by'?: string;
    public order?: string;
    private 'group_by'?: string;
    public searches?: string;
    private 'workspace_id'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListAlgorithmsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlgorithmsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortBy(sortBy: string): ListAlgorithmsRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withOrder(order: string): ListAlgorithmsRequest {
        this['order'] = order;
        return this;
    }
    public withGroupBy(groupBy: string): ListAlgorithmsRequest {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): string | undefined {
        return this['group_by'];
    }
    public withSearches(searches: string): ListAlgorithmsRequest {
        this['searches'] = searches;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListAlgorithmsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}