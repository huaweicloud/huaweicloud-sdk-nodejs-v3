import { ApplyCertificateToHostRequestBody } from './ApplyCertificateToHostRequestBody';


export class ApplyCertificateToHostRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    private 'certificate_id'?: string;
    public body?: ApplyCertificateToHostRequestBody;
    public constructor(contentType?: string, certificateId?: string) { 
        this['Content-Type'] = contentType;
        this['certificate_id'] = certificateId;
    }
    public withContentType(contentType: string): ApplyCertificateToHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ApplyCertificateToHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCertificateId(certificateId: string): ApplyCertificateToHostRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withBody(body: ApplyCertificateToHostRequestBody): ApplyCertificateToHostRequest {
        this['body'] = body;
        return this;
    }
}