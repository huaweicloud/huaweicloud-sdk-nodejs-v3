

export class GmCertificateInfo {
    public source?: string;
    private 'cert_name'?: string;
    private 'cert_id'?: string;
    private 'sign_certificate'?: string;
    private 'sign_certificate_key'?: string;
    private 'enc_certificate'?: string;
    private 'enc_certificate_key'?: string;
    public constructor() { 
    }
    public withSource(source: string): GmCertificateInfo {
        this['source'] = source;
        return this;
    }
    public withCertName(certName: string): GmCertificateInfo {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withCertId(certId: string): GmCertificateInfo {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
    public withSignCertificate(signCertificate: string): GmCertificateInfo {
        this['sign_certificate'] = signCertificate;
        return this;
    }
    public set signCertificate(signCertificate: string  | undefined) {
        this['sign_certificate'] = signCertificate;
    }
    public get signCertificate(): string | undefined {
        return this['sign_certificate'];
    }
    public withSignCertificateKey(signCertificateKey: string): GmCertificateInfo {
        this['sign_certificate_key'] = signCertificateKey;
        return this;
    }
    public set signCertificateKey(signCertificateKey: string  | undefined) {
        this['sign_certificate_key'] = signCertificateKey;
    }
    public get signCertificateKey(): string | undefined {
        return this['sign_certificate_key'];
    }
    public withEncCertificate(encCertificate: string): GmCertificateInfo {
        this['enc_certificate'] = encCertificate;
        return this;
    }
    public set encCertificate(encCertificate: string  | undefined) {
        this['enc_certificate'] = encCertificate;
    }
    public get encCertificate(): string | undefined {
        return this['enc_certificate'];
    }
    public withEncCertificateKey(encCertificateKey: string): GmCertificateInfo {
        this['enc_certificate_key'] = encCertificateKey;
        return this;
    }
    public set encCertificateKey(encCertificateKey: string  | undefined) {
        this['enc_certificate_key'] = encCertificateKey;
    }
    public get encCertificateKey(): string | undefined {
        return this['enc_certificate_key'];
    }
}