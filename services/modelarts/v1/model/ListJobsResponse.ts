import { PoolJob } from './PoolJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<PoolJob>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListJobsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<PoolJob>): ListJobsResponse {
        this['items'] = items;
        return this;
    }
}