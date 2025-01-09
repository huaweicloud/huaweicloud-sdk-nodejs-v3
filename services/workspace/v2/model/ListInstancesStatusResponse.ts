import { InstanceStatusStatistics } from './InstanceStatusStatistics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesStatusResponse extends SdkResponse {
    public statics?: Array<InstanceStatusStatistics>;
    public constructor() { 
        super();
    }
    public withStatics(statics: Array<InstanceStatusStatistics>): ListInstancesStatusResponse {
        this['statics'] = statics;
        return this;
    }
}