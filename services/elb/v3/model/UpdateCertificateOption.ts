

export class UpdateCertificateOption {
    public certificate?: string;
    public description?: string;
    public name?: string;
    private 'private_key'?: string | undefined;
    public domain?: string;
    private 'enc_certificate'?: string | undefined;
    private 'enc_private_key'?: string | undefined;
    public constructor() { 
    }
    public withCertificate(certificate: string): UpdateCertificateOption {
        this['certificate'] = certificate;
        return this;
    }
    public withDescription(description: string): UpdateCertificateOption {
        this['description'] = description;
        return this;
    }
    public withName(name: string): UpdateCertificateOption {
        this['name'] = name;
        return this;
    }
    public withPrivateKey(privateKey: string): UpdateCertificateOption {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey() {
        return this['private_key'];
    }
    public withDomain(domain: string): UpdateCertificateOption {
        this['domain'] = domain;
        return this;
    }
    public withEncCertificate(encCertificate: string): UpdateCertificateOption {
        this['enc_certificate'] = encCertificate;
        return this;
    }
    public set encCertificate(encCertificate: string | undefined) {
        this['enc_certificate'] = encCertificate;
    }
    public get encCertificate() {
        return this['enc_certificate'];
    }
    public withEncPrivateKey(encPrivateKey: string): UpdateCertificateOption {
        this['enc_private_key'] = encPrivateKey;
        return this;
    }
    public set encPrivateKey(encPrivateKey: string | undefined) {
        this['enc_private_key'] = encPrivateKey;
    }
    public get encPrivateKey() {
        return this['enc_private_key'];
    }
}