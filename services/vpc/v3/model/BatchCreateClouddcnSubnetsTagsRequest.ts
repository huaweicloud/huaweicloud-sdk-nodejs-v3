import { BatchCreateRequestBody } from './BatchCreateRequestBody';


export class BatchCreateClouddcnSubnetsTagsRequest {
    private 'resource_id'?: string;
    public body?: BatchCreateRequestBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): BatchCreateClouddcnSubnetsTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: BatchCreateRequestBody): BatchCreateClouddcnSubnetsTagsRequest {
        this['body'] = body;
        return this;
    }
}