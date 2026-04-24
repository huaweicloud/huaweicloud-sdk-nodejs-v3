import { CreateOrDelAgencyEpPolicyAssignmentReqBody } from './CreateOrDelAgencyEpPolicyAssignmentReqBody';


export class RevokeRoleFromAgencyOnEnterpriseProjectRequest {
    public body?: CreateOrDelAgencyEpPolicyAssignmentReqBody;
    public constructor() { 
    }
    public withBody(body: CreateOrDelAgencyEpPolicyAssignmentReqBody): RevokeRoleFromAgencyOnEnterpriseProjectRequest {
        this['body'] = body;
        return this;
    }
}