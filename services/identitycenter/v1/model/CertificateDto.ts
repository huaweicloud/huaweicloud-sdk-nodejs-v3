

export class CertificateDto {
    public algorithm?: string;
    public certificate?: string;
    private 'certificate_id'?: string;
    private 'expiry_date'?: number;
    public status?: CertificateDtoStatusEnum | string;
    private 'key_size'?: string;
    private 'issue_date'?: number;
    public constructor(algorithm?: string, certificate?: string, certificateId?: string, expiryDate?: number, status?: string, keySize?: string, issueDate?: number) { 
        this['algorithm'] = algorithm;
        this['certificate'] = certificate;
        this['certificate_id'] = certificateId;
        this['expiry_date'] = expiryDate;
        this['status'] = status;
        this['key_size'] = keySize;
        this['issue_date'] = issueDate;
    }
    public withAlgorithm(algorithm: string): CertificateDto {
        this['algorithm'] = algorithm;
        return this;
    }
    public withCertificate(certificate: string): CertificateDto {
        this['certificate'] = certificate;
        return this;
    }
    public withCertificateId(certificateId: string): CertificateDto {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withExpiryDate(expiryDate: number): CertificateDto {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: number  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): number | undefined {
        return this['expiry_date'];
    }
    public withStatus(status: CertificateDtoStatusEnum | string): CertificateDto {
        this['status'] = status;
        return this;
    }
    public withKeySize(keySize: string): CertificateDto {
        this['key_size'] = keySize;
        return this;
    }
    public set keySize(keySize: string  | undefined) {
        this['key_size'] = keySize;
    }
    public get keySize(): string | undefined {
        return this['key_size'];
    }
    public withIssueDate(issueDate: number): CertificateDto {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: number  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): number | undefined {
        return this['issue_date'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CertificateDtoStatusEnum {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}
