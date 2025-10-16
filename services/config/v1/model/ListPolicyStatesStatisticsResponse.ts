import { PolicyStatesStatistics } from './PolicyStatesStatistics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyStatesStatisticsResponse extends SdkResponse {
    public value?: Array<PolicyStatesStatistics>;
    public constructor() { 
        super();
    }
    public withValue(value: Array<PolicyStatesStatistics>): ListPolicyStatesStatisticsResponse {
        this['value'] = value;
        return this;
    }
}