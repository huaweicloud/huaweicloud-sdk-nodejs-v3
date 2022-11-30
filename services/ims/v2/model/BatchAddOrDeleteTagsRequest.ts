import { BatchAddOrDeleteTagsRequestBody } from './BatchAddOrDeleteTagsRequestBody';


export class BatchAddOrDeleteTagsRequest {
    private 'image_id': string | undefined;
    public body?: BatchAddOrDeleteTagsRequestBody;
    public constructor(imageId?: any) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): BatchAddOrDeleteTagsRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withBody(body: BatchAddOrDeleteTagsRequestBody): BatchAddOrDeleteTagsRequest {
        this['body'] = body;
        return this;
    }
}