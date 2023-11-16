

export class DomainInfo {
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    public cname?: string;
    public protocol?: Array<string>;
    private 'real_server_type'?: number;
    private 'real_servers'?: string;
    private 'waf_status'?: number;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withDomainId(domainId: string): DomainInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): DomainInfo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withCname(cname: string): DomainInfo {
        this['cname'] = cname;
        return this;
    }
    public withProtocol(protocol: Array<string>): DomainInfo {
        this['protocol'] = protocol;
        return this;
    }
    public withRealServerType(realServerType: number): DomainInfo {
        this['real_server_type'] = realServerType;
        return this;
    }
    public set realServerType(realServerType: number  | undefined) {
        this['real_server_type'] = realServerType;
    }
    public get realServerType(): number | undefined {
        return this['real_server_type'];
    }
    public withRealServers(realServers: string): DomainInfo {
        this['real_servers'] = realServers;
        return this;
    }
    public set realServers(realServers: string  | undefined) {
        this['real_servers'] = realServers;
    }
    public get realServers(): string | undefined {
        return this['real_servers'];
    }
    public withWafStatus(wafStatus: number): DomainInfo {
        this['waf_status'] = wafStatus;
        return this;
    }
    public set wafStatus(wafStatus: number  | undefined) {
        this['waf_status'] = wafStatus;
    }
    public get wafStatus(): number | undefined {
        return this['waf_status'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DomainInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}