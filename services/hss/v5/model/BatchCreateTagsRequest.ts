import { BatchCreateTagsRequestInfo } from './BatchCreateTagsRequestInfo';


export class BatchCreateTagsRequest {
    private 'resource_type'?: string;
    private 'resource_id'?: string;
    public body?: BatchCreateTagsRequestInfo;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: string): BatchCreateTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): BatchCreateTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: BatchCreateTagsRequestInfo): BatchCreateTagsRequest {
        this['body'] = body;
        return this;
    }
}