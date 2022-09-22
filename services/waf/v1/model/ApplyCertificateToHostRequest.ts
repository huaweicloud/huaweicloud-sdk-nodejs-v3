import { ApplyCertificateToHostRequestBody } from './ApplyCertificateToHostRequestBody';


export class ApplyCertificateToHostRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'certificate_id': string | undefined;
    public body?: ApplyCertificateToHostRequestBody;
    public constructor(contentType?: any, certificateId?: any) { 
        this['Content-Type'] = contentType;
        this['certificate_id'] = certificateId;
    }
    public withContentType(contentType: string): ApplyCertificateToHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ApplyCertificateToHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withCertificateId(certificateId: string): ApplyCertificateToHostRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId() {
        return this['certificate_id'];
    }
    public withBody(body: ApplyCertificateToHostRequestBody): ApplyCertificateToHostRequest {
        this['body'] = body;
        return this;
    }
}