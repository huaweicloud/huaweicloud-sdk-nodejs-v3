

export class ListProjectTagsRequest {
    private 'resource_type': ListProjectTagsRequestResourceTypeEnum | undefined;
    public constructor(resourceType?: any) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListProjectTagsRequestResourceTypeEnum): ListProjectTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListProjectTagsRequestResourceTypeEnum | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
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
    GDGW_ATTACHMENT = 'gdgw-attachment',
    ATTACHMENTS = 'attachments'
}
