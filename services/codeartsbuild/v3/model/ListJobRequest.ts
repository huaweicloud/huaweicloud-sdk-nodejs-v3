

export class ListJobRequest {
    private 'page_index'?: number;
    private 'page_size'?: number;
    public search?: string;
    private 'sort_field'?: string;
    private 'sort_order'?: string;
    private 'creator_id'?: string;
    private 'build_status'?: string;
    public constructor() { 
    }
    public withPageIndex(pageIndex: number): ListJobRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): number | undefined {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ListJobRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withSearch(search: string): ListJobRequest {
        this['search'] = search;
        return this;
    }
    public withSortField(sortField: string): ListJobRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortOrder(sortOrder: string): ListJobRequest {
        this['sort_order'] = sortOrder;
        return this;
    }
    public set sortOrder(sortOrder: string  | undefined) {
        this['sort_order'] = sortOrder;
    }
    public get sortOrder(): string | undefined {
        return this['sort_order'];
    }
    public withCreatorId(creatorId: string): ListJobRequest {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withBuildStatus(buildStatus: string): ListJobRequest {
        this['build_status'] = buildStatus;
        return this;
    }
    public set buildStatus(buildStatus: string  | undefined) {
        this['build_status'] = buildStatus;
    }
    public get buildStatus(): string | undefined {
        return this['build_status'];
    }
}