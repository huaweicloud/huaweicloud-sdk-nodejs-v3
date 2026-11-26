

export class ClientCertTrustedCerts {
    private 'trusted_cert'?: string;
    public constructor() { 
    }
    public withTrustedCert(trustedCert: string): ClientCertTrustedCerts {
        this['trusted_cert'] = trustedCert;
        return this;
    }
    public set trustedCert(trustedCert: string  | undefined) {
        this['trusted_cert'] = trustedCert;
    }
    public get trustedCert(): string | undefined {
        return this['trusted_cert'];
    }
}