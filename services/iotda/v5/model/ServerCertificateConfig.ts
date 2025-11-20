

export class ServerCertificateConfig {
    private 'ocsp_stapling_enable'?: boolean;
    private 'ocsp_server_ca_id'?: string;
    private 'ocsp_ssl_enable'?: boolean;
    public constructor() { 
    }
    public withOcspStaplingEnable(ocspStaplingEnable: boolean): ServerCertificateConfig {
        this['ocsp_stapling_enable'] = ocspStaplingEnable;
        return this;
    }
    public set ocspStaplingEnable(ocspStaplingEnable: boolean  | undefined) {
        this['ocsp_stapling_enable'] = ocspStaplingEnable;
    }
    public get ocspStaplingEnable(): boolean | undefined {
        return this['ocsp_stapling_enable'];
    }
    public withOcspServerCaId(ocspServerCaId: string): ServerCertificateConfig {
        this['ocsp_server_ca_id'] = ocspServerCaId;
        return this;
    }
    public set ocspServerCaId(ocspServerCaId: string  | undefined) {
        this['ocsp_server_ca_id'] = ocspServerCaId;
    }
    public get ocspServerCaId(): string | undefined {
        return this['ocsp_server_ca_id'];
    }
    public withOcspSslEnable(ocspSslEnable: boolean): ServerCertificateConfig {
        this['ocsp_ssl_enable'] = ocspSslEnable;
        return this;
    }
    public set ocspSslEnable(ocspSslEnable: boolean  | undefined) {
        this['ocsp_ssl_enable'] = ocspSslEnable;
    }
    public get ocspSslEnable(): boolean | undefined {
        return this['ocsp_ssl_enable'];
    }
}