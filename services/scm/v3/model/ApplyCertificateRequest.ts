import { ApplyCertificateRequestBody } from './ApplyCertificateRequestBody';


export class ApplyCertificateRequest {
    private 'certificate_id'?: string;
    public body?: ApplyCertificateRequestBody;
    public constructor(certificateId?: string) { 
        this['certificate_id'] = certificateId;
    }
    public withCertificateId(certificateId: string): ApplyCertificateRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withBody(body: ApplyCertificateRequestBody): ApplyCertificateRequest {
        this['body'] = body;
        return this;
    }
}