import { BatchAddOrRemoveResourceInstanceBody } from './BatchAddOrRemoveResourceInstanceBody';


export class BatchAddOrRemoveResourceInstanceRequest {
    private 'resource_type': string | undefined;
    private 'resource_id': string | undefined;
    private 'Content-Type'?: string | undefined;
    public body?: BatchAddOrRemoveResourceInstanceBody;
    public constructor(resourceType?: any, resourceId?: any) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: string): BatchAddOrRemoveResourceInstanceRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): BatchAddOrRemoveResourceInstanceRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withContentType(contentType: string): BatchAddOrRemoveResourceInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: BatchAddOrRemoveResourceInstanceBody): BatchAddOrRemoveResourceInstanceRequest {
        this['body'] = body;
        return this;
    }
}