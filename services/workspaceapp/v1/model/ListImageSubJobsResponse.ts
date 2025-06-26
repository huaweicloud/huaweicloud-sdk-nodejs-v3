import { ImageJobDetailInfo } from './ImageJobDetailInfo';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageSubJobsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<ImageJobDetailInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListImageSubJobsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<ImageJobDetailInfo>): ListImageSubJobsResponse {
        this['items'] = items;
        return this;
    }
}