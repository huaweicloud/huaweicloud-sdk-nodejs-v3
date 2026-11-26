

export class MultiCertificateBatchVo {
    private 'cert_name'?: string;
    private 'certificate_category'?: number;
    private 'certificate_type'?: number;
    public certificate?: string;
    private 'private_key'?: string;
    private 'enc_certificate'?: string;
    private 'enc_private_key'?: string;
    private 'scm_certificate_id'?: string;
    public constructor() { 
    }
    public withCertName(certName: string): MultiCertificateBatchVo {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withCertificateCategory(certificateCategory: number): MultiCertificateBatchVo {
        this['certificate_category'] = certificateCategory;
        return this;
    }
    public set certificateCategory(certificateCategory: number  | undefined) {
        this['certificate_category'] = certificateCategory;
    }
    public get certificateCategory(): number | undefined {
        return this['certificate_category'];
    }
    public withCertificateType(certificateType: number): MultiCertificateBatchVo {
        this['certificate_type'] = certificateType;
        return this;
    }
    public set certificateType(certificateType: number  | undefined) {
        this['certificate_type'] = certificateType;
    }
    public get certificateType(): number | undefined {
        return this['certificate_type'];
    }
    public withCertificate(certificate: string): MultiCertificateBatchVo {
        this['certificate'] = certificate;
        return this;
    }
    public withPrivateKey(privateKey: string): MultiCertificateBatchVo {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withEncCertificate(encCertificate: string): MultiCertificateBatchVo {
        this['enc_certificate'] = encCertificate;
        return this;
    }
    public set encCertificate(encCertificate: string  | undefined) {
        this['enc_certificate'] = encCertificate;
    }
    public get encCertificate(): string | undefined {
        return this['enc_certificate'];
    }
    public withEncPrivateKey(encPrivateKey: string): MultiCertificateBatchVo {
        this['enc_private_key'] = encPrivateKey;
        return this;
    }
    public set encPrivateKey(encPrivateKey: string  | undefined) {
        this['enc_private_key'] = encPrivateKey;
    }
    public get encPrivateKey(): string | undefined {
        return this['enc_private_key'];
    }
    public withScmCertificateId(scmCertificateId: string): MultiCertificateBatchVo {
        this['scm_certificate_id'] = scmCertificateId;
        return this;
    }
    public set scmCertificateId(scmCertificateId: string  | undefined) {
        this['scm_certificate_id'] = scmCertificateId;
    }
    public get scmCertificateId(): string | undefined {
        return this['scm_certificate_id'];
    }
}