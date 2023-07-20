

export class ListPropagationsRequest {
    private 'er_id'?: string;
    private 'route_table_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'attachment_id'?: Array<string>;
    private 'resource_type'?: Array<ListPropagationsRequestResourceTypeEnum> | Array<string>;
    public state?: Array<ListPropagationsRequestStateEnum> | Array<string>;
    private 'sort_key'?: Array<string>;
    private 'sort_dir'?: Array<ListPropagationsRequestSortDirEnum> | Array<string>;
    public constructor(erId?: string, routeTableId?: string) { 
        this['er_id'] = erId;
        this['route_table_id'] = routeTableId;
    }
    public withErId(erId: string): ListPropagationsRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withRouteTableId(routeTableId: string): ListPropagationsRequest {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string  | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId(): string | undefined {
        return this['route_table_id'];
    }
    public withLimit(limit: number): ListPropagationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPropagationsRequest {
        this['marker'] = marker;
        return this;
    }
    public withAttachmentId(attachmentId: Array<string>): ListPropagationsRequest {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: Array<string>  | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId(): Array<string> | undefined {
        return this['attachment_id'];
    }
    public withResourceType(resourceType: Array<ListPropagationsRequestResourceTypeEnum> | Array<string>): ListPropagationsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: Array<ListPropagationsRequestResourceTypeEnum> | Array<string>  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): Array<ListPropagationsRequestResourceTypeEnum> | Array<string> | undefined {
        return this['resource_type'];
    }
    public withState(state: Array<ListPropagationsRequestStateEnum> | Array<string>): ListPropagationsRequest {
        this['state'] = state;
        return this;
    }
    public withSortKey(sortKey: Array<string>): ListPropagationsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListPropagationsRequestSortDirEnum> | Array<string>): ListPropagationsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListPropagationsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListPropagationsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPropagationsRequestResourceTypeEnum {
    VPC = 'vpc',
    VPN = 'vpn',
    DGW = 'dgw',
    VGW = 'vgw',
    PEERING = 'peering',
    CAN = 'can',
    ECN = 'ecn',
    GDGW = 'gdgw',
    CONNECT = 'connect',
    CFW = 'cfw'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPropagationsRequestStateEnum {
    PENDING = 'pending',
    AVAILABLE = 'available',
    MODIFYING = 'modifying',
    DELETING = 'deleting',
    DELETED = 'deleted',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPropagationsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
