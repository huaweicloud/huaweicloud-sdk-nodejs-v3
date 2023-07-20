import { CreateAgencyEpPolicyAssignmentReqBodyRoleAssignments } from './CreateAgencyEpPolicyAssignmentReqBodyRoleAssignments';


export class CreateOrDelAgencyEpPolicyAssignmentReqBody {
    private 'role_assignments'?: Array<CreateAgencyEpPolicyAssignmentReqBodyRoleAssignments>;
    public constructor(roleAssignments?: Array<CreateAgencyEpPolicyAssignmentReqBodyRoleAssignments>) { 
        this['role_assignments'] = roleAssignments;
    }
    public withRoleAssignments(roleAssignments: Array<CreateAgencyEpPolicyAssignmentReqBodyRoleAssignments>): CreateOrDelAgencyEpPolicyAssignmentReqBody {
        this['role_assignments'] = roleAssignments;
        return this;
    }
    public set roleAssignments(roleAssignments: Array<CreateAgencyEpPolicyAssignmentReqBodyRoleAssignments>  | undefined) {
        this['role_assignments'] = roleAssignments;
    }
    public get roleAssignments(): Array<CreateAgencyEpPolicyAssignmentReqBodyRoleAssignments> | undefined {
        return this['role_assignments'];
    }
}