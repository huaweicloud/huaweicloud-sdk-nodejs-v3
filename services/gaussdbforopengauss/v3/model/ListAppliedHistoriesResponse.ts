import { AppliedHistoriesResult } from './AppliedHistoriesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppliedHistoriesResponse extends SdkResponse {
    private 'total_count'?: number;
    public histories?: Array<AppliedHistoriesResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListAppliedHistoriesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withHistories(histories: Array<AppliedHistoriesResult>): ListAppliedHistoriesResponse {
        this['histories'] = histories;
        return this;
    }
}