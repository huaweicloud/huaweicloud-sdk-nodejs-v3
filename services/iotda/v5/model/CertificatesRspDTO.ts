

export class CertificatesRspDTO {
    private 'certificate_id'?: string;
    private 'cn_name'?: string;
    public owner?: string;
    public status?: boolean;
    private 'verify_code'?: string;
    private 'create_date'?: string;
    private 'effective_date'?: string;
    private 'expiry_date'?: string;
    public constructor() { 
    }
    public withCertificateId(certificateId: string): CertificatesRspDTO {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withCnName(cnName: string): CertificatesRspDTO {
        this['cn_name'] = cnName;
        return this;
    }
    public set cnName(cnName: string  | undefined) {
        this['cn_name'] = cnName;
    }
    public get cnName(): string | undefined {
        return this['cn_name'];
    }
    public withOwner(owner: string): CertificatesRspDTO {
        this['owner'] = owner;
        return this;
    }
    public withStatus(status: boolean): CertificatesRspDTO {
        this['status'] = status;
        return this;
    }
    public withVerifyCode(verifyCode: string): CertificatesRspDTO {
        this['verify_code'] = verifyCode;
        return this;
    }
    public set verifyCode(verifyCode: string  | undefined) {
        this['verify_code'] = verifyCode;
    }
    public get verifyCode(): string | undefined {
        return this['verify_code'];
    }
    public withCreateDate(createDate: string): CertificatesRspDTO {
        this['create_date'] = createDate;
        return this;
    }
    public set createDate(createDate: string  | undefined) {
        this['create_date'] = createDate;
    }
    public get createDate(): string | undefined {
        return this['create_date'];
    }
    public withEffectiveDate(effectiveDate: string): CertificatesRspDTO {
        this['effective_date'] = effectiveDate;
        return this;
    }
    public set effectiveDate(effectiveDate: string  | undefined) {
        this['effective_date'] = effectiveDate;
    }
    public get effectiveDate(): string | undefined {
        return this['effective_date'];
    }
    public withExpiryDate(expiryDate: string): CertificatesRspDTO {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): string | undefined {
        return this['expiry_date'];
    }
}