import { BatchOperateResourceTagsRequestBody } from './BatchOperateResourceTagsRequestBody';


export class BatchCreateDeleteTransitSubnetTagsRequest {
    private 'resource_id'?: string;
    public body?: BatchOperateResourceTagsRequestBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): BatchCreateDeleteTransitSubnetTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: BatchOperateResourceTagsRequestBody): BatchCreateDeleteTransitSubnetTagsRequest {
        this['body'] = body;
        return this;
    }
}