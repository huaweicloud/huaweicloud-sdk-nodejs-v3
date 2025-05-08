import { GroupMemberEntity } from './GroupMemberEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceConsumerGroupMembersResponse extends SdkResponse {
    public members?: Array<GroupMemberEntity>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withMembers(members: Array<GroupMemberEntity>): ListInstanceConsumerGroupMembersResponse {
        this['members'] = members;
        return this;
    }
    public withTotal(total: number): ListInstanceConsumerGroupMembersResponse {
        this['total'] = total;
        return this;
    }
}