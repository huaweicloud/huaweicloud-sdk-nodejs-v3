import { IssueCertificateAuthorityCertificateRequestBody } from './IssueCertificateAuthorityCertificateRequestBody';


export class IssueCertificateAuthorityCertificateRequest {
    private 'ca_id'?: string;
    public body?: IssueCertificateAuthorityCertificateRequestBody;
    public constructor(caId?: string) { 
        this['ca_id'] = caId;
    }
    public withCaId(caId: string): IssueCertificateAuthorityCertificateRequest {
        this['ca_id'] = caId;
        return this;
    }
    public set caId(caId: string  | undefined) {
        this['ca_id'] = caId;
    }
    public get caId(): string | undefined {
        return this['ca_id'];
    }
    public withBody(body: IssueCertificateAuthorityCertificateRequestBody): IssueCertificateAuthorityCertificateRequest {
        this['body'] = body;
        return this;
    }
}