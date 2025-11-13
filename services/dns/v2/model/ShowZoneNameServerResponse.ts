
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowZoneNameServerResponse extends SdkResponse {
    private 'all_hw_dns'?: boolean;
    private 'include_hw_dns'?: boolean;
    private 'dns_servers'?: Array<string>;
    private 'expected_dns_servers'?: Array<string>;
    private 'domain_name'?: string;
    public constructor() { 
        super();
    }
    public withAllHwDns(allHwDns: boolean): ShowZoneNameServerResponse {
        this['all_hw_dns'] = allHwDns;
        return this;
    }
    public set allHwDns(allHwDns: boolean  | undefined) {
        this['all_hw_dns'] = allHwDns;
    }
    public get allHwDns(): boolean | undefined {
        return this['all_hw_dns'];
    }
    public withIncludeHwDns(includeHwDns: boolean): ShowZoneNameServerResponse {
        this['include_hw_dns'] = includeHwDns;
        return this;
    }
    public set includeHwDns(includeHwDns: boolean  | undefined) {
        this['include_hw_dns'] = includeHwDns;
    }
    public get includeHwDns(): boolean | undefined {
        return this['include_hw_dns'];
    }
    public withDnsServers(dnsServers: Array<string>): ShowZoneNameServerResponse {
        this['dns_servers'] = dnsServers;
        return this;
    }
    public set dnsServers(dnsServers: Array<string>  | undefined) {
        this['dns_servers'] = dnsServers;
    }
    public get dnsServers(): Array<string> | undefined {
        return this['dns_servers'];
    }
    public withExpectedDnsServers(expectedDnsServers: Array<string>): ShowZoneNameServerResponse {
        this['expected_dns_servers'] = expectedDnsServers;
        return this;
    }
    public set expectedDnsServers(expectedDnsServers: Array<string>  | undefined) {
        this['expected_dns_servers'] = expectedDnsServers;
    }
    public get expectedDnsServers(): Array<string> | undefined {
        return this['expected_dns_servers'];
    }
    public withDomainName(domainName: string): ShowZoneNameServerResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
}