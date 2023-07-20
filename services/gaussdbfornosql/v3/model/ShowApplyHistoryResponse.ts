import { ApplyHistoryRsp } from './ApplyHistoryRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApplyHistoryResponse extends SdkResponse {
    public histories?: Array<ApplyHistoryRsp>;
    public constructor() { 
        super();
    }
    public withHistories(histories: Array<ApplyHistoryRsp>): ShowApplyHistoryResponse {
        this['histories'] = histories;
        return this;
    }
}