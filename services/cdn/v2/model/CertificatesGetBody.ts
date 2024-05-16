

export class CertificatesGetBody {
    private 'certificate_type'?: string;
    private 'certificate_name'?: string;
    private 'certificate_value'?: string;
    private 'enc_certificate_value'?: string;
    private 'expire_time'?: number;
    public constructor() { 
    }
    public withCertificateType(certificateType: string): CertificatesGetBody {
        this['certificate_type'] = certificateType;
        return this;
    }
    public set certificateType(certificateType: string  | undefined) {
        this['certificate_type'] = certificateType;
    }
    public get certificateType(): string | undefined {
        return this['certificate_type'];
    }
    public withCertificateName(certificateName: string): CertificatesGetBody {
        this['certificate_name'] = certificateName;
        return this;
    }
    public set certificateName(certificateName: string  | undefined) {
        this['certificate_name'] = certificateName;
    }
    public get certificateName(): string | undefined {
        return this['certificate_name'];
    }
    public withCertificateValue(certificateValue: string): CertificatesGetBody {
        this['certificate_value'] = certificateValue;
        return this;
    }
    public set certificateValue(certificateValue: string  | undefined) {
        this['certificate_value'] = certificateValue;
    }
    public get certificateValue(): string | undefined {
        return this['certificate_value'];
    }
    public withEncCertificateValue(encCertificateValue: string): CertificatesGetBody {
        this['enc_certificate_value'] = encCertificateValue;
        return this;
    }
    public set encCertificateValue(encCertificateValue: string  | undefined) {
        this['enc_certificate_value'] = encCertificateValue;
    }
    public get encCertificateValue(): string | undefined {
        return this['enc_certificate_value'];
    }
    public withExpireTime(expireTime: number): CertificatesGetBody {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
}