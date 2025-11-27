import { CapacityOverviewResponseData } from './CapacityOverviewResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCapacityViewResponse extends SdkResponse {
    public data?: Array<CapacityOverviewResponseData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<CapacityOverviewResponseData>): ListCapacityViewResponse {
        this['data'] = data;
        return this;
    }
}