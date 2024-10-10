

export class InstanceDomainItem {
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    public cname?: string;
    private 'domain_status'?: string;
    private 'cc_status'?: number;
    private 'https_cert_status'?: number;
    private 'cert_name'?: string;
    private 'protocol_type'?: Array<string>;
    private 'real_server_type'?: number;
    private 'real_servers'?: string;
    private 'waf_status'?: number;
    public constructor() { 
    }
    public withDomainId(domainId: string): InstanceDomainItem {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): InstanceDomainItem {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withCname(cname: string): InstanceDomainItem {
        this['cname'] = cname;
        return this;
    }
    public withDomainStatus(domainStatus: string): InstanceDomainItem {
        this['domain_status'] = domainStatus;
        return this;
    }
    public set domainStatus(domainStatus: string  | undefined) {
        this['domain_status'] = domainStatus;
    }
    public get domainStatus(): string | undefined {
        return this['domain_status'];
    }
    public withCcStatus(ccStatus: number): InstanceDomainItem {
        this['cc_status'] = ccStatus;
        return this;
    }
    public set ccStatus(ccStatus: number  | undefined) {
        this['cc_status'] = ccStatus;
    }
    public get ccStatus(): number | undefined {
        return this['cc_status'];
    }
    public withHttpsCertStatus(httpsCertStatus: number): InstanceDomainItem {
        this['https_cert_status'] = httpsCertStatus;
        return this;
    }
    public set httpsCertStatus(httpsCertStatus: number  | undefined) {
        this['https_cert_status'] = httpsCertStatus;
    }
    public get httpsCertStatus(): number | undefined {
        return this['https_cert_status'];
    }
    public withCertName(certName: string): InstanceDomainItem {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withProtocolType(protocolType: Array<string>): InstanceDomainItem {
        this['protocol_type'] = protocolType;
        return this;
    }
    public set protocolType(protocolType: Array<string>  | undefined) {
        this['protocol_type'] = protocolType;
    }
    public get protocolType(): Array<string> | undefined {
        return this['protocol_type'];
    }
    public withRealServerType(realServerType: number): InstanceDomainItem {
        this['real_server_type'] = realServerType;
        return this;
    }
    public set realServerType(realServerType: number  | undefined) {
        this['real_server_type'] = realServerType;
    }
    public get realServerType(): number | undefined {
        return this['real_server_type'];
    }
    public withRealServers(realServers: string): InstanceDomainItem {
        this['real_servers'] = realServers;
        return this;
    }
    public set realServers(realServers: string  | undefined) {
        this['real_servers'] = realServers;
    }
    public get realServers(): string | undefined {
        return this['real_servers'];
    }
    public withWafStatus(wafStatus: number): InstanceDomainItem {
        this['waf_status'] = wafStatus;
        return this;
    }
    public set wafStatus(wafStatus: number  | undefined) {
        this['waf_status'] = wafStatus;
    }
    public get wafStatus(): number | undefined {
        return this['waf_status'];
    }
}