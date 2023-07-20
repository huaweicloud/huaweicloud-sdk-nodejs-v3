import { CopyImageCrossRegionRequestBody } from './CopyImageCrossRegionRequestBody';


export class CopyImageCrossRegionRequest {
    private 'image_id'?: string;
    public body?: CopyImageCrossRegionRequestBody;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): CopyImageCrossRegionRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withBody(body: CopyImageCrossRegionRequestBody): CopyImageCrossRegionRequest {
        this['body'] = body;
        return this;
    }
}