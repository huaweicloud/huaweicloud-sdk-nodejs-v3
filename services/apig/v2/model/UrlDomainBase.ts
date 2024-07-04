

export class UrlDomainBase {
    private 'min_ssl_version'?: UrlDomainBaseMinSslVersionEnum | string;
    private 'is_http_redirect_to_https'?: boolean;
    private 'ingress_http_port'?: number;
    private 'ingress_https_port'?: number;
    public constructor() { 
    }
    public withMinSslVersion(minSslVersion: UrlDomainBaseMinSslVersionEnum | string): UrlDomainBase {
        this['min_ssl_version'] = minSslVersion;
        return this;
    }
    public set minSslVersion(minSslVersion: UrlDomainBaseMinSslVersionEnum | string  | undefined) {
        this['min_ssl_version'] = minSslVersion;
    }
    public get minSslVersion(): UrlDomainBaseMinSslVersionEnum | string | undefined {
        return this['min_ssl_version'];
    }
    public withIsHttpRedirectToHttps(isHttpRedirectToHttps: boolean): UrlDomainBase {
        this['is_http_redirect_to_https'] = isHttpRedirectToHttps;
        return this;
    }
    public set isHttpRedirectToHttps(isHttpRedirectToHttps: boolean  | undefined) {
        this['is_http_redirect_to_https'] = isHttpRedirectToHttps;
    }
    public get isHttpRedirectToHttps(): boolean | undefined {
        return this['is_http_redirect_to_https'];
    }
    public withIngressHttpPort(ingressHttpPort: number): UrlDomainBase {
        this['ingress_http_port'] = ingressHttpPort;
        return this;
    }
    public set ingressHttpPort(ingressHttpPort: number  | undefined) {
        this['ingress_http_port'] = ingressHttpPort;
    }
    public get ingressHttpPort(): number | undefined {
        return this['ingress_http_port'];
    }
    public withIngressHttpsPort(ingressHttpsPort: number): UrlDomainBase {
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
export enum UrlDomainBaseMinSslVersionEnum {
    TLSV1_1 = 'TLSv1.1',
    TLSV1_2 = 'TLSv1.2'
}
