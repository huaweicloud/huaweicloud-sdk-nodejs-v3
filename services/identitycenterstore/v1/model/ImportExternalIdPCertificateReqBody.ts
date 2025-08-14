

export class ImportExternalIdPCertificateReqBody {
    private 'x509_certificate_in_pem'?: string;
    private 'certificate_use'?: ImportExternalIdPCertificateReqBodyCertificateUseEnum | string;
    public constructor(x509CertificateInPem?: string, certificateUse?: string) { 
        this['x509_certificate_in_pem'] = x509CertificateInPem;
        this['certificate_use'] = certificateUse;
    }
    public withX509CertificateInPem(x509CertificateInPem: string): ImportExternalIdPCertificateReqBody {
        this['x509_certificate_in_pem'] = x509CertificateInPem;
        return this;
    }
    public set x509CertificateInPem(x509CertificateInPem: string  | undefined) {
        this['x509_certificate_in_pem'] = x509CertificateInPem;
    }
    public get x509CertificateInPem(): string | undefined {
        return this['x509_certificate_in_pem'];
    }
    public withCertificateUse(certificateUse: ImportExternalIdPCertificateReqBodyCertificateUseEnum | string): ImportExternalIdPCertificateReqBody {
        this['certificate_use'] = certificateUse;
        return this;
    }
    public set certificateUse(certificateUse: ImportExternalIdPCertificateReqBodyCertificateUseEnum | string  | undefined) {
        this['certificate_use'] = certificateUse;
    }
    public get certificateUse(): ImportExternalIdPCertificateReqBodyCertificateUseEnum | string | undefined {
        return this['certificate_use'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImportExternalIdPCertificateReqBodyCertificateUseEnum {
    SIGNING = 'SIGNING'
}
