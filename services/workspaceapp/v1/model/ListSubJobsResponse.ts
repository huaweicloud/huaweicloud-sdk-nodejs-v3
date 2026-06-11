import { PageResp } from './PageResp';
import { SubJobDetailInfo } from './SubJobDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubJobsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<SubJobDetailInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListSubJobsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<SubJobDetailInfo>): ListSubJobsResponse {
        this['items'] = items;
        return this;
    }
}