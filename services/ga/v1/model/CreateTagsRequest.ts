import { CreateTagsRequestBody } from './CreateTagsRequestBody';
import { ResourceType } from './ResourceType';


export class CreateTagsRequest {
    private 'resource_type': ResourceType | undefined;
    private 'resource_id': string | undefined;
    public body?: CreateTagsRequestBody;
    public constructor(resourceType?: any, resourceId?: any) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: ResourceType): CreateTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ResourceType | undefined) {
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
    public withBody(body: CreateTagsRequestBody): CreateTagsRequest {
        this['body'] = body;
        return this;
    }
}