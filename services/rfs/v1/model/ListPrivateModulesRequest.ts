

export class ListPrivateModulesRequest {
    private 'Client-Request-Id'?: string;
    private 'sort_key'?: Array<ListPrivateModulesRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListPrivateModulesRequestSortDirEnum> | Array<string>;
    public marker?: string;
    public limit?: number;
    public constructor(clientRequestId?: string) { 
        this['Client-Request-Id'] = clientRequestId;
    }
    public withClientRequestId(clientRequestId: string): ListPrivateModulesRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withSortKey(sortKey: Array<ListPrivateModulesRequestSortKeyEnum> | Array<string>): ListPrivateModulesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListPrivateModulesRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListPrivateModulesRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListPrivateModulesRequestSortDirEnum> | Array<string>): ListPrivateModulesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListPrivateModulesRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListPrivateModulesRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withMarker(marker: string): ListPrivateModulesRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListPrivateModulesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPrivateModulesRequestSortKeyEnum {
    CREATE_TIME = 'create_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPrivateModulesRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
