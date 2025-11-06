import { GroupMemberDetailDto } from './GroupMemberDetailDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupMembersResponse extends SdkResponse {
    public body?: Array<GroupMemberDetailDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<GroupMemberDetailDto>): ListGroupMembersResponse {
        this['body'] = body;
        return this;
    }
}