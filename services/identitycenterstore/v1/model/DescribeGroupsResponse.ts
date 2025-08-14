import { DescribeGroupResp } from './DescribeGroupResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DescribeGroupsResponse extends SdkResponse {
    public groups?: Array<DescribeGroupResp>;
    public constructor() { 
        super();
    }
    public withGroups(groups: Array<DescribeGroupResp>): DescribeGroupsResponse {
        this['groups'] = groups;
        return this;
    }
}