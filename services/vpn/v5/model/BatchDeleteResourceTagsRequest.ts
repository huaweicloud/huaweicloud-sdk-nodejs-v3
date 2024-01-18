import { DeleteResourcesTagsRequestBody } from './DeleteResourcesTagsRequestBody';


export class BatchDeleteResourceTagsRequest {
    private 'resource_type'?: BatchDeleteResourceTagsRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: DeleteResourcesTagsRequestBody;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: BatchDeleteResourceTagsRequestResourceTypeEnum | string): BatchDeleteResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: BatchDeleteResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): BatchDeleteResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): BatchDeleteResourceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: DeleteResourcesTagsRequestBody): BatchDeleteResourceTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteResourceTagsRequestResourceTypeEnum {
    VPN_GATEWAY = 'vpn-gateway',
    VPN_CONNECTION = 'vpn-connection',
    CUSTOMER_GATEWAY = 'customer-gateway'
}
