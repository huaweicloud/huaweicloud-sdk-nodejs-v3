import { CopyImageCrossRegionRequestBody } from './CopyImageCrossRegionRequestBody';


export class CopyImageCrossRegionRequest {
    private 'image_id': string | undefined;
    public body?: CopyImageCrossRegionRequestBody;
    public constructor(imageId?: any) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): CopyImageCrossRegionRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withBody(body: CopyImageCrossRegionRequestBody): CopyImageCrossRegionRequest {
        this['body'] = body;
        return this;
    }
}