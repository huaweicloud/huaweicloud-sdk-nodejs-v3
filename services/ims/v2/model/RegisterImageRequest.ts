import { RegisterImageRequestBody } from './RegisterImageRequestBody';


export class RegisterImageRequest {
    private 'image_id'?: string;
    public body?: RegisterImageRequestBody;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): RegisterImageRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withBody(body: RegisterImageRequestBody): RegisterImageRequest {
        this['body'] = body;
        return this;
    }
}