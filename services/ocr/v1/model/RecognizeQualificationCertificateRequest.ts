import { QualificationCertificateRequestBody } from './QualificationCertificateRequestBody';


export class RecognizeQualificationCertificateRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: QualificationCertificateRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeQualificationCertificateRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: QualificationCertificateRequestBody): RecognizeQualificationCertificateRequest {
        this['body'] = body;
        return this;
    }
}