

export class ListProjectTagsRequest {
    private 'resource_type'?: ListProjectTagsRequestResourceTypeEnum | string;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListProjectTagsRequestResourceTypeEnum | string): ListProjectTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListProjectTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListProjectTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProjectTagsRequestResourceTypeEnum {
    INSTANCE = 'instance',
    ROUTE_TABLE = 'route-table',
    VPC_ATTACHMENT = 'vpc-attachment',
    DGW_ATTACHMENT = 'dgw-attachment',
    VGW_ATTACHMENT = 'vgw-attachment',
    PEERING_ATTACHMENT = 'peering-attachment',
    VPN_ATTACHMENT = 'vpn-attachment',
    CAN_ATTACHMENT = 'can-attachment',
    ECN_ATTACHMENT = 'ecn-attachment',
    GDGW_ATTACHMENT = 'gdgw-attachment',
    CONNECT_ATTACHMENT = 'connect-attachment',
    CFW_ATTACHMENT = 'cfw-attachment',
    ATTACHMENTS = 'attachments'
}
