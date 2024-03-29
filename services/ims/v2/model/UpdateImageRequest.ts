import { UpdateImageRequestBody } from './UpdateImageRequestBody';


export class UpdateImageRequest {
    private 'image_id'?: string;
    public body?: Array<UpdateImageRequestBody>;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): UpdateImageRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withBody(body: Array<UpdateImageRequestBody>): UpdateImageRequest {
        this['body'] = body;
        return this;
    }
}