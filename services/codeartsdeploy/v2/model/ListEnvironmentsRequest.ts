

export class ListEnvironmentsRequest {
    private 'application_id'?: string;
    private 'project_id'?: string;
    private 'page_index'?: number;
    private 'page_size'?: number;
    public name?: string;
    private 'sort_key'?: ListEnvironmentsRequestSortKeyEnum | string;
    private 'sort_dir'?: ListEnvironmentsRequestSortDirEnum | string;
    public constructor(applicationId?: string, projectId?: string) { 
        this['application_id'] = applicationId;
        this['project_id'] = projectId;
    }
    public withApplicationId(applicationId: string): ListEnvironmentsRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withProjectId(projectId: string): ListEnvironmentsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPageIndex(pageIndex: number): ListEnvironmentsRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): number | undefined {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ListEnvironmentsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withName(name: string): ListEnvironmentsRequest {
        this['name'] = name;
        return this;
    }
    public withSortKey(sortKey: ListEnvironmentsRequestSortKeyEnum | string): ListEnvironmentsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListEnvironmentsRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListEnvironmentsRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListEnvironmentsRequestSortDirEnum | string): ListEnvironmentsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListEnvironmentsRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListEnvironmentsRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEnvironmentsRequestSortKeyEnum {
    NAME = 'NAME',
    USER_NAME = 'USER_NAME',
    CREATED_TIME = 'CREATED_TIME',
    NICK_NAME = 'NICK_NAME'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEnvironmentsRequestSortDirEnum {
    DESC = 'DESC',
    ASC = 'ASC'
}
