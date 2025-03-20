import { ImageCacheDetail } from './ImageCacheDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageCachesResponse extends SdkResponse {
    private 'image_caches'?: Array<ImageCacheDetail>;
    public constructor() { 
        super();
    }
    public withImageCaches(imageCaches: Array<ImageCacheDetail>): ListImageCachesResponse {
        this['image_caches'] = imageCaches;
        return this;
    }
    public set imageCaches(imageCaches: Array<ImageCacheDetail>  | undefined) {
        this['image_caches'] = imageCaches;
    }
    public get imageCaches(): Array<ImageCacheDetail> | undefined {
        return this['image_caches'];
    }
}