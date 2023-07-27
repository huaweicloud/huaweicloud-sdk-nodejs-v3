

export class UrlDomainBase {
    private 'min_ssl_version'?: UrlDomainBaseMinSslVersionEnum | string;
    private 'is_http_redirect_to_https'?: boolean;
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
}

/**
    * @export
    * @enum {string}
    */
export enum UrlDomainBaseMinSslVersionEnum {
    TLSV1_1 = 'TLSv1.1',
    TLSV1_2 = 'TLSv1.2'
}
