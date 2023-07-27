
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateDomainV2Response extends SdkResponse {
    private 'url_domain'?: string;
    public id?: string;
    public status?: AssociateDomainV2ResponseStatusEnum | number;
    private 'min_ssl_version'?: string;
    private 'is_http_redirect_to_https'?: boolean;
    private 'verified_client_certificate_enabled'?: boolean;
    public constructor() { 
        super();
    }
    public withUrlDomain(urlDomain: string): AssociateDomainV2Response {
        this['url_domain'] = urlDomain;
        return this;
    }
    public set urlDomain(urlDomain: string  | undefined) {
        this['url_domain'] = urlDomain;
    }
    public get urlDomain(): string | undefined {
        return this['url_domain'];
    }
    public withId(id: string): AssociateDomainV2Response {
        this['id'] = id;
        return this;
    }
    public withStatus(status: AssociateDomainV2ResponseStatusEnum | number): AssociateDomainV2Response {
        this['status'] = status;
        return this;
    }
    public withMinSslVersion(minSslVersion: string): AssociateDomainV2Response {
        this['min_ssl_version'] = minSslVersion;
        return this;
    }
    public set minSslVersion(minSslVersion: string  | undefined) {
        this['min_ssl_version'] = minSslVersion;
    }
    public get minSslVersion(): string | undefined {
        return this['min_ssl_version'];
    }
    public withIsHttpRedirectToHttps(isHttpRedirectToHttps: boolean): AssociateDomainV2Response {
        this['is_http_redirect_to_https'] = isHttpRedirectToHttps;
        return this;
    }
    public set isHttpRedirectToHttps(isHttpRedirectToHttps: boolean  | undefined) {
        this['is_http_redirect_to_https'] = isHttpRedirectToHttps;
    }
    public get isHttpRedirectToHttps(): boolean | undefined {
        return this['is_http_redirect_to_https'];
    }
    public withVerifiedClientCertificateEnabled(verifiedClientCertificateEnabled: boolean): AssociateDomainV2Response {
        this['verified_client_certificate_enabled'] = verifiedClientCertificateEnabled;
        return this;
    }
    public set verifiedClientCertificateEnabled(verifiedClientCertificateEnabled: boolean  | undefined) {
        this['verified_client_certificate_enabled'] = verifiedClientCertificateEnabled;
    }
    public get verifiedClientCertificateEnabled(): boolean | undefined {
        return this['verified_client_certificate_enabled'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AssociateDomainV2ResponseStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
