

export class ListEndpointsRequest {
    private 'Content-Type'?: string;
    private 'endpoint_service_name'?: string;
    private 'vpc_id'?: string;
    public id?: string;
    public limit?: number;
    public offset?: number;
    private 'sort_key'?: ListEndpointsRequestSortKeyEnum | string;
    private 'sort_dir'?: ListEndpointsRequestSortDirEnum | string;
    public constructor() { 
    }
    public withContentType(contentType: string): ListEndpointsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEndpointServiceName(endpointServiceName: string): ListEndpointsRequest {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string  | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName(): string | undefined {
        return this['endpoint_service_name'];
    }
    public withVpcId(vpcId: string): ListEndpointsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withId(id: string): ListEndpointsRequest {
        this['id'] = id;
        return this;
    }
    public withLimit(limit: number): ListEndpointsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListEndpointsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: ListEndpointsRequestSortKeyEnum | string): ListEndpointsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListEndpointsRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListEndpointsRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListEndpointsRequestSortDirEnum | string): ListEndpointsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListEndpointsRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListEndpointsRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEndpointsRequestSortKeyEnum {
    CREATE_AT = 'create_at',
    UPDATE_AT = 'update_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEndpointsRequestSortDirEnum {
    DESC = 'desc',
    ASC = 'asc'
}
