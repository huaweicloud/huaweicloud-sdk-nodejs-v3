import { ConfigurationModifyHistoryInfo } from './ConfigurationModifyHistoryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceConfigurationModifyHistoryResponse extends SdkResponse {
    public histories?: Array<ConfigurationModifyHistoryInfo>;
    public constructor() { 
        super();
    }
    public withHistories(histories: Array<ConfigurationModifyHistoryInfo>): ShowInstanceConfigurationModifyHistoryResponse {
        this['histories'] = histories;
        return this;
    }
}