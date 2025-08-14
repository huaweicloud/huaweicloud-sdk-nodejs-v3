

export class SpCertificateDto {
    private 'certificate_id'?: string;
    public x509certificate?: string;
    public algorithm?: string;
    private 'expiry_date'?: number;
    public state?: SpCertificateDtoStateEnum | string;
    public constructor(certificateId?: string, x509certificate?: string, algorithm?: string, expiryDate?: number, state?: string) { 
        this['certificate_id'] = certificateId;
        this['x509certificate'] = x509certificate;
        this['algorithm'] = algorithm;
        this['expiry_date'] = expiryDate;
        this['state'] = state;
    }
    public withCertificateId(certificateId: string): SpCertificateDto {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withX509certificate(x509certificate: string): SpCertificateDto {
        this['x509certificate'] = x509certificate;
        return this;
    }
    public withAlgorithm(algorithm: string): SpCertificateDto {
        this['algorithm'] = algorithm;
        return this;
    }
    public withExpiryDate(expiryDate: number): SpCertificateDto {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: number  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): number | undefined {
        return this['expiry_date'];
    }
    public withState(state: SpCertificateDtoStateEnum | string): SpCertificateDto {
        this['state'] = state;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SpCertificateDtoStateEnum {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    EXPIRED = 'EXPIRED'
}
