import { ApplyHistoryInfo } from './ApplyHistoryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigurationApplyHistoriesResponse extends SdkResponse {
    private 'total_count'?: number;
    public histories?: Array<ApplyHistoryInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListConfigurationApplyHistoriesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withHistories(histories: Array<ApplyHistoryInfo>): ListConfigurationApplyHistoriesResponse {
        this['histories'] = histories;
        return this;
    }
}