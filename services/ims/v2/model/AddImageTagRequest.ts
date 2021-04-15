import { AddImageTagRequestBody } from './AddImageTagRequestBody';


export class AddImageTagRequest {
    private 'image_id': string | undefined;
    public body?: AddImageTagRequestBody;
    public constructor(imageId?: any) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): AddImageTagRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withBody(body: AddImageTagRequestBody): AddImageTagRequest {
        this['body'] = body;
        return this;
    }
}