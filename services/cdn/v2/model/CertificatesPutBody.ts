

export class CertificatesPutBody {
    private 'certificate_type'?: string;
    private 'certificate_name'?: string;
    private 'certificate_value'?: string;
    private 'private_key'?: string;
    private 'enc_certificate_value'?: string;
    private 'enc_private_key'?: string;
    public constructor(certificateType?: string, certificateName?: string, certificateValue?: string, privateKey?: string) { 
        this['certificate_type'] = certificateType;
        this['certificate_name'] = certificateName;
        this['certificate_value'] = certificateValue;
        this['private_key'] = privateKey;
    }
    public withCertificateType(certificateType: string): CertificatesPutBody {
        this['certificate_type'] = certificateType;
        return this;
    }
    public set certificateType(certificateType: string  | undefined) {
        this['certificate_type'] = certificateType;
    }
    public get certificateType(): string | undefined {
        return this['certificate_type'];
    }
    public withCertificateName(certificateName: string): CertificatesPutBody {
        this['certificate_name'] = certificateName;
        return this;
    }
    public set certificateName(certificateName: string  | undefined) {
        this['certificate_name'] = certificateName;
    }
    public get certificateName(): string | undefined {
        return this['certificate_name'];
    }
    public withCertificateValue(certificateValue: string): CertificatesPutBody {
        this['certificate_value'] = certificateValue;
        return this;
    }
    public set certificateValue(certificateValue: string  | undefined) {
        this['certificate_value'] = certificateValue;
    }
    public get certificateValue(): string | undefined {
        return this['certificate_value'];
    }
    public withPrivateKey(privateKey: string): CertificatesPutBody {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withEncCertificateValue(encCertificateValue: string): CertificatesPutBody {
        this['enc_certificate_value'] = encCertificateValue;
        return this;
    }
    public set encCertificateValue(encCertificateValue: string  | undefined) {
        this['enc_certificate_value'] = encCertificateValue;
    }
    public get encCertificateValue(): string | undefined {
        return this['enc_certificate_value'];
    }
    public withEncPrivateKey(encPrivateKey: string): CertificatesPutBody {
        this['enc_private_key'] = encPrivateKey;
        return this;
    }
    public set encPrivateKey(encPrivateKey: string  | undefined) {
        this['enc_private_key'] = encPrivateKey;
    }
    public get encPrivateKey(): string | undefined {
        return this['enc_private_key'];
    }
}