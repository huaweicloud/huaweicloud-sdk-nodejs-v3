import { CopyImageInRegionRequestBody } from './CopyImageInRegionRequestBody';


export class CopyImageInRegionRequest {
    private 'image_id'?: string;
    public body?: CopyImageInRegionRequestBody;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): CopyImageInRegionRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withBody(body: CopyImageInRegionRequestBody): CopyImageInRegionRequest {
        this['body'] = body;
        return this;
    }
}