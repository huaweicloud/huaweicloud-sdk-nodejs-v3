import { HistoryInfo } from './HistoryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigurationModifyHistoryResponse extends SdkResponse {
    public histories?: Array<HistoryInfo>;
    public constructor() { 
        super();
    }
    public withHistories(histories: Array<HistoryInfo>): ShowConfigurationModifyHistoryResponse {
        this['histories'] = histories;
        return this;
    }
}