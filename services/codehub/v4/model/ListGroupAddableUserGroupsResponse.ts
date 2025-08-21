import { UserGroupDto } from './UserGroupDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupAddableUserGroupsResponse extends SdkResponse {
    public body?: Array<UserGroupDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<UserGroupDto>): ListGroupAddableUserGroupsResponse {
        this['body'] = body;
        return this;
    }
}