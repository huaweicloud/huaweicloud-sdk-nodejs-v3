import { RealEstateCertificateRequestBody } from './RealEstateCertificateRequestBody';


export class RecognizeRealEstateCertificateRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: RealEstateCertificateRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeRealEstateCertificateRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: RealEstateCertificateRequestBody): RecognizeRealEstateCertificateRequest {
        this['body'] = body;
        return this;
    }
}