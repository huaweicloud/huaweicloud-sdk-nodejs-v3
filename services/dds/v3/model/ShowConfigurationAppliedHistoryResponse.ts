import { ApplyHistoryInfo } from './ApplyHistoryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigurationAppliedHistoryResponse extends SdkResponse {
    public histories?: Array<ApplyHistoryInfo>;
    public constructor() { 
        super();
    }
    public withHistories(histories: Array<ApplyHistoryInfo>): ShowConfigurationAppliedHistoryResponse {
        this['histories'] = histories;
        return this;
    }
}