import { ForceRedirect } from './ForceRedirect';


export class HttpInfoResponseBody {
    private 'https_status'?: number;
    private 'cert_name'?: string;
    public certificate?: string;
    private 'private_key'?: string;
    private 'certificate_type'?: number;
    private 'force_redirect_https'?: number;
    private 'force_redirect_config'?: ForceRedirect;
    public http2?: number;
    private 'expiration_time'?: number;
    public constructor() { 
    }
    public withHttpsStatus(httpsStatus: number): HttpInfoResponseBody {
        this['https_status'] = httpsStatus;
        return this;
    }
    public set httpsStatus(httpsStatus: number  | undefined) {
        this['https_status'] = httpsStatus;
    }
    public get httpsStatus(): number | undefined {
        return this['https_status'];
    }
    public withCertName(certName: string): HttpInfoResponseBody {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withCertificate(certificate: string): HttpInfoResponseBody {
        this['certificate'] = certificate;
        return this;
    }
    public withPrivateKey(privateKey: string): HttpInfoResponseBody {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withCertificateType(certificateType: number): HttpInfoResponseBody {
        this['certificate_type'] = certificateType;
        return this;
    }
    public set certificateType(certificateType: number  | undefined) {
        this['certificate_type'] = certificateType;
    }
    public get certificateType(): number | undefined {
        return this['certificate_type'];
    }
    public withForceRedirectHttps(forceRedirectHttps: number): HttpInfoResponseBody {
        this['force_redirect_https'] = forceRedirectHttps;
        return this;
    }
    public set forceRedirectHttps(forceRedirectHttps: number  | undefined) {
        this['force_redirect_https'] = forceRedirectHttps;
    }
    public get forceRedirectHttps(): number | undefined {
        return this['force_redirect_https'];
    }
    public withForceRedirectConfig(forceRedirectConfig: ForceRedirect): HttpInfoResponseBody {
        this['force_redirect_config'] = forceRedirectConfig;
        return this;
    }
    public set forceRedirectConfig(forceRedirectConfig: ForceRedirect  | undefined) {
        this['force_redirect_config'] = forceRedirectConfig;
    }
    public get forceRedirectConfig(): ForceRedirect | undefined {
        return this['force_redirect_config'];
    }
    public withHttp2(http2: number): HttpInfoResponseBody {
        this['http2'] = http2;
        return this;
    }
    public withExpirationTime(expirationTime: number): HttpInfoResponseBody {
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