import { BatchAddOrDeleteTagsRequestBody } from './BatchAddOrDeleteTagsRequestBody';


export class BatchAddOrDeleteTagsRequest {
    private 'image_id'?: string;
    public body?: BatchAddOrDeleteTagsRequestBody;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): BatchAddOrDeleteTagsRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withBody(body: BatchAddOrDeleteTagsRequestBody): BatchAddOrDeleteTagsRequest {
        this['body'] = body;
        return this;
    }
}