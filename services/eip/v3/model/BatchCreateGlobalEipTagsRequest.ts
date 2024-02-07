import { BatchCreateV2RequestBody } from './BatchCreateV2RequestBody';


export class BatchCreateGlobalEipTagsRequest {
    private 'resource_id'?: string;
    public body?: BatchCreateV2RequestBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): BatchCreateGlobalEipTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: BatchCreateV2RequestBody): BatchCreateGlobalEipTagsRequest {
        this['body'] = body;
        return this;
    }
}