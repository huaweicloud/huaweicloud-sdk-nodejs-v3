import { CertificateForm } from './CertificateForm';


export class UpdateCertificateV2Request {
    private 'certificate_id'?: string;
    public body?: CertificateForm;
    public constructor(certificateId?: string) { 
        this['certificate_id'] = certificateId;
    }
    public withCertificateId(certificateId: string): UpdateCertificateV2Request {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withBody(body: CertificateForm): UpdateCertificateV2Request {
        this['body'] = body;
        return this;
    }
}