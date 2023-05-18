

export class HttpPutBody {
    private 'https_status'?: string | undefined;
    private 'certificate_name'?: string | undefined;
    private 'certificate_value'?: string | undefined;
    private 'private_key'?: string | undefined;
    private 'certificate_source'?: number | undefined;
    private 'certificate_type'?: string | undefined;
    private 'http2_status'?: string | undefined;
    private 'tls_version'?: string | undefined;
    private 'ocsp_stapling_status'?: string | undefined;
    public constructor() { 
    }
    public withHttpsStatus(httpsStatus: string): HttpPutBody {
        this['https_status'] = httpsStatus;
        return this;
    }
    public set httpsStatus(httpsStatus: string | undefined) {
        this['https_status'] = httpsStatus;
    }
    public get httpsStatus() {
        return this['https_status'];
    }
    public withCertificateName(certificateName: string): HttpPutBody {
        this['certificate_name'] = certificateName;
        return this;
    }
    public set certificateName(certificateName: string | undefined) {
        this['certificate_name'] = certificateName;
    }
    public get certificateName() {
        return this['certificate_name'];
    }
    public withCertificateValue(certificateValue: string): HttpPutBody {
        this['certificate_value'] = certificateValue;
        return this;
    }
    public set certificateValue(certificateValue: string | undefined) {
        this['certificate_value'] = certificateValue;
    }
    public get certificateValue() {
        return this['certificate_value'];
    }
    public withPrivateKey(privateKey: string): HttpPutBody {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey() {
        return this['private_key'];
    }
    public withCertificateSource(certificateSource: number): HttpPutBody {
        this['certificate_source'] = certificateSource;
        return this;
    }
    public set certificateSource(certificateSource: number | undefined) {
        this['certificate_source'] = certificateSource;
    }
    public get certificateSource() {
        return this['certificate_source'];
    }
    public withCertificateType(certificateType: string): HttpPutBody {
        this['certificate_type'] = certificateType;
        return this;
    }
    public set certificateType(certificateType: string | undefined) {
        this['certificate_type'] = certificateType;
    }
    public get certificateType() {
        return this['certificate_type'];
    }
    public withHttp2Status(http2Status: string): HttpPutBody {
        this['http2_status'] = http2Status;
        return this;
    }
    public set http2Status(http2Status: string | undefined) {
        this['http2_status'] = http2Status;
    }
    public get http2Status() {
        return this['http2_status'];
    }
    public withTlsVersion(tlsVersion: string): HttpPutBody {
        this['tls_version'] = tlsVersion;
        return this;
    }
    public set tlsVersion(tlsVersion: string | undefined) {
        this['tls_version'] = tlsVersion;
    }
    public get tlsVersion() {
        return this['tls_version'];
    }
    public withOcspStaplingStatus(ocspStaplingStatus: string): HttpPutBody {
        this['ocsp_stapling_status'] = ocspStaplingStatus;
        return this;
    }
    public set ocspStaplingStatus(ocspStaplingStatus: string | undefined) {
        this['ocsp_stapling_status'] = ocspStaplingStatus;
    }
    public get ocspStaplingStatus() {
        return this['ocsp_stapling_status'];
    }
}