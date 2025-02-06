import { GroupMembershipDto } from './GroupMembershipDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupMembershipsResponse extends SdkResponse {
    private 'group_memberships'?: Array<GroupMembershipDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withGroupMemberships(groupMemberships: Array<GroupMembershipDto>): ListGroupMembershipsResponse {
        this['group_memberships'] = groupMemberships;
        return this;
    }
    public set groupMemberships(groupMemberships: Array<GroupMembershipDto>  | undefined) {
        this['group_memberships'] = groupMemberships;
    }
    public get groupMemberships(): Array<GroupMembershipDto> | undefined {
        return this['group_memberships'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListGroupMembershipsResponse {
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