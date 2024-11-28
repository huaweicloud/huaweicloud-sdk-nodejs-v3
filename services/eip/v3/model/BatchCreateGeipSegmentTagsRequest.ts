import { BatchCreateV2RequestBody } from './BatchCreateV2RequestBody';


export class BatchCreateGeipSegmentTagsRequest {
    private 'resource_id'?: string;
    public body?: BatchCreateV2RequestBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): BatchCreateGeipSegmentTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: BatchCreateV2RequestBody): BatchCreateGeipSegmentTagsRequest {
        this['body'] = body;
        return this;
    }
}