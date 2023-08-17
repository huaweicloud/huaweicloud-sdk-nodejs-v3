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
    DC_DIRECTCONNECT = 'dc-directconnect',
    DC_VGW = 'dc-vgw',
    DC_VIF = 'dc-vif',
    DC_LAG = 'dc-lag'
}
