import { BatchDeleteResourceTagsRequestBody } from './BatchDeleteResourceTagsRequestBody';


export class BatchDeleteResourceTagsRequest {
    private 'resource_id'?: string;
    private 'resource_type'?: BatchDeleteResourceTagsRequestResourceTypeEnum | string;
    public body?: BatchDeleteResourceTagsRequestBody;
    public constructor(resourceId?: string, resourceType?: string) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
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
    public withBody(body: BatchDeleteResourceTagsRequestBody): BatchDeleteResourceTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteResourceTagsRequestResourceTypeEnum {
    CTS_TRACKER = 'cts-tracker'
}
