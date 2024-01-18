import { CreateResourcesTagsRequestBody } from './CreateResourcesTagsRequestBody';


export class BatchCreateResourceTagsRequest {
    private 'resource_type'?: BatchCreateResourceTagsRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: CreateResourcesTagsRequestBody;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
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
    public withBody(body: CreateResourcesTagsRequestBody): BatchCreateResourceTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateResourceTagsRequestResourceTypeEnum {
    VPN_GATEWAY = 'vpn-gateway',
    VPN_CONNECTION = 'vpn-connection',
    CUSTOMER_GATEWAY = 'customer-gateway'
}
