

export class ListHostClustersRequest {
    private 'project_id'?: string;
    public name?: string;
    public os?: ListHostClustersRequestOsEnum | string;
    private 'page_index'?: number;
    private 'page_size'?: number;
    private 'sort_field'?: string;
    private 'sort_type'?: ListHostClustersRequestSortTypeEnum | string;
    private 'is_proxy_mode'?: number;
    private 'slave_cluster_id'?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListHostClustersRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): ListHostClustersRequest {
        this['name'] = name;
        return this;
    }
    public withOs(os: ListHostClustersRequestOsEnum | string): ListHostClustersRequest {
        this['os'] = os;
        return this;
    }
    public withPageIndex(pageIndex: number): ListHostClustersRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): number | undefined {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ListHostClustersRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withSortField(sortField: string): ListHostClustersRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: ListHostClustersRequestSortTypeEnum | string): ListHostClustersRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: ListHostClustersRequestSortTypeEnum | string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): ListHostClustersRequestSortTypeEnum | string | undefined {
        return this['sort_type'];
    }
    public withIsProxyMode(isProxyMode: number): ListHostClustersRequest {
        this['is_proxy_mode'] = isProxyMode;
        return this;
    }
    public set isProxyMode(isProxyMode: number  | undefined) {
        this['is_proxy_mode'] = isProxyMode;
    }
    public get isProxyMode(): number | undefined {
        return this['is_proxy_mode'];
    }
    public withSlaveClusterId(slaveClusterId: string): ListHostClustersRequest {
        this['slave_cluster_id'] = slaveClusterId;
        return this;
    }
    public set slaveClusterId(slaveClusterId: string  | undefined) {
        this['slave_cluster_id'] = slaveClusterId;
    }
    public get slaveClusterId(): string | undefined {
        return this['slave_cluster_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListHostClustersRequestOsEnum {
    WINDOWS = 'windows',
    LINUX = 'linux'
}
/**
    * @export
    * @enum {string}
    */
export enum ListHostClustersRequestSortTypeEnum {
    DESC = 'DESC',
    ASC = 'ASC'
}
