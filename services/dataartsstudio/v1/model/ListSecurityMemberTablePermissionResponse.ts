import { MemberPermission } from './MemberPermission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityMemberTablePermissionResponse extends SdkResponse {
    public total?: number;
    private 'member_permission_list'?: Array<MemberPermission>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityMemberTablePermissionResponse {
        this['total'] = total;
        return this;
    }
    public withMemberPermissionList(memberPermissionList: Array<MemberPermission>): ListSecurityMemberTablePermissionResponse {
        this['member_permission_list'] = memberPermissionList;
        return this;
    }
    public set memberPermissionList(memberPermissionList: Array<MemberPermission>  | undefined) {
        this['member_permission_list'] = memberPermissionList;
    }
    public get memberPermissionList(): Array<MemberPermission> | undefined {
        return this['member_permission_list'];
    }
}