
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVerifyDomainOwnerInfoResponse extends SdkResponse {
    private 'dns_verify_type'?: string;
    private 'dns_verify_name'?: string;
    private 'file_verify_url'?: string;
    private 'domain_name'?: string;
    private 'verify_domain_name'?: string;
    private 'file_verify_filename'?: string;
    private 'verify_content'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withDnsVerifyType(dnsVerifyType: string): ShowVerifyDomainOwnerInfoResponse {
        this['dns_verify_type'] = dnsVerifyType;
        return this;
    }
    public set dnsVerifyType(dnsVerifyType: string  | undefined) {
        this['dns_verify_type'] = dnsVerifyType;
    }
    public get dnsVerifyType(): string | undefined {
        return this['dns_verify_type'];
    }
    public withDnsVerifyName(dnsVerifyName: string): ShowVerifyDomainOwnerInfoResponse {
        this['dns_verify_name'] = dnsVerifyName;
        return this;
    }
    public set dnsVerifyName(dnsVerifyName: string  | undefined) {
        this['dns_verify_name'] = dnsVerifyName;
    }
    public get dnsVerifyName(): string | undefined {
        return this['dns_verify_name'];
    }
    public withFileVerifyUrl(fileVerifyUrl: string): ShowVerifyDomainOwnerInfoResponse {
        this['file_verify_url'] = fileVerifyUrl;
        return this;
    }
    public set fileVerifyUrl(fileVerifyUrl: string  | undefined) {
        this['file_verify_url'] = fileVerifyUrl;
    }
    public get fileVerifyUrl(): string | undefined {
        return this['file_verify_url'];
    }
    public withDomainName(domainName: string): ShowVerifyDomainOwnerInfoResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withVerifyDomainName(verifyDomainName: string): ShowVerifyDomainOwnerInfoResponse {
        this['verify_domain_name'] = verifyDomainName;
        return this;
    }
    public set verifyDomainName(verifyDomainName: string  | undefined) {
        this['verify_domain_name'] = verifyDomainName;
    }
    public get verifyDomainName(): string | undefined {
        return this['verify_domain_name'];
    }
    public withFileVerifyFilename(fileVerifyFilename: string): ShowVerifyDomainOwnerInfoResponse {
        this['file_verify_filename'] = fileVerifyFilename;
        return this;
    }
    public set fileVerifyFilename(fileVerifyFilename: string  | undefined) {
        this['file_verify_filename'] = fileVerifyFilename;
    }
    public get fileVerifyFilename(): string | undefined {
        return this['file_verify_filename'];
    }
    public withVerifyContent(verifyContent: string): ShowVerifyDomainOwnerInfoResponse {
        this['verify_content'] = verifyContent;
        return this;
    }
    public set verifyContent(verifyContent: string  | undefined) {
        this['verify_content'] = verifyContent;
    }
    public get verifyContent(): string | undefined {
        return this['verify_content'];
    }
    public withXRequestId(xRequestId: string): ShowVerifyDomainOwnerInfoResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}