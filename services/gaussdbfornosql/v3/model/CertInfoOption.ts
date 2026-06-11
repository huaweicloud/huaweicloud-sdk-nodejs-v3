

export class CertInfoOption {
    private 'cert_id'?: string;
    private 'cert_type'?: string;
    public constructor(certId?: string, certType?: string) { 
        this['cert_id'] = certId;
        this['cert_type'] = certType;
    }
    public withCertId(certId: string): CertInfoOption {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
    public withCertType(certType: string): CertInfoOption {
        this['cert_type'] = certType;
        return this;
    }
    public set certType(certType: string  | undefined) {
        this['cert_type'] = certType;
    }
    public get certType(): string | undefined {
        return this['cert_type'];
    }
}