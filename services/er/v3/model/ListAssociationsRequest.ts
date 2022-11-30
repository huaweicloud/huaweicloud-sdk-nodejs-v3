

export class ListAssociationsRequest {
    private 'er_id': string | undefined;
    private 'route_table_id': string | undefined;
    public limit?: number;
    public marker?: string;
    private 'attachment_id'?: Array<string> | undefined;
    private 'resource_type'?: Array<ListAssociationsRequestResourceTypeEnum> | undefined;
    public state?: Array<ListAssociationsRequestStateEnum>;
    private 'sort_key'?: Array<string> | undefined;
    private 'sort_dir'?: Array<ListAssociationsRequestSortDirEnum> | undefined;
    public constructor(erId?: any, routeTableId?: any) { 
        this['er_id'] = erId;
        this['route_table_id'] = routeTableId;
    }
    public withErId(erId: string): ListAssociationsRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string | undefined) {
        this['er_id'] = erId;
    }
    public get erId() {
        return this['er_id'];
    }
    public withRouteTableId(routeTableId: string): ListAssociationsRequest {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId() {
        return this['route_table_id'];
    }
    public withLimit(limit: number): ListAssociationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAssociationsRequest {
        this['marker'] = marker;
        return this;
    }
    public withAttachmentId(attachmentId: Array<string>): ListAssociationsRequest {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: Array<string> | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId() {
        return this['attachment_id'];
    }
    public withResourceType(resourceType: Array<ListAssociationsRequestResourceTypeEnum>): ListAssociationsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: Array<ListAssociationsRequestResourceTypeEnum> | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withState(state: Array<ListAssociationsRequestStateEnum>): ListAssociationsRequest {
        this['state'] = state;
        return this;
    }
    public withSortKey(sortKey: Array<string>): ListAssociationsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<string> | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListAssociationsRequestSortDirEnum>): ListAssociationsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListAssociationsRequestSortDirEnum> | undefined) {
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
export enum ListAssociationsRequestResourceTypeEnum {
    VPC = 'vpc',
    VPN = 'vpn',
    DGW = 'dgw',
    VGW = 'vgw',
    PEERING = 'peering',
    CAN = 'can',
    GDGW = 'gdgw'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAssociationsRequestStateEnum {
    PENDING = 'pending',
    AVAILABLE = 'available',
    DELETING = 'deleting',
    DELETED = 'deleted',
    FAILED = 'failed',
    MODIFYING = 'modifying'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAssociationsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
