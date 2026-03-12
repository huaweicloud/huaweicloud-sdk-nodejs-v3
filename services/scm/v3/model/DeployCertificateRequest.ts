import { DeployCertificateRequestBody } from './DeployCertificateRequestBody';


export class DeployCertificateRequest {
    private 'certificate_id'?: string;
    public body?: DeployCertificateRequestBody;
    public constructor(certificateId?: string) { 
        this['certificate_id'] = certificateId;
    }
    public withCertificateId(certificateId: string): DeployCertificateRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withBody(body: DeployCertificateRequestBody): DeployCertificateRequest {
        this['body'] = body;
        return this;
    }
}