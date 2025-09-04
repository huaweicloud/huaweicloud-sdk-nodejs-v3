

export class DeviceCertificateSimple {
    private 'certificate_id'?: string;
    private 'common_name'?: string;
    private 'expiry_date'?: string;
    public fingerprint?: string;
    public status?: string;
    public constructor() { 
    }
    public withCertificateId(certificateId: string): DeviceCertificateSimple {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withCommonName(commonName: string): DeviceCertificateSimple {
        this['common_name'] = commonName;
        return this;
    }
    public set commonName(commonName: string  | undefined) {
        this['common_name'] = commonName;
    }
    public get commonName(): string | undefined {
        return this['common_name'];
    }
    public withExpiryDate(expiryDate: string): DeviceCertificateSimple {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): string | undefined {
        return this['expiry_date'];
    }
    public withFingerprint(fingerprint: string): DeviceCertificateSimple {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withStatus(status: string): DeviceCertificateSimple {
        this['status'] = status;
        return this;
    }
}