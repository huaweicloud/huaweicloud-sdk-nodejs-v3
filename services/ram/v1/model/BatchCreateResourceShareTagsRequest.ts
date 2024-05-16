import { TagResourceReqBody } from './TagResourceReqBody';


export class BatchCreateResourceShareTagsRequest {
    private 'resource_share_id'?: string;
    public body?: TagResourceReqBody;
    public constructor(resourceShareId?: string) { 
        this['resource_share_id'] = resourceShareId;
    }
    public withResourceShareId(resourceShareId: string): BatchCreateResourceShareTagsRequest {
        this['resource_share_id'] = resourceShareId;
        return this;
    }
    public set resourceShareId(resourceShareId: string  | undefined) {
        this['resource_share_id'] = resourceShareId;
    }
    public get resourceShareId(): string | undefined {
        return this['resource_share_id'];
    }
    public withBody(body: TagResourceReqBody): BatchCreateResourceShareTagsRequest {
        this['body'] = body;
        return this;
    }
}