import { ConfigurationHistoryRsp } from './ConfigurationHistoryRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowModifyHistoryResponse extends SdkResponse {
    public histories?: Array<ConfigurationHistoryRsp>;
    public constructor() { 
        super();
    }
    public withHistories(histories: Array<ConfigurationHistoryRsp>): ShowModifyHistoryResponse {
        this['histories'] = histories;
        return this;
    }
}