import { DeleteTagsRequestBody } from './DeleteTagsRequestBody';
import { ResourceType } from './ResourceType';


export class DeleteTagsRequest {
    private 'resource_type'?: ResourceType;
    private 'resource_id'?: string;
    public body?: DeleteTagsRequestBody;
    public constructor(resourceType?: ResourceType, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: ResourceType): DeleteTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ResourceType  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ResourceType | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): DeleteTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: DeleteTagsRequestBody): DeleteTagsRequest {
        this['body'] = body;
        return this;
    }
}