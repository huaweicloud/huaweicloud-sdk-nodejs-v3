

export class ListWorkspaceRequest {
    public offset?: number;
    public limit?: number;
    private 'sort_by'?: ListWorkspaceRequestSortByEnum | string;
    public order?: ListWorkspaceRequestOrderEnum | string;
    private 'enterprise_project_id'?: string;
    public name?: string;
    private 'filter_accessible'?: boolean;
    public constructor() { 
    }
    public withOffset(offset: number): ListWorkspaceRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWorkspaceRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortBy(sortBy: ListWorkspaceRequestSortByEnum | string): ListWorkspaceRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: ListWorkspaceRequestSortByEnum | string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): ListWorkspaceRequestSortByEnum | string | undefined {
        return this['sort_by'];
    }
    public withOrder(order: ListWorkspaceRequestOrderEnum | string): ListWorkspaceRequest {
        this['order'] = order;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWorkspaceRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withName(name: string): ListWorkspaceRequest {
        this['name'] = name;
        return this;
    }
    public withFilterAccessible(filterAccessible: boolean): ListWorkspaceRequest {
        this['filter_accessible'] = filterAccessible;
        return this;
    }
    public set filterAccessible(filterAccessible: boolean  | undefined) {
        this['filter_accessible'] = filterAccessible;
    }
    public get filterAccessible(): boolean | undefined {
        return this['filter_accessible'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListWorkspaceRequestSortByEnum {
    NAME = 'name',
    UPDATE_TIME = 'update_time',
    STATUS = 'status'
}
/**
    * @export
    * @enum {string}
    */
export enum ListWorkspaceRequestOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
