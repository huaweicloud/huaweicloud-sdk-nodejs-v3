

export class ListBranchesRequest {
    private 'project_id'?: string;
    private 'sort_field'?: ListBranchesRequestSortFieldEnum | string;
    private 'sort_type'?: ListBranchesRequestSortTypeEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string, offset?: number, limit?: number) { 
        this['project_id'] = projectId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withProjectId(projectId: string): ListBranchesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSortField(sortField: ListBranchesRequestSortFieldEnum | string): ListBranchesRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: ListBranchesRequestSortFieldEnum | string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): ListBranchesRequestSortFieldEnum | string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: ListBranchesRequestSortTypeEnum | string): ListBranchesRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: ListBranchesRequestSortTypeEnum | string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): ListBranchesRequestSortTypeEnum | string | undefined {
        return this['sort_type'];
    }
    public withOffset(offset: number): ListBranchesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBranchesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListBranchesRequestSortFieldEnum {
    NAME = 'name',
    CREATIONDATE = 'creationDate'
}
/**
    * @export
    * @enum {string}
    */
export enum ListBranchesRequestSortTypeEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
