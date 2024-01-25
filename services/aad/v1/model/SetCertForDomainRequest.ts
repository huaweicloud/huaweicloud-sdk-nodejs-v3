import { CertificateBody } from './CertificateBody';


export class SetCertForDomainRequest {
    public body?: CertificateBody;
    public constructor() { 
    }
    public withBody(body: CertificateBody): SetCertForDomainRequest {
        this['body'] = body;
        return this;
    }
}