import { ApplyHistoryRsp } from './ApplyHistoryRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApplyHistoryResponse extends SdkResponse {
    private 'total_count'?: number;
    public histories?: Array<ApplyHistoryRsp>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowApplyHistoryResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withHistories(histories: Array<ApplyHistoryRsp>): ShowApplyHistoryResponse {
        this['histories'] = histories;
        return this;
    }
}