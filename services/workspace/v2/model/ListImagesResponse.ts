import { ImageInfo } from './ImageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImagesResponse extends SdkResponse {
    public images?: Array<ImageInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withImages(images: Array<ImageInfo>): ListImagesResponse {
        this['images'] = images;
        return this;
    }
    public withTotalCount(totalCount: number): ListImagesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}