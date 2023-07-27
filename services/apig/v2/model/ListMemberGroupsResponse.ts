import { BasePage } from './BasePage';
import { MemberGroupInfo } from './MemberGroupInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMemberGroupsResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    private 'member_groups'?: Array<MemberGroupInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListMemberGroupsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListMemberGroupsResponse {
        this['total'] = total;
        return this;
    }
    public withMemberGroups(memberGroups: Array<MemberGroupInfo>): ListMemberGroupsResponse {
        this['member_groups'] = memberGroups;
        return this;
    }
    public set memberGroups(memberGroups: Array<MemberGroupInfo>  | undefined) {
        this['member_groups'] = memberGroups;
    }
    public get memberGroups(): Array<MemberGroupInfo> | undefined {
        return this['member_groups'];
    }
}