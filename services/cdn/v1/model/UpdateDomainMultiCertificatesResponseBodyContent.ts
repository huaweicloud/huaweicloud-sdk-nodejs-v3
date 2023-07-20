import { ForceRedirect } from './ForceRedirect';


export class UpdateDomainMultiCertificatesResponseBodyContent {
    private 'domain_name'?: string;
    private 'https_switch'?: number;
    private 'access_origin_way'?: number;
    private 'force_redirect_https'?: number;
    private 'force_redirect_config'?: ForceRedirect;
    public http2?: number;
    private 'cert_name'?: string;
    public certificate?: string;
    private 'certificate_type'?: number;
    private 'expiration_time'?: number;
    public constructor(domainName?: string) { 
        this['domain_name'] = domainName;
    }
    public withDomainName(domainName: string): UpdateDomainMultiCertificatesResponseBodyContent {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withHttpsSwitch(httpsSwitch: number): UpdateDomainMultiCertificatesResponseBodyContent {
        this['https_switch'] = httpsSwitch;
        return this;
    }
    public set httpsSwitch(httpsSwitch: number  | undefined) {
        this['https_switch'] = httpsSwitch;
    }
    public get httpsSwitch(): number | undefined {
        return this['https_switch'];
    }
    public withAccessOriginWay(accessOriginWay: number): UpdateDomainMultiCertificatesResponseBodyContent {
        this['access_origin_way'] = accessOriginWay;
        return this;
    }
    public set accessOriginWay(accessOriginWay: number  | undefined) {
        this['access_origin_way'] = accessOriginWay;
    }
    public get accessOriginWay(): number | undefined {
        return this['access_origin_way'];
    }
    public withForceRedirectHttps(forceRedirectHttps: number): UpdateDomainMultiCertificatesResponseBodyContent {
        this['force_redirect_https'] = forceRedirectHttps;
        return this;
    }
    public set forceRedirectHttps(forceRedirectHttps: number  | undefined) {
        this['force_redirect_https'] = forceRedirectHttps;
    }
    public get forceRedirectHttps(): number | undefined {
        return this['force_redirect_https'];
    }
    public withForceRedirectConfig(forceRedirectConfig: ForceRedirect): UpdateDomainMultiCertificatesResponseBodyContent {
        this['force_redirect_config'] = forceRedirectConfig;
        return this;
    }
    public set forceRedirectConfig(forceRedirectConfig: ForceRedirect  | undefined) {
        this['force_redirect_config'] = forceRedirectConfig;
    }
    public get forceRedirectConfig(): ForceRedirect | undefined {
        return this['force_redirect_config'];
    }
    public withHttp2(http2: number): UpdateDomainMultiCertificatesResponseBodyContent {
        this['http2'] = http2;
        return this;
    }
    public withCertName(certName: string): UpdateDomainMultiCertificatesResponseBodyContent {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withCertificate(certificate: string): UpdateDomainMultiCertificatesResponseBodyContent {
        this['certificate'] = certificate;
        return this;
    }
    public withCertificateType(certificateType: number): UpdateDomainMultiCertificatesResponseBodyContent {
        this['certificate_type'] = certificateType;
        return this;
    }
    public set certificateType(certificateType: number  | undefined) {
        this['certificate_type'] = certificateType;
    }
    public get certificateType(): number | undefined {
        return this['certificate_type'];
    }
    public withExpirationTime(expirationTime: number): UpdateDomainMultiCertificatesResponseBodyContent {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: number  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): number | undefined {
        return this['expiration_time'];
    }
}