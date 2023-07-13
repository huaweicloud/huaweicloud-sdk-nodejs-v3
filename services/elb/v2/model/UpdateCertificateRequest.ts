import { UpdateCertificateRequestBody } from './UpdateCertificateRequestBody';


export class UpdateCertificateRequest {
    private 'certificate_id': string | undefined;
    public body?: UpdateCertificateRequestBody;
    public constructor(certificateId?: any) { 
        this['certificate_id'] = certificateId;
    }
    public withCertificateId(certificateId: string): UpdateCertificateRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId() {
        return this['certificate_id'];
    }
    public withBody(body: UpdateCertificateRequestBody): UpdateCertificateRequest {
        this['body'] = body;
        return this;
    }
}