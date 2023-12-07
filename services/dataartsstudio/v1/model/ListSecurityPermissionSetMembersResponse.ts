import { PermissionSetMember } from './PermissionSetMember';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityPermissionSetMembersResponse extends SdkResponse {
    public total?: number;
    private 'permission_set_members'?: Array<PermissionSetMember>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityPermissionSetMembersResponse {
        this['total'] = total;
        return this;
    }
    public withPermissionSetMembers(permissionSetMembers: Array<PermissionSetMember>): ListSecurityPermissionSetMembersResponse {
        this['permission_set_members'] = permissionSetMembers;
        return this;
    }
    public set permissionSetMembers(permissionSetMembers: Array<PermissionSetMember>  | undefined) {
        this['permission_set_members'] = permissionSetMembers;
    }
    public get permissionSetMembers(): Array<PermissionSetMember> | undefined {
        return this['permission_set_members'];
    }
}