import { CreateTagsReqbody } from './CreateTagsReqbody';


export class CreateTagsRequest {
    private 'resource_type': string | undefined;
    private 'resource_id': string | undefined;
    private 'Content-Type': string | undefined;
    public body?: CreateTagsReqbody;
    public constructor(resourceType?: any, resourceId?: any, contentType?: any) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['Content-Type'] = contentType;
    }
    public withResourceType(resourceType: string): CreateTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): CreateTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withContentType(contentType: string): CreateTagsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: CreateTagsReqbody): CreateTagsRequest {
        this['body'] = body;
        return this;
    }
}