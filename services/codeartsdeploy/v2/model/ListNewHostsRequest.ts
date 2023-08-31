

export class ListNewHostsRequest {
    private 'group_id'?: string;
    private 'key_field'?: string;
    private 'environment_id'?: string;
    private 'page_index'?: number;
    private 'page_size'?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: ListNewHostsRequestSortDirEnum | string;
    private 'as_proxy'?: boolean;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): ListNewHostsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withKeyField(keyField: string): ListNewHostsRequest {
        this['key_field'] = keyField;
        return this;
    }
    public set keyField(keyField: string  | undefined) {
        this['key_field'] = keyField;
    }
    public get keyField(): string | undefined {
        return this['key_field'];
    }
    public withEnvironmentId(environmentId: string): ListNewHostsRequest {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withPageIndex(pageIndex: number): ListNewHostsRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): number | undefined {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ListNewHostsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withSortKey(sortKey: string): ListNewHostsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListNewHostsRequestSortDirEnum | string): ListNewHostsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListNewHostsRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListNewHostsRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withAsProxy(asProxy: boolean): ListNewHostsRequest {
        this['as_proxy'] = asProxy;
        return this;
    }
    public set asProxy(asProxy: boolean  | undefined) {
        this['as_proxy'] = asProxy;
    }
    public get asProxy(): boolean | undefined {
        return this['as_proxy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListNewHostsRequestSortDirEnum {
    DESC = 'DESC',
    ASC = 'ASC'
}
