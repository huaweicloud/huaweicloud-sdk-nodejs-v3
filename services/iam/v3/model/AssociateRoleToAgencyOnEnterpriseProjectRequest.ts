import { CreateAgencyEpPolicyAssignmentReqBody } from './CreateAgencyEpPolicyAssignmentReqBody';


export class AssociateRoleToAgencyOnEnterpriseProjectRequest {
    private 'Content-Type'?: string;
    public body?: CreateAgencyEpPolicyAssignmentReqBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): AssociateRoleToAgencyOnEnterpriseProjectRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateAgencyEpPolicyAssignmentReqBody): AssociateRoleToAgencyOnEnterpriseProjectRequest {
        this['body'] = body;
        return this;
    }
}