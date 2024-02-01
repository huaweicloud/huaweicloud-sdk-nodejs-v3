import { CreateDeleteGcbTagsRequestBody } from './CreateDeleteGcbTagsRequestBody';


export class BatchDeleteGcbResourceTagsRequest {
    private 'resource_id'?: string;
    public body?: CreateDeleteGcbTagsRequestBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): BatchDeleteGcbResourceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: CreateDeleteGcbTagsRequestBody): BatchDeleteGcbResourceTagsRequest {
        this['body'] = body;
        return this;
    }
}