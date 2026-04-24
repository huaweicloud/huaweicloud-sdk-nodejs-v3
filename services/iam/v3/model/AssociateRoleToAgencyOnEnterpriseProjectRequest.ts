import { CreateAgencyEpPolicyAssignmentReqBody } from './CreateAgencyEpPolicyAssignmentReqBody';


export class AssociateRoleToAgencyOnEnterpriseProjectRequest {
    public body?: CreateAgencyEpPolicyAssignmentReqBody;
    public constructor() { 
    }
    public withBody(body: CreateAgencyEpPolicyAssignmentReqBody): AssociateRoleToAgencyOnEnterpriseProjectRequest {
        this['body'] = body;
        return this;
    }
}