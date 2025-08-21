import { GroupBatchAddMemberDto } from './GroupBatchAddMemberDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupAddableMembersResponse extends SdkResponse {
    public body?: Array<GroupBatchAddMemberDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<GroupBatchAddMemberDto>): ListGroupAddableMembersResponse {
        this['body'] = body;
        return this;
    }
}