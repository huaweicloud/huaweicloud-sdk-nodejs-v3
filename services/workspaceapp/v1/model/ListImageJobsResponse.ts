import { ImageJobInfo } from './ImageJobInfo';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageJobsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<ImageJobInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListImageJobsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<ImageJobInfo>): ListImageJobsResponse {
        this['items'] = items;
        return this;
    }
}