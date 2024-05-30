import { BatchDeleteRequestBody } from './BatchDeleteRequestBody';


export class BatchDeleteClouddcnSubnetsTagsRequest {
    private 'resource_id'?: string;
    public body?: BatchDeleteRequestBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): BatchDeleteClouddcnSubnetsTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: BatchDeleteRequestBody): BatchDeleteClouddcnSubnetsTagsRequest {
        this['body'] = body;
        return this;
    }
}