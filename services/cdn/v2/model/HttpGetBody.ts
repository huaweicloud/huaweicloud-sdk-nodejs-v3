import { CertificatesGetBody } from './CertificatesGetBody';


export class HttpGetBody {
    private 'https_status'?: string;
    private 'certificate_type'?: string;
    private 'certificate_source'?: number;
    private 'certificate_name'?: string;
    private 'certificate_value'?: string;
    private 'expire_time'?: number;
    private 'enc_certificate_value'?: string;
    public certificates?: Array<CertificatesGetBody>;
    private 'http2_status'?: string;
    private 'tls_version'?: string;
    private 'ocsp_stapling_status'?: string;
    public constructor() { 
    }
    public withHttpsStatus(httpsStatus: string): HttpGetBody {
        this['https_status'] = httpsStatus;
        return this;
    }
    public set httpsStatus(httpsStatus: string  | undefined) {
        this['https_status'] = httpsStatus;
    }
    public get httpsStatus(): string | undefined {
        return this['https_status'];
    }
    public withCertificateType(certificateType: string): HttpGetBody {
        this['certificate_type'] = certificateType;
        return this;
    }
    public set certificateType(certificateType: string  | undefined) {
        this['certificate_type'] = certificateType;
    }
    public get certificateType(): string | undefined {
        return this['certificate_type'];
    }
    public withCertificateSource(certificateSource: number): HttpGetBody {
        this['certificate_source'] = certificateSource;
        return this;
    }
    public set certificateSource(certificateSource: number  | undefined) {
        this['certificate_source'] = certificateSource;
    }
    public get certificateSource(): number | undefined {
        return this['certificate_source'];
    }
    public withCertificateName(certificateName: string): HttpGetBody {
        this['certificate_name'] = certificateName;
        return this;
    }
    public set certificateName(certificateName: string  | undefined) {
        this['certificate_name'] = certificateName;
    }
    public get certificateName(): string | undefined {
        return this['certificate_name'];
    }
    public withCertificateValue(certificateValue: string): HttpGetBody {
        this['certificate_value'] = certificateValue;
        return this;
    }
    public set certificateValue(certificateValue: string  | undefined) {
        this['certificate_value'] = certificateValue;
    }
    public get certificateValue(): string | undefined {
        return this['certificate_value'];
    }
    public withExpireTime(expireTime: number): HttpGetBody {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withEncCertificateValue(encCertificateValue: string): HttpGetBody {
        this['enc_certificate_value'] = encCertificateValue;
        return this;
    }
    public set encCertificateValue(encCertificateValue: string  | undefined) {
        this['enc_certificate_value'] = encCertificateValue;
    }
    public get encCertificateValue(): string | undefined {
        return this['enc_certificate_value'];
    }
    public withCertificates(certificates: Array<CertificatesGetBody>): HttpGetBody {
        this['certificates'] = certificates;
        return this;
    }
    public withHttp2Status(http2Status: string): HttpGetBody {
        this['http2_status'] = http2Status;
        return this;
    }
    public set http2Status(http2Status: string  | undefined) {
        this['http2_status'] = http2Status;
    }
    public get http2Status(): string | undefined {
        return this['http2_status'];
    }
    public withTlsVersion(tlsVersion: string): HttpGetBody {
        this['tls_version'] = tlsVersion;
        return this;
    }
    public set tlsVersion(tlsVersion: string  | undefined) {
        this['tls_version'] = tlsVersion;
    }
    public get tlsVersion(): string | undefined {
        return this['tls_version'];
    }
    public withOcspStaplingStatus(ocspStaplingStatus: string): HttpGetBody {
        this['ocsp_stapling_status'] = ocspStaplingStatus;
        return this;
    }
    public set ocspStaplingStatus(ocspStaplingStatus: string  | undefined) {
        this['ocsp_stapling_status'] = ocspStaplingStatus;
    }
    public get ocspStaplingStatus(): string | undefined {
        return this['ocsp_stapling_status'];
    }
}