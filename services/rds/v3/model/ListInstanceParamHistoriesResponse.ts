import { ParamGroupHistoryResult } from './ParamGroupHistoryResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceParamHistoriesResponse extends SdkResponse {
    private 'total_count'?: number;
    public histories?: Array<ParamGroupHistoryResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListInstanceParamHistoriesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withHistories(histories: Array<ParamGroupHistoryResult>): ListInstanceParamHistoriesResponse {
        this['histories'] = histories;
        return this;
    }
}