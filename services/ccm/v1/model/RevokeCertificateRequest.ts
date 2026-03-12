import { RevokeCertificateRequestBody } from './RevokeCertificateRequestBody';


export class RevokeCertificateRequest {
    private 'certificate_id'?: string;
    public body?: RevokeCertificateRequestBody;
    public constructor(certificateId?: string) { 
        this['certificate_id'] = certificateId;
    }
    public withCertificateId(certificateId: string): RevokeCertificateRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withBody(body: RevokeCertificateRequestBody): RevokeCertificateRequest {
        this['body'] = body;
        return this;
    }
}