import { UrlDomainBase } from './UrlDomainBase';


export class UrlDomainCreate {
    private 'min_ssl_version'?: UrlDomainCreateMinSslVersionEnum | string;
    private 'is_http_redirect_to_https'?: boolean;
    private 'ingress_http_port'?: number;
    private 'ingress_https_port'?: number;
    private 'url_domain'?: string;
    public constructor() { 
    }
    public withMinSslVersion(minSslVersion: UrlDomainCreateMinSslVersionEnum | string): UrlDomainCreate {
        this['min_ssl_version'] = minSslVersion;
        return this;
    }
    public set minSslVersion(minSslVersion: UrlDomainCreateMinSslVersionEnum | string  | undefined) {
        this['min_ssl_version'] = minSslVersion;
    }
    public get minSslVersion(): UrlDomainCreateMinSslVersionEnum | string | undefined {
        return this['min_ssl_version'];
    }
    public withIsHttpRedirectToHttps(isHttpRedirectToHttps: boolean): UrlDomainCreate {
        this['is_http_redirect_to_https'] = isHttpRedirectToHttps;
        return this;
    }
    public set isHttpRedirectToHttps(isHttpRedirectToHttps: boolean  | undefined) {
        this['is_http_redirect_to_https'] = isHttpRedirectToHttps;
    }
    public get isHttpRedirectToHttps(): boolean | undefined {
        return this['is_http_redirect_to_https'];
    }
    public withIngressHttpPort(ingressHttpPort: number): UrlDomainCreate {
        this['ingress_http_port'] = ingressHttpPort;
        return this;
    }
    public set ingressHttpPort(ingressHttpPort: number  | undefined) {
        this['ingress_http_port'] = ingressHttpPort;
    }
    public get ingressHttpPort(): number | undefined {
        return this['ingress_http_port'];
    }
    public withIngressHttpsPort(ingressHttpsPort: number): UrlDomainCreate {
        this['ingress_https_port'] = ingressHttpsPort;
        return this;
    }
    public set ingressHttpsPort(ingressHttpsPort: number  | undefined) {
        this['ingress_https_port'] = ingressHttpsPort;
    }
    public get ingressHttpsPort(): number | undefined {
        return this['ingress_https_port'];
    }
    public withUrlDomain(urlDomain: string): UrlDomainCreate {
        this['url_domain'] = urlDomain;
        return this;
    }
    public set urlDomain(urlDomain: string  | undefined) {
        this['url_domain'] = urlDomain;
    }
    public get urlDomain(): string | undefined {
        return this['url_domain'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UrlDomainCreateMinSslVersionEnum {
    TLSV1_1 = 'TLSv1.1',
    TLSV1_2 = 'TLSv1.2'
}
