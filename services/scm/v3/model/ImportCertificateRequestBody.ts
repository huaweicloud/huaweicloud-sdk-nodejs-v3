

export class ImportCertificateRequestBody {
    public name?: string;
    public certificate?: string;
    private 'certificate_chain'?: string;
    private 'private_key'?: string;
    private 'duplicate_check'?: boolean;
    private 'enterprise_project_id'?: string;
    private 'enc_certificate'?: string;
    private 'enc_private_key'?: string;
    public constructor(name?: string, certificate?: string, privateKey?: string) { 
        this['name'] = name;
        this['certificate'] = certificate;
        this['private_key'] = privateKey;
    }
    public withName(name: string): ImportCertificateRequestBody {
        this['name'] = name;
        return this;
    }
    public withCertificate(certificate: string): ImportCertificateRequestBody {
        this['certificate'] = certificate;
        return this;
    }
    public withCertificateChain(certificateChain: string): ImportCertificateRequestBody {
        this['certificate_chain'] = certificateChain;
        return this;
    }
    public set certificateChain(certificateChain: string  | undefined) {
        this['certificate_chain'] = certificateChain;
    }
    public get certificateChain(): string | undefined {
        return this['certificate_chain'];
    }
    public withPrivateKey(privateKey: string): ImportCertificateRequestBody {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withDuplicateCheck(duplicateCheck: boolean): ImportCertificateRequestBody {
        this['duplicate_check'] = duplicateCheck;
        return this;
    }
    public set duplicateCheck(duplicateCheck: boolean  | undefined) {
        this['duplicate_check'] = duplicateCheck;
    }
    public get duplicateCheck(): boolean | undefined {
        return this['duplicate_check'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ImportCertificateRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEncCertificate(encCertificate: string): ImportCertificateRequestBody {
        this['enc_certificate'] = encCertificate;
        return this;
    }
    public set encCertificate(encCertificate: string  | undefined) {
        this['enc_certificate'] = encCertificate;
    }
    public get encCertificate(): string | undefined {
        return this['enc_certificate'];
    }
    public withEncPrivateKey(encPrivateKey: string): ImportCertificateRequestBody {
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