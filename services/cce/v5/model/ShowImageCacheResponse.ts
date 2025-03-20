import { ImageCacheDetail } from './ImageCacheDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImageCacheResponse extends SdkResponse {
    private 'image_cache'?: ImageCacheDetail;
    public constructor() { 
        super();
    }
    public withImageCache(imageCache: ImageCacheDetail): ShowImageCacheResponse {
        this['image_cache'] = imageCache;
        return this;
    }
    public set imageCache(imageCache: ImageCacheDetail  | undefined) {
        this['image_cache'] = imageCache;
    }
    public get imageCache(): ImageCacheDetail | undefined {
        return this['image_cache'];
    }
}