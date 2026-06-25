

export class ConfigCdnHttpsReq {
    public source?: string;
    public domain?: string;
    private 'cert_name'?: string;
    private 'cert_id'?: string;
    private 'https_status'?: number;
    public certificate?: string;
    private 'private_key'?: string;
    private 'force_redirect_https'?: number;
    public http2?: number;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withSource(source: string): ConfigCdnHttpsReq {
        this['source'] = source;
        return this;
    }
    public withDomain(domain: string): ConfigCdnHttpsReq {
        this['domain'] = domain;
        return this;
    }
    public withCertName(certName: string): ConfigCdnHttpsReq {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withCertId(certId: string): ConfigCdnHttpsReq {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
    public withHttpsStatus(httpsStatus: number): ConfigCdnHttpsReq {
        this['https_status'] = httpsStatus;
        return this;
    }
    public set httpsStatus(httpsStatus: number  | undefined) {
        this['https_status'] = httpsStatus;
    }
    public get httpsStatus(): number | undefined {
        return this['https_status'];
    }
    public withCertificate(certificate: string): ConfigCdnHttpsReq {
        this['certificate'] = certificate;
        return this;
    }
    public withPrivateKey(privateKey: string): ConfigCdnHttpsReq {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withForceRedirectHttps(forceRedirectHttps: number): ConfigCdnHttpsReq {
        this['force_redirect_https'] = forceRedirectHttps;
        return this;
    }
    public set forceRedirectHttps(forceRedirectHttps: number  | undefined) {
        this['force_redirect_https'] = forceRedirectHttps;
    }
    public get forceRedirectHttps(): number | undefined {
        return this['force_redirect_https'];
    }
    public withHttp2(http2: number): ConfigCdnHttpsReq {
        this['http2'] = http2;
        return this;
    }
}