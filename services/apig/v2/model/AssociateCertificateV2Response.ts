import { UrlDomainBaseInfo } from './UrlDomainBaseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateCertificateV2Response extends SdkResponse {
    private 'url_domain'?: string;
    public id?: string;
    public status?: AssociateCertificateV2ResponseStatusEnum | number;
    private 'min_ssl_version'?: string;
    private 'is_http_redirect_to_https'?: boolean;
    private 'verified_client_certificate_enabled'?: boolean;
    private 'ssl_name'?: string;
    private 'ssl_id'?: string;
    public constructor(urlDomain?: string, id?: string, status?: number, minSslVersion?: string, sslName?: string, sslId?: string) { 
        super();
        this['url_domain'] = urlDomain;
        this['id'] = id;
        this['status'] = status;
        this['min_ssl_version'] = minSslVersion;
        this['ssl_name'] = sslName;
        this['ssl_id'] = sslId;
    }
    public withUrlDomain(urlDomain: string): AssociateCertificateV2Response {
        this['url_domain'] = urlDomain;
        return this;
    }
    public set urlDomain(urlDomain: string  | undefined) {
        this['url_domain'] = urlDomain;
    }
    public get urlDomain(): string | undefined {
        return this['url_domain'];
    }
    public withId(id: string): AssociateCertificateV2Response {
        this['id'] = id;
        return this;
    }
    public withStatus(status: AssociateCertificateV2ResponseStatusEnum | number): AssociateCertificateV2Response {
        this['status'] = status;
        return this;
    }
    public withMinSslVersion(minSslVersion: string): AssociateCertificateV2Response {
        this['min_ssl_version'] = minSslVersion;
        return this;
    }
    public set minSslVersion(minSslVersion: string  | undefined) {
        this['min_ssl_version'] = minSslVersion;
    }
    public get minSslVersion(): string | undefined {
        return this['min_ssl_version'];
    }
    public withIsHttpRedirectToHttps(isHttpRedirectToHttps: boolean): AssociateCertificateV2Response {
        this['is_http_redirect_to_https'] = isHttpRedirectToHttps;
        return this;
    }
    public set isHttpRedirectToHttps(isHttpRedirectToHttps: boolean  | undefined) {
        this['is_http_redirect_to_https'] = isHttpRedirectToHttps;
    }
    public get isHttpRedirectToHttps(): boolean | undefined {
        return this['is_http_redirect_to_https'];
    }
    public withVerifiedClientCertificateEnabled(verifiedClientCertificateEnabled: boolean): AssociateCertificateV2Response {
        this['verified_client_certificate_enabled'] = verifiedClientCertificateEnabled;
        return this;
    }
    public set verifiedClientCertificateEnabled(verifiedClientCertificateEnabled: boolean  | undefined) {
        this['verified_client_certificate_enabled'] = verifiedClientCertificateEnabled;
    }
    public get verifiedClientCertificateEnabled(): boolean | undefined {
        return this['verified_client_certificate_enabled'];
    }
    public withSslName(sslName: string): AssociateCertificateV2Response {
        this['ssl_name'] = sslName;
        return this;
    }
    public set sslName(sslName: string  | undefined) {
        this['ssl_name'] = sslName;
    }
    public get sslName(): string | undefined {
        return this['ssl_name'];
    }
    public withSslId(sslId: string): AssociateCertificateV2Response {
        this['ssl_id'] = sslId;
        return this;
    }
    public set sslId(sslId: string  | undefined) {
        this['ssl_id'] = sslId;
    }
    public get sslId(): string | undefined {
        return this['ssl_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AssociateCertificateV2ResponseStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
