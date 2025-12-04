import { AddImageMemberRequestBody } from './AddImageMemberRequestBody';


export class AddImageMemberRequest {
    private 'image_id'?: string;
    public body?: AddImageMemberRequestBody;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): AddImageMemberRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withBody(body: AddImageMemberRequestBody): AddImageMemberRequest {
        this['body'] = body;
        return this;
    }
}