

export class ListStackSetsRequest {
    private 'Client-Request-Id'?: string;
    public filter?: string;
    private 'sort_key'?: Array<ListStackSetsRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListStackSetsRequestSortDirEnum> | Array<string>;
    private 'call_identity'?: ListStackSetsRequestCallIdentityEnum | string;
    public marker?: string;
    public limit?: number;
    public constructor(clientRequestId?: string) { 
        this['Client-Request-Id'] = clientRequestId;
    }
    public withClientRequestId(clientRequestId: string): ListStackSetsRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withFilter(filter: string): ListStackSetsRequest {
        this['filter'] = filter;
        return this;
    }
    public withSortKey(sortKey: Array<ListStackSetsRequestSortKeyEnum> | Array<string>): ListStackSetsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListStackSetsRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListStackSetsRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListStackSetsRequestSortDirEnum> | Array<string>): ListStackSetsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListStackSetsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListStackSetsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withCallIdentity(callIdentity: ListStackSetsRequestCallIdentityEnum | string): ListStackSetsRequest {
        this['call_identity'] = callIdentity;
        return this;
    }
    public set callIdentity(callIdentity: ListStackSetsRequestCallIdentityEnum | string  | undefined) {
        this['call_identity'] = callIdentity;
    }
    public get callIdentity(): ListStackSetsRequestCallIdentityEnum | string | undefined {
        return this['call_identity'];
    }
    public withMarker(marker: string): ListStackSetsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListStackSetsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListStackSetsRequestSortKeyEnum {
    CREATE_TIME = 'create_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListStackSetsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListStackSetsRequestCallIdentityEnum {
    SELF = 'SELF',
    DELEGATED_ADMIN = 'DELEGATED_ADMIN'
}
