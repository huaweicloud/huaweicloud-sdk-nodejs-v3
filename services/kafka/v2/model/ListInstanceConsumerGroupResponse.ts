import { DescribeGroupsRespGroup } from './DescribeGroupsRespGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceConsumerGroupResponse extends SdkResponse {
    public group?: DescribeGroupsRespGroup;
    public constructor() { 
        super();
    }
    public withGroup(group: DescribeGroupsRespGroup): ListInstanceConsumerGroupResponse {
        this['group'] = group;
        return this;
    }
}