import { BatchCreateOrDeleteResourceTagsRequestBody } from './BatchCreateOrDeleteResourceTagsRequestBody';


export class BatchCreateOrDeleteResourceTagsRequest {
    private 'resource_type'?: string;
    private 'resource_id'?: string;
    public body?: BatchCreateOrDeleteResourceTagsRequestBody;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: string): BatchCreateOrDeleteResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): BatchCreateOrDeleteResourceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: BatchCreateOrDeleteResourceTagsRequestBody): BatchCreateOrDeleteResourceTagsRequest {
        this['body'] = body;
        return this;
    }
}