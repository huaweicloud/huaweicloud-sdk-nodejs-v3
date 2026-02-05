import { ApplyHistory } from './ApplyHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigurationApplyHistoriesResponse extends SdkResponse {
    public histories?: Array<ApplyHistory>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withHistories(histories: Array<ApplyHistory>): ListConfigurationApplyHistoriesResponse {
        this['histories'] = histories;
        return this;
    }
    public withTotal(total: number): ListConfigurationApplyHistoriesResponse {
        this['total'] = total;
        return this;
    }
}