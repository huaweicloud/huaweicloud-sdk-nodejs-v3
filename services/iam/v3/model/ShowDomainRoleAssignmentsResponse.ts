import { RoleAssignmentBody } from './RoleAssignmentBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainRoleAssignmentsResponse extends SdkResponse {
    private 'total_num'?: number | undefined;
    private 'role_assignments'?: Array<RoleAssignmentBody> | undefined;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowDomainRoleAssignmentsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum() {
        return this['total_num'];
    }
    public withRoleAssignments(roleAssignments: Array<RoleAssignmentBody>): ShowDomainRoleAssignmentsResponse {
        this['role_assignments'] = roleAssignments;
        return this;
    }
    public set roleAssignments(roleAssignments: Array<RoleAssignmentBody> | undefined) {
        this['role_assignments'] = roleAssignments;
    }
    public get roleAssignments() {
        return this['role_assignments'];
    }
}