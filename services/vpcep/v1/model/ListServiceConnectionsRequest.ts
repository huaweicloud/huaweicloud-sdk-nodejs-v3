

export class ListServiceConnectionsRequest {
    private 'Content-Type'?: string;
    private 'vpc_endpoint_service_id'?: string;
    public id?: string;
    private 'marker_id'?: string;
    public status?: ListServiceConnectionsRequestStatusEnum | string;
    private 'sort_key'?: ListServiceConnectionsRequestSortKeyEnum | string;
    private 'sort_dir'?: ListServiceConnectionsRequestSortDirEnum | string;
    public limit?: number;
    public offset?: number;
    public constructor(vpcEndpointServiceId?: string) { 
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public withContentType(contentType: string): ListServiceConnectionsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withVpcEndpointServiceId(vpcEndpointServiceId: string): ListServiceConnectionsRequest {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
        return this;
    }
    public set vpcEndpointServiceId(vpcEndpointServiceId: string  | undefined) {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public get vpcEndpointServiceId(): string | undefined {
        return this['vpc_endpoint_service_id'];
    }
    public withId(id: string): ListServiceConnectionsRequest {
        this['id'] = id;
        return this;
    }
    public withMarkerId(markerId: string): ListServiceConnectionsRequest {
        this['marker_id'] = markerId;
        return this;
    }
    public set markerId(markerId: string  | undefined) {
        this['marker_id'] = markerId;
    }
    public get markerId(): string | undefined {
        return this['marker_id'];
    }
    public withStatus(status: ListServiceConnectionsRequestStatusEnum | string): ListServiceConnectionsRequest {
        this['status'] = status;
        return this;
    }
    public withSortKey(sortKey: ListServiceConnectionsRequestSortKeyEnum | string): ListServiceConnectionsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListServiceConnectionsRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListServiceConnectionsRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListServiceConnectionsRequestSortDirEnum | string): ListServiceConnectionsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListServiceConnectionsRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListServiceConnectionsRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withLimit(limit: number): ListServiceConnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListServiceConnectionsRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListServiceConnectionsRequestStatusEnum {
    PENDINGACCEPTANCE = 'pendingAcceptance',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum ListServiceConnectionsRequestSortKeyEnum {
    CREATE_AT = 'create_at',
    UPDATE_AT = 'update_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListServiceConnectionsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
