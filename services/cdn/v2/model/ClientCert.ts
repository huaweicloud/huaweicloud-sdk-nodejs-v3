

export class ClientCert {
    public validation?: number;
    private 'trusted_cert'?: string;
    public hosts?: string;
    public constructor(validation?: number, trustedCert?: string) { 
        this['validation'] = validation;
        this['trusted_cert'] = trustedCert;
    }
    public withValidation(validation: number): ClientCert {
        this['validation'] = validation;
        return this;
    }
    public withTrustedCert(trustedCert: string): ClientCert {
        this['trusted_cert'] = trustedCert;
        return this;
    }
    public set trustedCert(trustedCert: string  | undefined) {
        this['trusted_cert'] = trustedCert;
    }
    public get trustedCert(): string | undefined {
        return this['trusted_cert'];
    }
    public withHosts(hosts: string): ClientCert {
        this['hosts'] = hosts;
        return this;
    }
}