import { CertificateBody } from './CertificateBody';


export class CreateCertificateRequest {
    public body?: CertificateBody;
    public constructor() { 
    }
    public withBody(body: CertificateBody): CreateCertificateRequest {
        this['body'] = body;
        return this;
    }
}