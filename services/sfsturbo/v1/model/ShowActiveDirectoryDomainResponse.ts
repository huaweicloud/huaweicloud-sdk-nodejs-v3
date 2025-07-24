
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowActiveDirectoryDomainResponse extends SdkResponse {
    private 'domain_name'?: string;
    private 'system_name'?: string;
    private 'dns_server'?: Array<string>;
    private 'organization_unit'?: string;
    private 'vpc_id'?: string;
    public status?: ShowActiveDirectoryDomainResponseStatusEnum | string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withDomainName(domainName: string): ShowActiveDirectoryDomainResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withSystemName(systemName: string): ShowActiveDirectoryDomainResponse {
        this['system_name'] = systemName;
        return this;
    }
    public set systemName(systemName: string  | undefined) {
        this['system_name'] = systemName;
    }
    public get systemName(): string | undefined {
        return this['system_name'];
    }
    public withDnsServer(dnsServer: Array<string>): ShowActiveDirectoryDomainResponse {
        this['dns_server'] = dnsServer;
        return this;
    }
    public set dnsServer(dnsServer: Array<string>  | undefined) {
        this['dns_server'] = dnsServer;
    }
    public get dnsServer(): Array<string> | undefined {
        return this['dns_server'];
    }
    public withOrganizationUnit(organizationUnit: string): ShowActiveDirectoryDomainResponse {
        this['organization_unit'] = organizationUnit;
        return this;
    }
    public set organizationUnit(organizationUnit: string  | undefined) {
        this['organization_unit'] = organizationUnit;
    }
    public get organizationUnit(): string | undefined {
        return this['organization_unit'];
    }
    public withVpcId(vpcId: string): ShowActiveDirectoryDomainResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withStatus(status: ShowActiveDirectoryDomainResponseStatusEnum | string): ShowActiveDirectoryDomainResponse {
        this['status'] = status;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowActiveDirectoryDomainResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowActiveDirectoryDomainResponseStatusEnum {
    JOINING = 'JOINING',
    AVAILABLE = 'AVAILABLE',
    EXITING = 'EXITING',
    FAILED = 'FAILED'
}
