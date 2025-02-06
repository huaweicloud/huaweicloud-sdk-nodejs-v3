import { GroupMembershipItem } from './GroupMembershipItem';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupMembershipsForMemberResponse extends SdkResponse {
    private 'group_memberships'?: Array<GroupMembershipItem>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withGroupMemberships(groupMemberships: Array<GroupMembershipItem>): ListGroupMembershipsForMemberResponse {
        this['group_memberships'] = groupMemberships;
        return this;
    }
    public set groupMemberships(groupMemberships: Array<GroupMembershipItem>  | undefined) {
        this['group_memberships'] = groupMemberships;
    }
    public get groupMemberships(): Array<GroupMembershipItem> | undefined {
        return this['group_memberships'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListGroupMembershipsForMemberResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}