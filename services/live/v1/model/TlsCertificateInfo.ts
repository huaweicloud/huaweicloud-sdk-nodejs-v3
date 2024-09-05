

export class TlsCertificateInfo {
    public source?: string;
    private 'cert_name'?: string;
    private 'cert_id'?: string;
    public certificate?: string;
    private 'certificate_key'?: string;
    public constructor() { 
    }
    public withSource(source: string): TlsCertificateInfo {
        this['source'] = source;
        return this;
    }
    public withCertName(certName: string): TlsCertificateInfo {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withCertId(certId: string): TlsCertificateInfo {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
    public withCertificate(certificate: string): TlsCertificateInfo {
        this['certificate'] = certificate;
        return this;
    }
    public withCertificateKey(certificateKey: string): TlsCertificateInfo {
        this['certificate_key'] = certificateKey;
        return this;
    }
    public set certificateKey(certificateKey: string  | undefined) {
        this['certificate_key'] = certificateKey;
    }
    public get certificateKey(): string | undefined {
        return this['certificate_key'];
    }
}