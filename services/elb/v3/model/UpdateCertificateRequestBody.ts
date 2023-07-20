import { UpdateCertificateOption } from './UpdateCertificateOption';


export class UpdateCertificateRequestBody {
    public certificate?: UpdateCertificateOption;
    public constructor(certificate?: UpdateCertificateOption) { 
        this['certificate'] = certificate;
    }
    public withCertificate(certificate: UpdateCertificateOption): UpdateCertificateRequestBody {
        this['certificate'] = certificate;
        return this;
    }
}