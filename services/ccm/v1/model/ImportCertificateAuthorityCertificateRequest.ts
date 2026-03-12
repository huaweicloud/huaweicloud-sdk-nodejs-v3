import { ImportCertificateAuthorityCertificateRequestBody } from './ImportCertificateAuthorityCertificateRequestBody';


export class ImportCertificateAuthorityCertificateRequest {
    private 'ca_id'?: string;
    public body?: ImportCertificateAuthorityCertificateRequestBody;
    public constructor(caId?: string) { 
        this['ca_id'] = caId;
    }
    public withCaId(caId: string): ImportCertificateAuthorityCertificateRequest {
        this['ca_id'] = caId;
        return this;
    }
    public set caId(caId: string  | undefined) {
        this['ca_id'] = caId;
    }
    public get caId(): string | undefined {
        return this['ca_id'];
    }
    public withBody(body: ImportCertificateAuthorityCertificateRequestBody): ImportCertificateAuthorityCertificateRequest {
        this['body'] = body;
        return this;
    }
}