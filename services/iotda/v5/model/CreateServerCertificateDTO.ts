

export class CreateServerCertificateDTO {
    private 'certificate_pem'?: string;
    private 'private_key'?: string;
    private 'private_key_password'?: string;
    public constructor(certificatePem?: string, privateKey?: string) { 
        this['certificate_pem'] = certificatePem;
        this['private_key'] = privateKey;
    }
    public withCertificatePem(certificatePem: string): CreateServerCertificateDTO {
        this['certificate_pem'] = certificatePem;
        return this;
    }
    public set certificatePem(certificatePem: string  | undefined) {
        this['certificate_pem'] = certificatePem;
    }
    public get certificatePem(): string | undefined {
        return this['certificate_pem'];
    }
    public withPrivateKey(privateKey: string): CreateServerCertificateDTO {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withPrivateKeyPassword(privateKeyPassword: string): CreateServerCertificateDTO {
        this['private_key_password'] = privateKeyPassword;
        return this;
    }
    public set privateKeyPassword(privateKeyPassword: string  | undefined) {
        this['private_key_password'] = privateKeyPassword;
    }
    public get privateKeyPassword(): string | undefined {
        return this['private_key_password'];
    }
}