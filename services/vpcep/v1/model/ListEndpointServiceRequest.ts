

export class ListEndpointServiceRequest {
    private 'Content-Type': string | undefined;
    private 'endpoint_service_name'?: string | undefined;
    public id?: string;
    public status?: ListEndpointServiceRequestStatusEnum;
    private 'sort_key'?: ListEndpointServiceRequestSortKeyEnum | undefined;
    private 'sort_dir'?: ListEndpointServiceRequestSortDirEnum | undefined;
    public limit?: number;
    public offset?: number;
    private 'public_border_group'?: string | undefined;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListEndpointServiceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEndpointServiceName(endpointServiceName: string): ListEndpointServiceRequest {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName() {
        return this['endpoint_service_name'];
    }
    public withId(id: string): ListEndpointServiceRequest {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ListEndpointServiceRequestStatusEnum): ListEndpointServiceRequest {
        this['status'] = status;
        return this;
    }
    public withSortKey(sortKey: ListEndpointServiceRequestSortKeyEnum): ListEndpointServiceRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListEndpointServiceRequestSortKeyEnum | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListEndpointServiceRequestSortDirEnum): ListEndpointServiceRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListEndpointServiceRequestSortDirEnum | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
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
    public set publicBorderGroup(publicBorderGroup: string | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup() {
        return this['public_border_group'];
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
