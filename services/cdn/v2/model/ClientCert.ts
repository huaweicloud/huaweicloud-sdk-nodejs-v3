import { ClientCertTrustedCerts } from './ClientCertTrustedCerts';


export class ClientCert {
    public status?: string;
    private 'trusted_cert'?: string;
    public hosts?: string;
    private 'trusted_certs'?: Array<ClientCertTrustedCerts>;
    private 'sm_trusted_certs'?: Array<ClientCertTrustedCerts>;
    private 'sm_cert_hosts'?: string;
    public constructor(status?: string) { 
        this['status'] = status;
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
    public withTrustedCerts(trustedCerts: Array<ClientCertTrustedCerts>): ClientCert {
        this['trusted_certs'] = trustedCerts;
        return this;
    }
    public set trustedCerts(trustedCerts: Array<ClientCertTrustedCerts>  | undefined) {
        this['trusted_certs'] = trustedCerts;
    }
    public get trustedCerts(): Array<ClientCertTrustedCerts> | undefined {
        return this['trusted_certs'];
    }
    public withSmTrustedCerts(smTrustedCerts: Array<ClientCertTrustedCerts>): ClientCert {
        this['sm_trusted_certs'] = smTrustedCerts;
        return this;
    }
    public set smTrustedCerts(smTrustedCerts: Array<ClientCertTrustedCerts>  | undefined) {
        this['sm_trusted_certs'] = smTrustedCerts;
    }
    public get smTrustedCerts(): Array<ClientCertTrustedCerts> | undefined {
        return this['sm_trusted_certs'];
    }
    public withSmCertHosts(smCertHosts: string): ClientCert {
        this['sm_cert_hosts'] = smCertHosts;
        return this;
    }
    public set smCertHosts(smCertHosts: string  | undefined) {
        this['sm_cert_hosts'] = smCertHosts;
    }
    public get smCertHosts(): string | undefined {
        return this['sm_cert_hosts'];
    }
}