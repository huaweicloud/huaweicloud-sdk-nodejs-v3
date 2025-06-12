

export class ListPrivateProvidersRequest {
    private 'Client-Request-Id'?: string;
    private 'sort_key'?: Array<ListPrivateProvidersRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListPrivateProvidersRequestSortDirEnum> | Array<string>;
    public marker?: string;
    public limit?: number;
    public constructor(clientRequestId?: string) { 
        this['Client-Request-Id'] = clientRequestId;
    }
    public withClientRequestId(clientRequestId: string): ListPrivateProvidersRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withSortKey(sortKey: Array<ListPrivateProvidersRequestSortKeyEnum> | Array<string>): ListPrivateProvidersRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListPrivateProvidersRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListPrivateProvidersRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListPrivateProvidersRequestSortDirEnum> | Array<string>): ListPrivateProvidersRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListPrivateProvidersRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListPrivateProvidersRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withMarker(marker: string): ListPrivateProvidersRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListPrivateProvidersRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPrivateProvidersRequestSortKeyEnum {
    CREATE_TIME = 'create_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPrivateProvidersRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
