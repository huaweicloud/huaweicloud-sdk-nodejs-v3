import { PhoneImage } from './PhoneImage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudPhoneImagesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'phone_images'?: Array<PhoneImage>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListCloudPhoneImagesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPhoneImages(phoneImages: Array<PhoneImage>): ListCloudPhoneImagesResponse {
        this['phone_images'] = phoneImages;
        return this;
    }
    public set phoneImages(phoneImages: Array<PhoneImage>  | undefined) {
        this['phone_images'] = phoneImages;
    }
    public get phoneImages(): Array<PhoneImage> | undefined {
        return this['phone_images'];
    }
}