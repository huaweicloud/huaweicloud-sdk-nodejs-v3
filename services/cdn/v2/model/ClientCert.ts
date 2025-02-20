

export class ClientCert {
    public status?: string;
    private 'trusted_cert'?: string;
    public hosts?: string;
    public constructor(status?: string, trustedCert?: string) { 
        this['status'] = status;
        this['trusted_cert'] = trustedCert;
    }
    public withStatus(status: string): ClientCert {
        this['status'] = status;
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