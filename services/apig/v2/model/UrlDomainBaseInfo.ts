

export class UrlDomainBaseInfo {
    private 'url_domain'?: string;
    public id?: string;
    public status?: UrlDomainBaseInfoStatusEnum | number;
    private 'min_ssl_version'?: string;
    private 'is_http_redirect_to_https'?: boolean;
    private 'verified_client_certificate_enabled'?: boolean;
    private 'ingress_http_port'?: number;
    private 'ingress_https_port'?: number;
    public constructor(urlDomain?: string, id?: string, status?: number, minSslVersion?: string) { 
        this['url_domain'] = urlDomain;
        this['id'] = id;
        this['status'] = status;
        this['min_ssl_version'] = minSslVersion;
    }
    public withUrlDomain(urlDomain: string): UrlDomainBaseInfo {
        this['url_domain'] = urlDomain;
        return this;
    }
    public set urlDomain(urlDomain: string  | undefined) {
        this['url_domain'] = urlDomain;
    }
    public get urlDomain(): string | undefined {
        return this['url_domain'];
    }
    public withId(id: string): UrlDomainBaseInfo {
        this['id'] = id;
        return this;
    }
    public withStatus(status: UrlDomainBaseInfoStatusEnum | number): UrlDomainBaseInfo {
        this['status'] = status;
        return this;
    }
    public withMinSslVersion(minSslVersion: string): UrlDomainBaseInfo {
        this['min_ssl_version'] = minSslVersion;
        return this;
    }
    public set minSslVersion(minSslVersion: string  | undefined) {
        this['min_ssl_version'] = minSslVersion;
    }
    public get minSslVersion(): string | undefined {
        return this['min_ssl_version'];
    }
    public withIsHttpRedirectToHttps(isHttpRedirectToHttps: boolean): UrlDomainBaseInfo {
        this['is_http_redirect_to_https'] = isHttpRedirectToHttps;
        return this;
    }
    public set isHttpRedirectToHttps(isHttpRedirectToHttps: boolean  | undefined) {
        this['is_http_redirect_to_https'] = isHttpRedirectToHttps;
    }
    public get isHttpRedirectToHttps(): boolean | undefined {
        return this['is_http_redirect_to_https'];
    }
    public withVerifiedClientCertificateEnabled(verifiedClientCertificateEnabled: boolean): UrlDomainBaseInfo {
        this['verified_client_certificate_enabled'] = verifiedClientCertificateEnabled;
        return this;
    }
    public set verifiedClientCertificateEnabled(verifiedClientCertificateEnabled: boolean  | undefined) {
        this['verified_client_certificate_enabled'] = verifiedClientCertificateEnabled;
    }
    public get verifiedClientCertificateEnabled(): boolean | undefined {
        return this['verified_client_certificate_enabled'];
    }
    public withIngressHttpPort(ingressHttpPort: number): UrlDomainBaseInfo {
        this['ingress_http_port'] = ingressHttpPort;
        return this;
    }
    public set ingressHttpPort(ingressHttpPort: number  | undefined) {
        this['ingress_http_port'] = ingressHttpPort;
    }
    public get ingressHttpPort(): number | undefined {
        return this['ingress_http_port'];
    }
    public withIngressHttpsPort(ingressHttpsPort: number): UrlDomainBaseInfo {
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
export enum UrlDomainBaseInfoStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
