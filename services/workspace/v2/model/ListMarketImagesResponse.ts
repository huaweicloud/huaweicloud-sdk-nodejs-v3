import { Image } from './Image';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMarketImagesResponse extends SdkResponse {
    public images?: Array<Image>;
    public constructor() { 
        super();
    }
    public withImages(images: Array<Image>): ListMarketImagesResponse {
        this['images'] = images;
        return this;
    }
}