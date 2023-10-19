import { ParamGroupHistoryResponse } from './ParamGroupHistoryResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListModifyHistoryResponse extends SdkResponse {
    private 'total_count'?: number;
    public histories?: Array<ParamGroupHistoryResponse>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListModifyHistoryResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withHistories(histories: Array<ParamGroupHistoryResponse>): ListModifyHistoryResponse {
        this['histories'] = histories;
        return this;
    }
}