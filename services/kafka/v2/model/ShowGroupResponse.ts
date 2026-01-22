import { DescribeGroupsRespGroup } from './DescribeGroupsRespGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGroupResponse extends SdkResponse {
    public group?: DescribeGroupsRespGroup;
    public constructor() { 
        super();
    }
    public withGroup(group: DescribeGroupsRespGroup): ShowGroupResponse {
        this['group'] = group;
        return this;
    }
}