import { CreateCertificateOption } from './CreateCertificateOption';


export class CreateCertificateRequestBody {
    public certificate?: CreateCertificateOption;
    public constructor(certificate?: CreateCertificateOption) { 
        this['certificate'] = certificate;
    }
    public withCertificate(certificate: CreateCertificateOption): CreateCertificateRequestBody {
        this['certificate'] = certificate;
        return this;
    }
}