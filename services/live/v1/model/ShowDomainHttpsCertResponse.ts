
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainHttpsCertResponse extends SdkResponse {
    private 'certificate_format'?: ShowDomainHttpsCertResponseCertificateFormatEnum | undefined;
    public certificate?: string;
    private 'certificate_key'?: string | undefined;
    private 'force_redirect'?: boolean | undefined;
    public constructor() { 
        super();
    }
    public withCertificateFormat(certificateFormat: ShowDomainHttpsCertResponseCertificateFormatEnum): ShowDomainHttpsCertResponse {
        this['certificate_format'] = certificateFormat;
        return this;
    }
    public set certificateFormat(certificateFormat: ShowDomainHttpsCertResponseCertificateFormatEnum | undefined) {
        this['certificate_format'] = certificateFormat;
    }
    public get certificateFormat() {
        return this['certificate_format'];
    }
    public withCertificate(certificate: string): ShowDomainHttpsCertResponse {
        this['certificate'] = certificate;
        return this;
    }
    public withCertificateKey(certificateKey: string): ShowDomainHttpsCertResponse {
        this['certificate_key'] = certificateKey;
        return this;
    }
    public set certificateKey(certificateKey: string | undefined) {
        this['certificate_key'] = certificateKey;
    }
    public get certificateKey() {
        return this['certificate_key'];
    }
    public withForceRedirect(forceRedirect: boolean): ShowDomainHttpsCertResponse {
        this['force_redirect'] = forceRedirect;
        return this;
    }
    public set forceRedirect(forceRedirect: boolean | undefined) {
        this['force_redirect'] = forceRedirect;
    }
    public get forceRedirect() {
        return this['force_redirect'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDomainHttpsCertResponseCertificateFormatEnum {
    PEM = 'PEM'
}
