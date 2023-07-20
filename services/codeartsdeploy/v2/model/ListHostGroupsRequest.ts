

export class ListHostGroupsRequest {
    private 'project_id'?: string;
    private 'region_name'?: string;
    public os?: ListHostGroupsRequestOsEnum | string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: ListHostGroupsRequestSortDirEnum | string;
    public constructor(regionName?: string) { 
        this['region_name'] = regionName;
    }
    public withProjectId(projectId: string): ListHostGroupsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionName(regionName: string): ListHostGroupsRequest {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withOs(os: ListHostGroupsRequestOsEnum | string): ListHostGroupsRequest {
        this['os'] = os;
        return this;
    }
    public withOffset(offset: number): ListHostGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHostGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListHostGroupsRequest {
        this['name'] = name;
        return this;
    }
    public withSortKey(sortKey: string): ListHostGroupsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListHostGroupsRequestSortDirEnum | string): ListHostGroupsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListHostGroupsRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListHostGroupsRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListHostGroupsRequestOsEnum {
    WINDOWS = 'windows',
    LINUX = 'linux'
}
/**
    * @export
    * @enum {string}
    */
export enum ListHostGroupsRequestSortDirEnum {
    DESC = 'DESC',
    ASC = 'ASC'
}
