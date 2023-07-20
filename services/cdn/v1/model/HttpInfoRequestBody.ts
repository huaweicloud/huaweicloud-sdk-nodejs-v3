import { ForceRedirect } from './ForceRedirect';


export class HttpInfoRequestBody {
    private 'cert_name'?: string;
    private 'https_status'?: number;
    public certificate?: string;
    private 'private_key'?: string;
    public http2?: number;
    private 'certificate_type'?: number;
    private 'force_redirect_https'?: number;
    private 'force_redirect_config'?: ForceRedirect;
    public constructor(certName?: string, httpsStatus?: number) { 
        this['cert_name'] = certName;
        this['https_status'] = httpsStatus;
    }
    public withCertName(certName: string): HttpInfoRequestBody {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withHttpsStatus(httpsStatus: number): HttpInfoRequestBody {
        this['https_status'] = httpsStatus;
        return this;
    }
    public set httpsStatus(httpsStatus: number  | undefined) {
        this['https_status'] = httpsStatus;
    }
    public get httpsStatus(): number | undefined {
        return this['https_status'];
    }
    public withCertificate(certificate: string): HttpInfoRequestBody {
        this['certificate'] = certificate;
        return this;
    }
    public withPrivateKey(privateKey: string): HttpInfoRequestBody {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withHttp2(http2: number): HttpInfoRequestBody {
        this['http2'] = http2;
        return this;
    }
    public withCertificateType(certificateType: number): HttpInfoRequestBody {
        this['certificate_type'] = certificateType;
        return this;
    }
    public set certificateType(certificateType: number  | undefined) {
        this['certificate_type'] = certificateType;
    }
    public get certificateType(): number | undefined {
        return this['certificate_type'];
    }
    public withForceRedirectHttps(forceRedirectHttps: number): HttpInfoRequestBody {
        this['force_redirect_https'] = forceRedirectHttps;
        return this;
    }
    public set forceRedirectHttps(forceRedirectHttps: number  | undefined) {
        this['force_redirect_https'] = forceRedirectHttps;
    }
    public get forceRedirectHttps(): number | undefined {
        return this['force_redirect_https'];
    }
    public withForceRedirectConfig(forceRedirectConfig: ForceRedirect): HttpInfoRequestBody {
        this['force_redirect_config'] = forceRedirectConfig;
        return this;
    }
    public set forceRedirectConfig(forceRedirectConfig: ForceRedirect  | undefined) {
        this['force_redirect_config'] = forceRedirectConfig;
    }
    public get forceRedirectConfig(): ForceRedirect | undefined {
        return this['force_redirect_config'];
    }
}