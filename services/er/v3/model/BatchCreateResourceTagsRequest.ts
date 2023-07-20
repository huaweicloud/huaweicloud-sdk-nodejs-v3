import { BatchOperateResourceTagsRequestBody } from './BatchOperateResourceTagsRequestBody';


export class BatchCreateResourceTagsRequest {
    private 'resource_id'?: string;
    private 'resource_type'?: BatchCreateResourceTagsRequestResourceTypeEnum | string;
    public body?: BatchOperateResourceTagsRequestBody;
    public constructor(resourceId?: string, resourceType?: string) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withResourceId(resourceId: string): BatchCreateResourceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: BatchCreateResourceTagsRequestResourceTypeEnum | string): BatchCreateResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: BatchCreateResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): BatchCreateResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: BatchOperateResourceTagsRequestBody): BatchCreateResourceTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateResourceTagsRequestResourceTypeEnum {
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
