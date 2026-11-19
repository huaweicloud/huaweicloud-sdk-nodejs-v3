import { AppliedHistoriesResult } from './AppliedHistoriesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppliedHistoriesWithEntitiesResponse extends SdkResponse {
    private 'total_count'?: number;
    public histories?: Array<AppliedHistoriesResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListAppliedHistoriesWithEntitiesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withHistories(histories: Array<AppliedHistoriesResult>): ListAppliedHistoriesWithEntitiesResponse {
        this['histories'] = histories;
        return this;
    }
}