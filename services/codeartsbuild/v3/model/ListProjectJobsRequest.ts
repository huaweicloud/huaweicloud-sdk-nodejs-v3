

export class ListProjectJobsRequest {
    private 'project_id'?: string;
    private 'page_index'?: number;
    private 'page_size'?: number;
    public search?: string;
    private 'sort_field'?: string;
    private 'sort_order'?: string;
    private 'creator_id'?: string;
    private 'build_status'?: string;
    private 'by_group'?: boolean;
    private 'group_path_id'?: string;
    public constructor(projectId?: string, pageIndex?: number, pageSize?: number) { 
        this['project_id'] = projectId;
        this['page_index'] = pageIndex;
        this['page_size'] = pageSize;
    }
    public withProjectId(projectId: string): ListProjectJobsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPageIndex(pageIndex: number): ListProjectJobsRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): number | undefined {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ListProjectJobsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withSearch(search: string): ListProjectJobsRequest {
        this['search'] = search;
        return this;
    }
    public withSortField(sortField: string): ListProjectJobsRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortOrder(sortOrder: string): ListProjectJobsRequest {
        this['sort_order'] = sortOrder;
        return this;
    }
    public set sortOrder(sortOrder: string  | undefined) {
        this['sort_order'] = sortOrder;
    }
    public get sortOrder(): string | undefined {
        return this['sort_order'];
    }
    public withCreatorId(creatorId: string): ListProjectJobsRequest {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withBuildStatus(buildStatus: string): ListProjectJobsRequest {
        this['build_status'] = buildStatus;
        return this;
    }
    public set buildStatus(buildStatus: string  | undefined) {
        this['build_status'] = buildStatus;
    }
    public get buildStatus(): string | undefined {
        return this['build_status'];
    }
    public withByGroup(byGroup: boolean): ListProjectJobsRequest {
        this['by_group'] = byGroup;
        return this;
    }
    public set byGroup(byGroup: boolean  | undefined) {
        this['by_group'] = byGroup;
    }
    public get byGroup(): boolean | undefined {
        return this['by_group'];
    }
    public withGroupPathId(groupPathId: string): ListProjectJobsRequest {
        this['group_path_id'] = groupPathId;
        return this;
    }
    public set groupPathId(groupPathId: string  | undefined) {
        this['group_path_id'] = groupPathId;
    }
    public get groupPathId(): string | undefined {
        return this['group_path_id'];
    }
}