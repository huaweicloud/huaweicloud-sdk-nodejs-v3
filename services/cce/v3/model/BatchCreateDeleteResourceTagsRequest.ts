import { BatchCreateDeleteResourceTags } from './BatchCreateDeleteResourceTags';


export class BatchCreateDeleteResourceTagsRequest {
    private 'resource_type'?: string;
    private 'resource_id'?: string;
    private 'Content-Type'?: string;
    public body?: BatchCreateDeleteResourceTags;
    public constructor(resourceType?: string, resourceId?: string, contentType?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['Content-Type'] = contentType;
    }
    public withResourceType(resourceType: string): BatchCreateDeleteResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): BatchCreateDeleteResourceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withContentType(contentType: string): BatchCreateDeleteResourceTagsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchCreateDeleteResourceTags): BatchCreateDeleteResourceTagsRequest {
        this['body'] = body;
        return this;
    }
}