

export class HttpGetBody {
    private 'https_status'?: string | undefined;
    private 'certificate_name'?: string | undefined;
    private 'certificate_value'?: string | undefined;
    private 'certificate_source'?: number | undefined;
    private 'http2_status'?: string | undefined;
    private 'tls_version'?: string | undefined;
    public constructor() { 
    }
    public withHttpsStatus(httpsStatus: string): HttpGetBody {
        this['https_status'] = httpsStatus;
        return this;
    }
    public set httpsStatus(httpsStatus: string | undefined) {
        this['https_status'] = httpsStatus;
    }
    public get httpsStatus() {
        return this['https_status'];
    }
    public withCertificateName(certificateName: string): HttpGetBody {
        this['certificate_name'] = certificateName;
        return this;
    }
    public set certificateName(certificateName: string | undefined) {
        this['certificate_name'] = certificateName;
    }
    public get certificateName() {
        return this['certificate_name'];
    }
    public withCertificateValue(certificateValue: string): HttpGetBody {
        this['certificate_value'] = certificateValue;
        return this;
    }
    public set certificateValue(certificateValue: string | undefined) {
        this['certificate_value'] = certificateValue;
    }
    public get certificateValue() {
        return this['certificate_value'];
    }
    public withCertificateSource(certificateSource: number): HttpGetBody {
        this['certificate_source'] = certificateSource;
        return this;
    }
    public set certificateSource(certificateSource: number | undefined) {
        this['certificate_source'] = certificateSource;
    }
    public get certificateSource() {
        return this['certificate_source'];
    }
    public withHttp2Status(http2Status: string): HttpGetBody {
        this['http2_status'] = http2Status;
        return this;
    }
    public set http2Status(http2Status: string | undefined) {
        this['http2_status'] = http2Status;
    }
    public get http2Status() {
        return this['http2_status'];
    }
    public withTlsVersion(tlsVersion: string): HttpGetBody {
        this['tls_version'] = tlsVersion;
        return this;
    }
    public set tlsVersion(tlsVersion: string | undefined) {
        this['tls_version'] = tlsVersion;
    }
    public get tlsVersion() {
        return this['tls_version'];
    }
}