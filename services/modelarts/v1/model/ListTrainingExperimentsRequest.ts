

export class ListTrainingExperimentsRequest {
    private 'workspace_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'sort_by'?: string;
    public order?: ListTrainingExperimentsRequestOrderEnum | string;
    public constructor() { 
    }
    public withWorkspaceId(workspaceId: string): ListTrainingExperimentsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withLimit(limit: number): ListTrainingExperimentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTrainingExperimentsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortBy(sortBy: string): ListTrainingExperimentsRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withOrder(order: ListTrainingExperimentsRequestOrderEnum | string): ListTrainingExperimentsRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTrainingExperimentsRequestOrderEnum {
    DESC = 'desc',
    ASC = 'asc'
}
