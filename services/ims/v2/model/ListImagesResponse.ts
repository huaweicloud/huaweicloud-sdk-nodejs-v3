import { ImageInfo } from './ImageInfo';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImagesResponse extends SdkResponse {
    public images?: Array<ImageInfo>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withImages(images: Array<ImageInfo>): ListImagesResponse {
        this['images'] = images;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListImagesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}