import { UpdateFunctionTagsRequestBody } from './UpdateFunctionTagsRequestBody';


export class DeleteTagsRequest {
    private 'resource_type': string | undefined;
    private 'resource_id': string | undefined;
    public body?: UpdateFunctionTagsRequestBody;
    public constructor(resourceType?: any, resourceId?: any) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: string): DeleteTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): DeleteTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withBody(body: UpdateFunctionTagsRequestBody): DeleteTagsRequest {
        this['body'] = body;
        return this;
    }
}