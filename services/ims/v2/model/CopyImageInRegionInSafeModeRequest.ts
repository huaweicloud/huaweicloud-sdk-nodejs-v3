import { CopyImageInRegionRequestBody } from './CopyImageInRegionRequestBody';


export class CopyImageInRegionInSafeModeRequest {
    private 'image_id'?: string;
    public body?: CopyImageInRegionRequestBody;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): CopyImageInRegionInSafeModeRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withBody(body: CopyImageInRegionRequestBody): CopyImageInRegionInSafeModeRequest {
        this['body'] = body;
        return this;
    }
}