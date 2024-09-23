import { ForceRedirect } from './ForceRedirect';


export class UpdateDomainMultiCertificatesRequestBodyContent {
    private 'domain_name'?: string;
    private 'https_switch'?: number;
    private 'access_origin_way'?: number;
    private 'force_redirect_https'?: number;
    private 'force_redirect_config'?: ForceRedirect;
    public http2?: number;
    private 'cert_name'?: string;
    public certificate?: string;
    private 'private_key'?: string;
    private 'certificate_type'?: number;
    private 'scm_certificate_id'?: string;
    public constructor(domainName?: string, httpsSwitch?: number) { 
        this['domain_name'] = domainName;
        this['https_switch'] = httpsSwitch;
    }
    public withDomainName(domainName: string): UpdateDomainMultiCertificatesRequestBodyContent {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withHttpsSwitch(httpsSwitch: number): UpdateDomainMultiCertificatesRequestBodyContent {
        this['https_switch'] = httpsSwitch;
        return this;
    }
    public set httpsSwitch(httpsSwitch: number  | undefined) {
        this['https_switch'] = httpsSwitch;
    }
    public get httpsSwitch(): number | undefined {
        return this['https_switch'];
    }
    public withAccessOriginWay(accessOriginWay: number): UpdateDomainMultiCertificatesRequestBodyContent {
        this['access_origin_way'] = accessOriginWay;
        return this;
    }
    public set accessOriginWay(accessOriginWay: number  | undefined) {
        this['access_origin_way'] = accessOriginWay;
    }
    public get accessOriginWay(): number | undefined {
        return this['access_origin_way'];
    }
    public withForceRedirectHttps(forceRedirectHttps: number): UpdateDomainMultiCertificatesRequestBodyContent {
        this['force_redirect_https'] = forceRedirectHttps;
        return this;
    }
    public set forceRedirectHttps(forceRedirectHttps: number  | undefined) {
        this['force_redirect_https'] = forceRedirectHttps;
    }
    public get forceRedirectHttps(): number | undefined {
        return this['force_redirect_https'];
    }
    public withForceRedirectConfig(forceRedirectConfig: ForceRedirect): UpdateDomainMultiCertificatesRequestBodyContent {
        this['force_redirect_config'] = forceRedirectConfig;
        return this;
    }
    public set forceRedirectConfig(forceRedirectConfig: ForceRedirect  | undefined) {
        this['force_redirect_config'] = forceRedirectConfig;
    }
    public get forceRedirectConfig(): ForceRedirect | undefined {
        return this['force_redirect_config'];
    }
    public withHttp2(http2: number): UpdateDomainMultiCertificatesRequestBodyContent {
        this['http2'] = http2;
        return this;
    }
    public withCertName(certName: string): UpdateDomainMultiCertificatesRequestBodyContent {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withCertificate(certificate: string): UpdateDomainMultiCertificatesRequestBodyContent {
        this['certificate'] = certificate;
        return this;
    }
    public withPrivateKey(privateKey: string): UpdateDomainMultiCertificatesRequestBodyContent {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withCertificateType(certificateType: number): UpdateDomainMultiCertificatesRequestBodyContent {
        this['certificate_type'] = certificateType;
        return this;
    }
    public set certificateType(certificateType: number  | undefined) {
        this['certificate_type'] = certificateType;
    }
    public get certificateType(): number | undefined {
        return this['certificate_type'];
    }
    public withScmCertificateId(scmCertificateId: string): UpdateDomainMultiCertificatesRequestBodyContent {
        this['scm_certificate_id'] = scmCertificateId;
        return this;
    }
    public set scmCertificateId(scmCertificateId: string  | undefined) {
        this['scm_certificate_id'] = scmCertificateId;
    }
    public get scmCertificateId(): string | undefined {
        return this['scm_certificate_id'];
    }
}