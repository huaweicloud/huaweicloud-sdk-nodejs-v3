

export class CertForm {
    private 'cert_content'?: string;
    public name?: string;
    private 'private_key'?: string;
    public constructor(certContent?: string, name?: string, privateKey?: string) { 
        this['cert_content'] = certContent;
        this['name'] = name;
        this['private_key'] = privateKey;
    }
    public withCertContent(certContent: string): CertForm {
        this['cert_content'] = certContent;
        return this;
    }
    public set certContent(certContent: string  | undefined) {
        this['cert_content'] = certContent;
    }
    public get certContent(): string | undefined {
        return this['cert_content'];
    }
    public withName(name: string): CertForm {
        this['name'] = name;
        return this;
    }
    public withPrivateKey(privateKey: string): CertForm {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
}