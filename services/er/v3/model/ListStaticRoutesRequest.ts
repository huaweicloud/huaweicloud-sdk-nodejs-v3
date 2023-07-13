

export class ListStaticRoutesRequest {
    private 'route_table_id': string | undefined;
    public limit?: number;
    public marker?: string;
    public destination?: Array<string>;
    private 'attachment_id'?: Array<string> | undefined;
    private 'resource_type'?: Array<ListStaticRoutesRequestResourceTypeEnum> | undefined;
    private 'sort_key'?: Array<string> | undefined;
    private 'sort_dir'?: Array<ListStaticRoutesRequestSortDirEnum> | undefined;
    public constructor(routeTableId?: any) { 
        this['route_table_id'] = routeTableId;
    }
    public withRouteTableId(routeTableId: string): ListStaticRoutesRequest {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId() {
        return this['route_table_id'];
    }
    public withLimit(limit: number): ListStaticRoutesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListStaticRoutesRequest {
        this['marker'] = marker;
        return this;
    }
    public withDestination(destination: Array<string>): ListStaticRoutesRequest {
        this['destination'] = destination;
        return this;
    }
    public withAttachmentId(attachmentId: Array<string>): ListStaticRoutesRequest {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: Array<string> | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId() {
        return this['attachment_id'];
    }
    public withResourceType(resourceType: Array<ListStaticRoutesRequestResourceTypeEnum>): ListStaticRoutesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: Array<ListStaticRoutesRequestResourceTypeEnum> | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withSortKey(sortKey: Array<string>): ListStaticRoutesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<string> | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListStaticRoutesRequestSortDirEnum>): ListStaticRoutesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListStaticRoutesRequestSortDirEnum> | undefined) {
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
export enum ListStaticRoutesRequestResourceTypeEnum {
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
export enum ListStaticRoutesRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
