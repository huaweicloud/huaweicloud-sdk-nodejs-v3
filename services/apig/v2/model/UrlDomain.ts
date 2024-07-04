

export class UrlDomain {
    public id?: string;
    public domain?: string;
    private 'cname_status'?: number;
    private 'ssl_id'?: string;
    private 'ssl_name'?: string;
    private 'min_ssl_version'?: UrlDomainMinSslVersionEnum | string;
    private 'verified_client_certificate_enabled'?: boolean;
    private 'is_has_trusted_root_ca'?: boolean;
    private 'ingress_http_port'?: number;
    private 'ingress_https_port'?: number;
    public constructor() { 
    }
    public withId(id: string): UrlDomain {
        this['id'] = id;
        return this;
    }
    public withDomain(domain: string): UrlDomain {
        this['domain'] = domain;
        return this;
    }
    public withCnameStatus(cnameStatus: number): UrlDomain {
        this['cname_status'] = cnameStatus;
        return this;
    }
    public set cnameStatus(cnameStatus: number  | undefined) {
        this['cname_status'] = cnameStatus;
    }
    public get cnameStatus(): number | undefined {
        return this['cname_status'];
    }
    public withSslId(sslId: string): UrlDomain {
        this['ssl_id'] = sslId;
        return this;
    }
    public set sslId(sslId: string  | undefined) {
        this['ssl_id'] = sslId;
    }
    public get sslId(): string | undefined {
        return this['ssl_id'];
    }
    public withSslName(sslName: string): UrlDomain {
        this['ssl_name'] = sslName;
        return this;
    }
    public set sslName(sslName: string  | undefined) {
        this['ssl_name'] = sslName;
    }
    public get sslName(): string | undefined {
        return this['ssl_name'];
    }
    public withMinSslVersion(minSslVersion: UrlDomainMinSslVersionEnum | string): UrlDomain {
        this['min_ssl_version'] = minSslVersion;
        return this;
    }
    public set minSslVersion(minSslVersion: UrlDomainMinSslVersionEnum | string  | undefined) {
        this['min_ssl_version'] = minSslVersion;
    }
    public get minSslVersion(): UrlDomainMinSslVersionEnum | string | undefined {
        return this['min_ssl_version'];
    }
    public withVerifiedClientCertificateEnabled(verifiedClientCertificateEnabled: boolean): UrlDomain {
        this['verified_client_certificate_enabled'] = verifiedClientCertificateEnabled;
        return this;
    }
    public set verifiedClientCertificateEnabled(verifiedClientCertificateEnabled: boolean  | undefined) {
        this['verified_client_certificate_enabled'] = verifiedClientCertificateEnabled;
    }
    public get verifiedClientCertificateEnabled(): boolean | undefined {
        return this['verified_client_certificate_enabled'];
    }
    public withIsHasTrustedRootCa(isHasTrustedRootCa: boolean): UrlDomain {
        this['is_has_trusted_root_ca'] = isHasTrustedRootCa;
        return this;
    }
    public set isHasTrustedRootCa(isHasTrustedRootCa: boolean  | undefined) {
        this['is_has_trusted_root_ca'] = isHasTrustedRootCa;
    }
    public get isHasTrustedRootCa(): boolean | undefined {
        return this['is_has_trusted_root_ca'];
    }
    public withIngressHttpPort(ingressHttpPort: number): UrlDomain {
        this['ingress_http_port'] = ingressHttpPort;
        return this;
    }
    public set ingressHttpPort(ingressHttpPort: number  | undefined) {
        this['ingress_http_port'] = ingressHttpPort;
    }
    public get ingressHttpPort(): number | undefined {
        return this['ingress_http_port'];
    }
    public withIngressHttpsPort(ingressHttpsPort: number): UrlDomain {
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
export enum UrlDomainMinSslVersionEnum {
    TLSV1_1 = 'TLSv1.1',
    TLSV1_2 = 'TLSv1.2'
}
