

export class ListHostsRequest {
    private 'group_id': string | undefined;
    private 'as_proxy'?: boolean | undefined;
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'sort_key'?: string | undefined;
    private 'sort_dir'?: ListHostsRequestSortDirEnum | undefined;
    private 'with_auth'?: boolean | undefined;
    public constructor(groupId?: any) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): ListHostsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withAsProxy(asProxy: boolean): ListHostsRequest {
        this['as_proxy'] = asProxy;
        return this;
    }
    public set asProxy(asProxy: boolean | undefined) {
        this['as_proxy'] = asProxy;
    }
    public get asProxy() {
        return this['as_proxy'];
    }
    public withOffset(offset: number): ListHostsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHostsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListHostsRequest {
        this['name'] = name;
        return this;
    }
    public withSortKey(sortKey: string): ListHostsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListHostsRequestSortDirEnum): ListHostsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListHostsRequestSortDirEnum | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
    }
    public withWithAuth(withAuth: boolean): ListHostsRequest {
        this['with_auth'] = withAuth;
        return this;
    }
    public set withAuth(withAuth: boolean | undefined) {
        this['with_auth'] = withAuth;
    }
    public get withAuth() {
        return this['with_auth'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListHostsRequestSortDirEnum {
    DESC = 'DESC',
    ASC = 'ASC'
}
