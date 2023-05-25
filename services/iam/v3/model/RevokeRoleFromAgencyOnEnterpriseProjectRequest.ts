import { CreateOrDelAgencyEpPolicyAssignmentReqBody } from './CreateOrDelAgencyEpPolicyAssignmentReqBody';


export class RevokeRoleFromAgencyOnEnterpriseProjectRequest {
    private 'Content-Type': string | undefined;
    public body?: CreateOrDelAgencyEpPolicyAssignmentReqBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): RevokeRoleFromAgencyOnEnterpriseProjectRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: CreateOrDelAgencyEpPolicyAssignmentReqBody): RevokeRoleFromAgencyOnEnterpriseProjectRequest {
        this['body'] = body;
        return this;
    }
}