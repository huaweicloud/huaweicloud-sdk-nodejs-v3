
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ConfirmImageUploadResponse extends SdkResponse {
    public id?: string;
    private 'image_url'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ConfirmImageUploadResponse {
        this['id'] = id;
        return this;
    }
    public withImageUrl(imageUrl: string): ConfirmImageUploadResponse {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
}