

export class ListPrivateHookVersionsRequest {
    private 'Client-Request-Id'?: string;
    private 'hook_name'?: string;
    private 'hook_id'?: string;
    private 'sort_key'?: Array<ListPrivateHookVersionsRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListPrivateHookVersionsRequestSortDirEnum> | Array<string>;
    public marker?: string;
    public limit?: number;
    public constructor(clientRequestId?: string, hookName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['hook_name'] = hookName;
    }
    public withClientRequestId(clientRequestId: string): ListPrivateHookVersionsRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withHookName(hookName: string): ListPrivateHookVersionsRequest {
        this['hook_name'] = hookName;
        return this;
    }
    public set hookName(hookName: string  | undefined) {
        this['hook_name'] = hookName;
    }
    public get hookName(): string | undefined {
        return this['hook_name'];
    }
    public withHookId(hookId: string): ListPrivateHookVersionsRequest {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: string  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): string | undefined {
        return this['hook_id'];
    }
    public withSortKey(sortKey: Array<ListPrivateHookVersionsRequestSortKeyEnum> | Array<string>): ListPrivateHookVersionsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListPrivateHookVersionsRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListPrivateHookVersionsRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListPrivateHookVersionsRequestSortDirEnum> | Array<string>): ListPrivateHookVersionsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListPrivateHookVersionsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListPrivateHookVersionsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withMarker(marker: string): ListPrivateHookVersionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListPrivateHookVersionsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPrivateHookVersionsRequestSortKeyEnum {
    CREATE_TIME = 'create_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPrivateHookVersionsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
