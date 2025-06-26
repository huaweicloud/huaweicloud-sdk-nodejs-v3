import { ImageJobDetailInfo } from './ImageJobDetailInfo';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubJobsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<ImageJobDetailInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListSubJobsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<ImageJobDetailInfo>): ListSubJobsResponse {
        this['items'] = items;
        return this;
    }
}