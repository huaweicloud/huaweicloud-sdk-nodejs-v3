import { BatchAddSharedTagsRequestBody } from './BatchAddSharedTagsRequestBody';


export class BatchAddSharedTagsRequest {
    private 'share_id'?: string;
    public body?: BatchAddSharedTagsRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): BatchAddSharedTagsRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: BatchAddSharedTagsRequestBody): BatchAddSharedTagsRequest {
        this['body'] = body;
        return this;
    }
}