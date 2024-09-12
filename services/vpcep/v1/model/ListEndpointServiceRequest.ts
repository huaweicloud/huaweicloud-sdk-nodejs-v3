

export class ListEndpointServiceRequest {
    private 'Content-Type'?: string;
    private 'endpoint_service_name'?: string;
    public id?: string;
    public status?: ListEndpointServiceRequestStatusEnum | string;
    private 'sort_key'?: ListEndpointServiceRequestSortKeyEnum | string;
    private 'sort_dir'?: ListEndpointServiceRequestSortDirEnum | string;
    public limit?: number;
    public offset?: number;
    private 'public_border_group'?: string;
    private 'net_type'?: ListEndpointServiceRequestNetTypeEnum | string;
    public constructor() { 
    }
    public withContentType(contentType: string): ListEndpointServiceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEndpointServiceName(endpointServiceName: string): ListEndpointServiceRequest {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string  | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName(): string | undefined {
        return this['endpoint_service_name'];
    }
    public withId(id: string): ListEndpointServiceRequest {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ListEndpointServiceRequestStatusEnum | string): ListEndpointServiceRequest {
        this['status'] = status;
        return this;
    }
    public withSortKey(sortKey: ListEndpointServiceRequestSortKeyEnum | string): ListEndpointServiceRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListEndpointServiceRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListEndpointServiceRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListEndpointServiceRequestSortDirEnum | string): ListEndpointServiceRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListEndpointServiceRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListEndpointServiceRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withLimit(limit: number): ListEndpointServiceRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListEndpointServiceRequest {
        this['offset'] = offset;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): ListEndpointServiceRequest {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withNetType(netType: ListEndpointServiceRequestNetTypeEnum | string): ListEndpointServiceRequest {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: ListEndpointServiceRequestNetTypeEnum | string  | undefined) {
        this['net_type'] = netType;
    }
    public get netType(): ListEndpointServiceRequestNetTypeEnum | string | undefined {
        return this['net_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEndpointServiceRequestStatusEnum {
    CREATING = 'creating',
    AVAILABLE = 'available',
    FAILED = 'failed',
    DELETING = 'deleting'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEndpointServiceRequestSortKeyEnum {
    CREATE_AT = 'create_at',
    UPDATE_AT = 'update_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEndpointServiceRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEndpointServiceRequestNetTypeEnum {
    VLAN = 'vlan',
    VXLAN = 'vxlan',
    ALL = 'all'
}
