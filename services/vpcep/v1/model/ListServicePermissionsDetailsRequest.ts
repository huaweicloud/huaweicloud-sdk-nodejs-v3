

export class ListServicePermissionsDetailsRequest {
    private 'Content-Type': string | undefined;
    private 'vpc_endpoint_service_id': string | undefined;
    public permission?: string;
    public limit?: number;
    public offset?: number;
    private 'sort_key'?: ListServicePermissionsDetailsRequestSortKeyEnum | undefined;
    private 'sort_dir'?: ListServicePermissionsDetailsRequestSortDirEnum | undefined;
    public constructor(contentType?: any, vpcEndpointServiceId?: any) { 
        this['Content-Type'] = contentType;
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public withContentType(contentType: string): ListServicePermissionsDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withVpcEndpointServiceId(vpcEndpointServiceId: string): ListServicePermissionsDetailsRequest {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
        return this;
    }
    public set vpcEndpointServiceId(vpcEndpointServiceId: string | undefined) {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public get vpcEndpointServiceId() {
        return this['vpc_endpoint_service_id'];
    }
    public withPermission(permission: string): ListServicePermissionsDetailsRequest {
        this['permission'] = permission;
        return this;
    }
    public withLimit(limit: number): ListServicePermissionsDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListServicePermissionsDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: ListServicePermissionsDetailsRequestSortKeyEnum): ListServicePermissionsDetailsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListServicePermissionsDetailsRequestSortKeyEnum | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListServicePermissionsDetailsRequestSortDirEnum): ListServicePermissionsDetailsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListServicePermissionsDetailsRequestSortDirEnum | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListServicePermissionsDetailsRequestSortKeyEnum {
    CREATE_AT = 'create_at',
    UPDATE_AT = 'update_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListServicePermissionsDetailsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
