import { CertificateForm } from './CertificateForm';


export class CreateCertificateV2Request {
    public body?: CertificateForm;
    public constructor() { 
    }
    public withBody(body: CertificateForm): CreateCertificateV2Request {
        this['body'] = body;
        return this;
    }
}