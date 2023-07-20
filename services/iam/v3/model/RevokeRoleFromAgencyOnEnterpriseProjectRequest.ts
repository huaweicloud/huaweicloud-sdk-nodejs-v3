import { CreateOrDelAgencyEpPolicyAssignmentReqBody } from './CreateOrDelAgencyEpPolicyAssignmentReqBody';


export class RevokeRoleFromAgencyOnEnterpriseProjectRequest {
    private 'Content-Type'?: string;
    public body?: CreateOrDelAgencyEpPolicyAssignmentReqBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): RevokeRoleFromAgencyOnEnterpriseProjectRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateOrDelAgencyEpPolicyAssignmentReqBody): RevokeRoleFromAgencyOnEnterpriseProjectRequest {
        this['body'] = body;
        return this;
    }
}