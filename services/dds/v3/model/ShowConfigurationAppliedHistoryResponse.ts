import { ApplyHistoryInfo } from './ApplyHistoryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigurationAppliedHistoryResponse extends SdkResponse {
    public histories?: Array<ApplyHistoryInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withHistories(histories: Array<ApplyHistoryInfo>): ShowConfigurationAppliedHistoryResponse {
        this['histories'] = histories;
        return this;
    }
    public withTotalCount(totalCount: number): ShowConfigurationAppliedHistoryResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}