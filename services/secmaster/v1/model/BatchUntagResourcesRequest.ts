import { AlterResourceTagsInBatchesRequestBody } from './AlterResourceTagsInBatchesRequestBody';


export class BatchUntagResourcesRequest {
    private 'resource_type'?: string;
    private 'resource_id'?: string;
    private 'Content-type'?: string;
    public body?: AlterResourceTagsInBatchesRequestBody;
    public constructor(resourceType?: string, resourceId?: string, contentType?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['Content-type'] = contentType;
    }
    public withResourceType(resourceType: string): BatchUntagResourcesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): BatchUntagResourcesRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withContentType(contentType: string): BatchUntagResourcesRequest {
        this['Content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-type'];
    }
    public withBody(body: AlterResourceTagsInBatchesRequestBody): BatchUntagResourcesRequest {
        this['body'] = body;
        return this;
    }
}