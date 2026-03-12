import { RevokeCertificateRequestBody } from './RevokeCertificateRequestBody';


export class RevokeCertificateAuthorityRequest {
    private 'ca_id'?: string;
    public body?: RevokeCertificateRequestBody;
    public constructor(caId?: string) { 
        this['ca_id'] = caId;
    }
    public withCaId(caId: string): RevokeCertificateAuthorityRequest {
        this['ca_id'] = caId;
        return this;
    }
    public set caId(caId: string  | undefined) {
        this['ca_id'] = caId;
    }
    public get caId(): string | undefined {
        return this['ca_id'];
    }
    public withBody(body: RevokeCertificateRequestBody): RevokeCertificateAuthorityRequest {
        this['body'] = body;
        return this;
    }
}