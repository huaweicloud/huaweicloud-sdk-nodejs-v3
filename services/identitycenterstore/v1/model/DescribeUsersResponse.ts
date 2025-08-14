import { DescribeUserResp } from './DescribeUserResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DescribeUsersResponse extends SdkResponse {
    public users?: Array<DescribeUserResp>;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<DescribeUserResp>): DescribeUsersResponse {
        this['users'] = users;
        return this;
    }
}