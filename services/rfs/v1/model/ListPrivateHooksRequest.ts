

export class ListPrivateHooksRequest {
    private 'Client-Request-Id'?: string;
    private 'sort_key'?: Array<ListPrivateHooksRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListPrivateHooksRequestSortDirEnum> | Array<string>;
    public marker?: string;
    public limit?: number;
    public constructor(clientRequestId?: string) { 
        this['Client-Request-Id'] = clientRequestId;
    }
    public withClientRequestId(clientRequestId: string): ListPrivateHooksRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withSortKey(sortKey: Array<ListPrivateHooksRequestSortKeyEnum> | Array<string>): ListPrivateHooksRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListPrivateHooksRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListPrivateHooksRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListPrivateHooksRequestSortDirEnum> | Array<string>): ListPrivateHooksRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListPrivateHooksRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListPrivateHooksRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withMarker(marker: string): ListPrivateHooksRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListPrivateHooksRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPrivateHooksRequestSortKeyEnum {
    CREATE_TIME = 'create_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPrivateHooksRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
