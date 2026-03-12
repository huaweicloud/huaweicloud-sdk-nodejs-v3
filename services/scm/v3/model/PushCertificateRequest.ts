import { PushCertificateRequestBody } from './PushCertificateRequestBody';


export class PushCertificateRequest {
    private 'certificate_id'?: string;
    public body?: PushCertificateRequestBody;
    public constructor(certificateId?: string) { 
        this['certificate_id'] = certificateId;
    }
    public withCertificateId(certificateId: string): PushCertificateRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withBody(body: PushCertificateRequestBody): PushCertificateRequest {
        this['body'] = body;
        return this;
    }
}