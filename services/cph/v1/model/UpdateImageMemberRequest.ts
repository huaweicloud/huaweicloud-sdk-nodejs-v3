import { UpdateImageMemberRequestBody } from './UpdateImageMemberRequestBody';


export class UpdateImageMemberRequest {
    private 'image_id'?: string;
    public body?: UpdateImageMemberRequestBody;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): UpdateImageMemberRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withBody(body: UpdateImageMemberRequestBody): UpdateImageMemberRequest {
        this['body'] = body;
        return this;
    }
}