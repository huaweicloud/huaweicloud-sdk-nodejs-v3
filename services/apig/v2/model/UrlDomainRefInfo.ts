import { UrlDomainBaseInfo } from './UrlDomainBaseInfo';


export class UrlDomainRefInfo {
    private 'url_domain'?: string;
    public id?: string;
    public status?: UrlDomainRefInfoStatusEnum | number;
    private 'min_ssl_version'?: string;
    private 'is_http_redirect_to_https'?: boolean;
    private 'verified_client_certificate_enabled'?: boolean;
    private 'ssl_id'?: string;
    private 'ssl_name'?: string;
    private 'api_group_id'?: string;
    private 'api_group_name'?: string;
    private 'instance_id'?: string;
    public constructor(urlDomain?: string, id?: string, status?: number, minSslVersion?: string, apiGroupId?: string, apiGroupName?: string, instanceId?: string) { 
        this['url_domain'] = urlDomain;
        this['id'] = id;
        this['status'] = status;
        this['min_ssl_version'] = minSslVersion;
        this['api_group_id'] = apiGroupId;
        this['api_group_name'] = apiGroupName;
        this['instance_id'] = instanceId;
    }
    public withUrlDomain(urlDomain: string): UrlDomainRefInfo {
        this['url_domain'] = urlDomain;
        return this;
    }
    public set urlDomain(urlDomain: string  | undefined) {
        this['url_domain'] = urlDomain;
    }
    public get urlDomain(): string | undefined {
        return this['url_domain'];
    }
    public withId(id: string): UrlDomainRefInfo {
        this['id'] = id;
        return this;
    }
    public withStatus(status: UrlDomainRefInfoStatusEnum | number): UrlDomainRefInfo {
        this['status'] = status;
        return this;
    }
    public withMinSslVersion(minSslVersion: string): UrlDomainRefInfo {
        this['min_ssl_version'] = minSslVersion;
        return this;
    }
    public set minSslVersion(minSslVersion: string  | undefined) {
        this['min_ssl_version'] = minSslVersion;
    }
    public get minSslVersion(): string | undefined {
        return this['min_ssl_version'];
    }
    public withIsHttpRedirectToHttps(isHttpRedirectToHttps: boolean): UrlDomainRefInfo {
        this['is_http_redirect_to_https'] = isHttpRedirectToHttps;
        return this;
    }
    public set isHttpRedirectToHttps(isHttpRedirectToHttps: boolean  | undefined) {
        this['is_http_redirect_to_https'] = isHttpRedirectToHttps;
    }
    public get isHttpRedirectToHttps(): boolean | undefined {
        return this['is_http_redirect_to_https'];
    }
    public withVerifiedClientCertificateEnabled(verifiedClientCertificateEnabled: boolean): UrlDomainRefInfo {
        this['verified_client_certificate_enabled'] = verifiedClientCertificateEnabled;
        return this;
    }
    public set verifiedClientCertificateEnabled(verifiedClientCertificateEnabled: boolean  | undefined) {
        this['verified_client_certificate_enabled'] = verifiedClientCertificateEnabled;
    }
    public get verifiedClientCertificateEnabled(): boolean | undefined {
        return this['verified_client_certificate_enabled'];
    }
    public withSslId(sslId: string): UrlDomainRefInfo {
        this['ssl_id'] = sslId;
        return this;
    }
    public set sslId(sslId: string  | undefined) {
        this['ssl_id'] = sslId;
    }
    public get sslId(): string | undefined {
        return this['ssl_id'];
    }
    public withSslName(sslName: string): UrlDomainRefInfo {
        this['ssl_name'] = sslName;
        return this;
    }
    public set sslName(sslName: string  | undefined) {
        this['ssl_name'] = sslName;
    }
    public get sslName(): string | undefined {
        return this['ssl_name'];
    }
    public withApiGroupId(apiGroupId: string): UrlDomainRefInfo {
        this['api_group_id'] = apiGroupId;
        return this;
    }
    public set apiGroupId(apiGroupId: string  | undefined) {
        this['api_group_id'] = apiGroupId;
    }
    public get apiGroupId(): string | undefined {
        return this['api_group_id'];
    }
    public withApiGroupName(apiGroupName: string): UrlDomainRefInfo {
        this['api_group_name'] = apiGroupName;
        return this;
    }
    public set apiGroupName(apiGroupName: string  | undefined) {
        this['api_group_name'] = apiGroupName;
    }
    public get apiGroupName(): string | undefined {
        return this['api_group_name'];
    }
    public withInstanceId(instanceId: string): UrlDomainRefInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UrlDomainRefInfoStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
