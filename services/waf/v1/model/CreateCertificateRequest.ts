import { CreateCertificateRequestBody } from './CreateCertificateRequestBody';


export class CreateCertificateRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public body?: CreateCertificateRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateCertificateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateCertificateRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withBody(body: CreateCertificateRequestBody): CreateCertificateRequest {
        this['body'] = body;
        return this;
    }
}