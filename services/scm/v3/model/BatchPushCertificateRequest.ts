import { BatchPushCertificateRequestBody } from './BatchPushCertificateRequestBody';


export class BatchPushCertificateRequest {
    private 'certificate_id'?: string;
    public body?: BatchPushCertificateRequestBody;
    public constructor(certificateId?: string) { 
        this['certificate_id'] = certificateId;
    }
    public withCertificateId(certificateId: string): BatchPushCertificateRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withBody(body: BatchPushCertificateRequestBody): BatchPushCertificateRequest {
        this['body'] = body;
        return this;
    }
}