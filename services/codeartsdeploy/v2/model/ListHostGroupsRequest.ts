

export class ListHostGroupsRequest {
    private 'project_id'?: string | undefined;
    private 'region_name': string | undefined;
    public os?: ListHostGroupsRequestOsEnum;
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'sort_key'?: string | undefined;
    private 'sort_dir'?: ListHostGroupsRequestSortDirEnum | undefined;
    public constructor(regionName?: any) { 
        this['region_name'] = regionName;
    }
    public withProjectId(projectId: string): ListHostGroupsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withRegionName(regionName: string): ListHostGroupsRequest {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName() {
        return this['region_name'];
    }
    public withOs(os: ListHostGroupsRequestOsEnum): ListHostGroupsRequest {
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
    public set sortKey(sortKey: string | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListHostGroupsRequestSortDirEnum): ListHostGroupsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListHostGroupsRequestSortDirEnum | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
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
