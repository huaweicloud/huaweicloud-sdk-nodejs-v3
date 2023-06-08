import { BatchHandTags } from './BatchHandTags';


export class BatchCreateTagRequest {
    private 'resource_type': string | undefined;
    private 'resource_id': string | undefined;
    public body?: BatchHandTags;
    public constructor(resourceType?: any, resourceId?: any) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: string): BatchCreateTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): BatchCreateTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withBody(body: BatchHandTags): BatchCreateTagRequest {
        this['body'] = body;
        return this;
    }
}