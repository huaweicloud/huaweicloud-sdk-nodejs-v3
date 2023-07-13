import { CreateResourceTagRequestBody } from './CreateResourceTagRequestBody';


export class CreateResourceTagRequest {
    private 'resource_id': string | undefined;
    private 'resource_type': CreateResourceTagRequestResourceTypeEnum | undefined;
    public body?: CreateResourceTagRequestBody;
    public constructor(resourceId?: any, resourceType?: any) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withResourceId(resourceId: string): CreateResourceTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceType(resourceType: CreateResourceTagRequestResourceTypeEnum): CreateResourceTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CreateResourceTagRequestResourceTypeEnum | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withBody(body: CreateResourceTagRequestBody): CreateResourceTagRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateResourceTagRequestResourceTypeEnum {
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
