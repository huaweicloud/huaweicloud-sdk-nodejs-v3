

export class ListStackSetOperationsRequest {
    private 'Client-Request-Id'?: string;
    private 'stack_set_name'?: string;
    private 'stack_set_id'?: string;
    public filter?: string;
    private 'sort_key'?: Array<ListStackSetOperationsRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListStackSetOperationsRequestSortDirEnum> | Array<string>;
    private 'call_identity'?: ListStackSetOperationsRequestCallIdentityEnum | string;
    public marker?: string;
    public limit?: number;
    public constructor(clientRequestId?: string, stackSetName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['stack_set_name'] = stackSetName;
    }
    public withClientRequestId(clientRequestId: string): ListStackSetOperationsRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withStackSetName(stackSetName: string): ListStackSetOperationsRequest {
        this['stack_set_name'] = stackSetName;
        return this;
    }
    public set stackSetName(stackSetName: string  | undefined) {
        this['stack_set_name'] = stackSetName;
    }
    public get stackSetName(): string | undefined {
        return this['stack_set_name'];
    }
    public withStackSetId(stackSetId: string): ListStackSetOperationsRequest {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
    public withFilter(filter: string): ListStackSetOperationsRequest {
        this['filter'] = filter;
        return this;
    }
    public withSortKey(sortKey: Array<ListStackSetOperationsRequestSortKeyEnum> | Array<string>): ListStackSetOperationsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListStackSetOperationsRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListStackSetOperationsRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListStackSetOperationsRequestSortDirEnum> | Array<string>): ListStackSetOperationsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListStackSetOperationsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListStackSetOperationsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withCallIdentity(callIdentity: ListStackSetOperationsRequestCallIdentityEnum | string): ListStackSetOperationsRequest {
        this['call_identity'] = callIdentity;
        return this;
    }
    public set callIdentity(callIdentity: ListStackSetOperationsRequestCallIdentityEnum | string  | undefined) {
        this['call_identity'] = callIdentity;
    }
    public get callIdentity(): ListStackSetOperationsRequestCallIdentityEnum | string | undefined {
        return this['call_identity'];
    }
    public withMarker(marker: string): ListStackSetOperationsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListStackSetOperationsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListStackSetOperationsRequestSortKeyEnum {
    CREATE_TIME = 'create_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListStackSetOperationsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListStackSetOperationsRequestCallIdentityEnum {
    SELF = 'SELF',
    DELEGATED_ADMIN = 'DELEGATED_ADMIN'
}
