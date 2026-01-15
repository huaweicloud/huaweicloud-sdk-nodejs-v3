import { BaseResp } from './BaseResp';
import { SubscriptionListResp } from './SubscriptionListResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSubscriptionListsResponse extends SdkResponse {
    private 'total_count'?: number;
    public jobs?: SubscriptionListResp;
    public constructor(totalCount?: number, jobs?: SubscriptionListResp) { 
        super();
        this['total_count'] = totalCount;
        this['jobs'] = jobs;
    }
    public withTotalCount(totalCount: number): ShowSubscriptionListsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withJobs(jobs: SubscriptionListResp): ShowSubscriptionListsResponse {
        this['jobs'] = jobs;
        return this;
    }
}