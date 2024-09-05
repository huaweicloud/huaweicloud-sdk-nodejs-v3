import { GmCertificateInfo } from './GmCertificateInfo';
import { TlsCertificateInfo } from './TlsCertificateInfo';


export class DomainHttpsCertInfo {
    private 'certificate_format'?: DomainHttpsCertInfoCertificateFormatEnum | string;
    public certificate?: string;
    private 'certificate_key'?: string;
    private 'force_redirect'?: boolean;
    private 'gm_certificate'?: GmCertificateInfo;
    private 'tls_certificate'?: TlsCertificateInfo;
    public constructor() { 
    }
    public withCertificateFormat(certificateFormat: DomainHttpsCertInfoCertificateFormatEnum | string): DomainHttpsCertInfo {
        this['certificate_format'] = certificateFormat;
        return this;
    }
    public set certificateFormat(certificateFormat: DomainHttpsCertInfoCertificateFormatEnum | string  | undefined) {
        this['certificate_format'] = certificateFormat;
    }
    public get certificateFormat(): DomainHttpsCertInfoCertificateFormatEnum | string | undefined {
        return this['certificate_format'];
    }
    public withCertificate(certificate: string): DomainHttpsCertInfo {
        this['certificate'] = certificate;
        return this;
    }
    public withCertificateKey(certificateKey: string): DomainHttpsCertInfo {
        this['certificate_key'] = certificateKey;
        return this;
    }
    public set certificateKey(certificateKey: string  | undefined) {
        this['certificate_key'] = certificateKey;
    }
    public get certificateKey(): string | undefined {
        return this['certificate_key'];
    }
    public withForceRedirect(forceRedirect: boolean): DomainHttpsCertInfo {
        this['force_redirect'] = forceRedirect;
        return this;
    }
    public set forceRedirect(forceRedirect: boolean  | undefined) {
        this['force_redirect'] = forceRedirect;
    }
    public get forceRedirect(): boolean | undefined {
        return this['force_redirect'];
    }
    public withGmCertificate(gmCertificate: GmCertificateInfo): DomainHttpsCertInfo {
        this['gm_certificate'] = gmCertificate;
        return this;
    }
    public set gmCertificate(gmCertificate: GmCertificateInfo  | undefined) {
        this['gm_certificate'] = gmCertificate;
    }
    public get gmCertificate(): GmCertificateInfo | undefined {
        return this['gm_certificate'];
    }
    public withTlsCertificate(tlsCertificate: TlsCertificateInfo): DomainHttpsCertInfo {
        this['tls_certificate'] = tlsCertificate;
        return this;
    }
    public set tlsCertificate(tlsCertificate: TlsCertificateInfo  | undefined) {
        this['tls_certificate'] = tlsCertificate;
    }
    public get tlsCertificate(): TlsCertificateInfo | undefined {
        return this['tls_certificate'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DomainHttpsCertInfoCertificateFormatEnum {
    PEM = 'PEM'
}
