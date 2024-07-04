

export class UrlDomainModify {
    private 'min_ssl_version'?: UrlDomainModifyMinSslVersionEnum | string;
    private 'is_http_redirect_to_https'?: boolean;
    private 'verified_client_certificate_enabled'?: boolean;
    private 'ingress_http_port'?: number;
    private 'ingress_https_port'?: number;
    public constructor(minSslVersion?: string) { 
        this['min_ssl_version'] = minSslVersion;
    }
    public withMinSslVersion(minSslVersion: UrlDomainModifyMinSslVersionEnum | string): UrlDomainModify {
        this['min_ssl_version'] = minSslVersion;
        return this;
    }
    public set minSslVersion(minSslVersion: UrlDomainModifyMinSslVersionEnum | string  | undefined) {
        this['min_ssl_version'] = minSslVersion;
    }
    public get minSslVersion(): UrlDomainModifyMinSslVersionEnum | string | undefined {
        return this['min_ssl_version'];
    }
    public withIsHttpRedirectToHttps(isHttpRedirectToHttps: boolean): UrlDomainModify {
        this['is_http_redirect_to_https'] = isHttpRedirectToHttps;
        return this;
    }
    public set isHttpRedirectToHttps(isHttpRedirectToHttps: boolean  | undefined) {
        this['is_http_redirect_to_https'] = isHttpRedirectToHttps;
    }
    public get isHttpRedirectToHttps(): boolean | undefined {
        return this['is_http_redirect_to_https'];
    }
    public withVerifiedClientCertificateEnabled(verifiedClientCertificateEnabled: boolean): UrlDomainModify {
        this['verified_client_certificate_enabled'] = verifiedClientCertificateEnabled;
        return this;
    }
    public set verifiedClientCertificateEnabled(verifiedClientCertificateEnabled: boolean  | undefined) {
        this['verified_client_certificate_enabled'] = verifiedClientCertificateEnabled;
    }
    public get verifiedClientCertificateEnabled(): boolean | undefined {
        return this['verified_client_certificate_enabled'];
    }
    public withIngressHttpPort(ingressHttpPort: number): UrlDomainModify {
        this['ingress_http_port'] = ingressHttpPort;
        return this;
    }
    public set ingressHttpPort(ingressHttpPort: number  | undefined) {
        this['ingress_http_port'] = ingressHttpPort;
    }
    public get ingressHttpPort(): number | undefined {
        return this['ingress_http_port'];
    }
    public withIngressHttpsPort(ingressHttpsPort: number): UrlDomainModify {
        this['ingress_https_port'] = ingressHttpsPort;
        return this;
    }
    public set ingressHttpsPort(ingressHttpsPort: number  | undefined) {
        this['ingress_https_port'] = ingressHttpsPort;
    }
    public get ingressHttpsPort(): number | undefined {
        return this['ingress_https_port'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UrlDomainModifyMinSslVersionEnum {
    TLSV1_1 = 'TLSv1.1',
    TLSV1_2 = 'TLSv1.2'
}
