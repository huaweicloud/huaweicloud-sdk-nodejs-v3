import { CreateCertificateRequestBody } from './CreateCertificateRequestBody';


export class CreateCertificateRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    private 'verify_cert_key'?: boolean;
    public body?: CreateCertificateRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateCertificateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateCertificateRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withVerifyCertKey(verifyCertKey: boolean): CreateCertificateRequest {
        this['verify_cert_key'] = verifyCertKey;
        return this;
    }
    public set verifyCertKey(verifyCertKey: boolean  | undefined) {
        this['verify_cert_key'] = verifyCertKey;
    }
    public get verifyCertKey(): boolean | undefined {
        return this['verify_cert_key'];
    }
    public withBody(body: CreateCertificateRequestBody): CreateCertificateRequest {
        this['body'] = body;
        return this;
    }
}