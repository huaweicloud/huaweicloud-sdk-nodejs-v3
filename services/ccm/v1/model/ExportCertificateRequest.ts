import { ExportCertificateRequestBody } from './ExportCertificateRequestBody';


export class ExportCertificateRequest {
    private 'certificate_id'?: string;
    public body?: ExportCertificateRequestBody;
    public constructor(certificateId?: string) { 
        this['certificate_id'] = certificateId;
    }
    public withCertificateId(certificateId: string): ExportCertificateRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withBody(body: ExportCertificateRequestBody): ExportCertificateRequest {
        this['body'] = body;
        return this;
    }
}