

export class TlsConfig {
    private 'cert_pem'?: string;
    private 'cert_start_time'?: string;
    private 'cert_end_time'?: string;
    public constructor() { 
    }
    public withCertPem(certPem: string): TlsConfig {
        this['cert_pem'] = certPem;
        return this;
    }
    public set certPem(certPem: string  | undefined) {
        this['cert_pem'] = certPem;
    }
    public get certPem(): string | undefined {
        return this['cert_pem'];
    }
    public withCertStartTime(certStartTime: string): TlsConfig {
        this['cert_start_time'] = certStartTime;
        return this;
    }
    public set certStartTime(certStartTime: string  | undefined) {
        this['cert_start_time'] = certStartTime;
    }
    public get certStartTime(): string | undefined {
        return this['cert_start_time'];
    }
    public withCertEndTime(certEndTime: string): TlsConfig {
        this['cert_end_time'] = certEndTime;
        return this;
    }
    public set certEndTime(certEndTime: string  | undefined) {
        this['cert_end_time'] = certEndTime;
    }
    public get certEndTime(): string | undefined {
        return this['cert_end_time'];
    }
}