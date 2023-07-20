import { ForceRedirect } from './ForceRedirect';


export class HttpsDetail {
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'cert_name'?: string;
    public certificate?: string;
    private 'private_key'?: string;
    private 'certificate_type'?: number;
    private 'expiration_time'?: number;
    private 'https_status'?: number;
    private 'force_redirect_https'?: number;
    private 'force_redirect_config'?: ForceRedirect;
    public http2?: number;
    public constructor() { 
    }
    public withDomainId(domainId: string): HttpsDetail {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): HttpsDetail {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withCertName(certName: string): HttpsDetail {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withCertificate(certificate: string): HttpsDetail {
        this['certificate'] = certificate;
        return this;
    }
    public withPrivateKey(privateKey: string): HttpsDetail {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withCertificateType(certificateType: number): HttpsDetail {
        this['certificate_type'] = certificateType;
        return this;
    }
    public set certificateType(certificateType: number  | undefined) {
        this['certificate_type'] = certificateType;
    }
    public get certificateType(): number | undefined {
        return this['certificate_type'];
    }
    public withExpirationTime(expirationTime: number): HttpsDetail {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: number  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): number | undefined {
        return this['expiration_time'];
    }
    public withHttpsStatus(httpsStatus: number): HttpsDetail {
        this['https_status'] = httpsStatus;
        return this;
    }
    public set httpsStatus(httpsStatus: number  | undefined) {
        this['https_status'] = httpsStatus;
    }
    public get httpsStatus(): number | undefined {
        return this['https_status'];
    }
    public withForceRedirectHttps(forceRedirectHttps: number): HttpsDetail {
        this['force_redirect_https'] = forceRedirectHttps;
        return this;
    }
    public set forceRedirectHttps(forceRedirectHttps: number  | undefined) {
        this['force_redirect_https'] = forceRedirectHttps;
    }
    public get forceRedirectHttps(): number | undefined {
        return this['force_redirect_https'];
    }
    public withForceRedirectConfig(forceRedirectConfig: ForceRedirect): HttpsDetail {
        this['force_redirect_config'] = forceRedirectConfig;
        return this;
    }
    public set forceRedirectConfig(forceRedirectConfig: ForceRedirect  | undefined) {
        this['force_redirect_config'] = forceRedirectConfig;
    }
    public get forceRedirectConfig(): ForceRedirect | undefined {
        return this['force_redirect_config'];
    }
    public withHttp2(http2: number): HttpsDetail {
        this['http2'] = http2;
        return this;
    }
}