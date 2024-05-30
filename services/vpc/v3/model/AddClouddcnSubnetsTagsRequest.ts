import { AddResourceTagsRequestBody } from './AddResourceTagsRequestBody';


export class AddClouddcnSubnetsTagsRequest {
    private 'resource_id'?: string;
    public body?: AddResourceTagsRequestBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): AddClouddcnSubnetsTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: AddResourceTagsRequestBody): AddClouddcnSubnetsTagsRequest {
        this['body'] = body;
        return this;
    }
}