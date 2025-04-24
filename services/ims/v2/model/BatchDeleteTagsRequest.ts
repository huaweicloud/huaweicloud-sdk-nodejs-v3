import { BatchDeleteTagsRequestBody } from './BatchDeleteTagsRequestBody';


export class BatchDeleteTagsRequest {
    private 'image_id'?: string;
    public body?: BatchDeleteTagsRequestBody;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): BatchDeleteTagsRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withBody(body: BatchDeleteTagsRequestBody): BatchDeleteTagsRequest {
        this['body'] = body;
        return this;
    }
}