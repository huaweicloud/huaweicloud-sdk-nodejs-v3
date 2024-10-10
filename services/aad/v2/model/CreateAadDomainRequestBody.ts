

export class CreateAadDomainRequestBody {
    private 'domain_name'?: string;
    private 'enterprise_project_id'?: string;
    public ips?: Array<string>;
    private 'real_server_type'?: number;
    private 'port_http'?: Array<number>;
    private 'port_https'?: Array<number>;
    private 'real_server'?: string;
    private 'overseas_type'?: string;
    private 'cert_name'?: string;
    private 'waf_switch'?: string;
    public constructor(domainName?: string, enterpriseProjectId?: string, ips?: Array<string>, realServerType?: number, portHttp?: Array<number>, realServer?: string, overseasType?: string) { 
        this['domain_name'] = domainName;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['ips'] = ips;
        this['real_server_type'] = realServerType;
        this['port_http'] = portHttp;
        this['real_server'] = realServer;
        this['overseas_type'] = overseasType;
    }
    public withDomainName(domainName: string): CreateAadDomainRequestBody {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateAadDomainRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withIps(ips: Array<string>): CreateAadDomainRequestBody {
        this['ips'] = ips;
        return this;
    }
    public withRealServerType(realServerType: number): CreateAadDomainRequestBody {
        this['real_server_type'] = realServerType;
        return this;
    }
    public set realServerType(realServerType: number  | undefined) {
        this['real_server_type'] = realServerType;
    }
    public get realServerType(): number | undefined {
        return this['real_server_type'];
    }
    public withPortHttp(portHttp: Array<number>): CreateAadDomainRequestBody {
        this['port_http'] = portHttp;
        return this;
    }
    public set portHttp(portHttp: Array<number>  | undefined) {
        this['port_http'] = portHttp;
    }
    public get portHttp(): Array<number> | undefined {
        return this['port_http'];
    }
    public withPortHttps(portHttps: Array<number>): CreateAadDomainRequestBody {
        this['port_https'] = portHttps;
        return this;
    }
    public set portHttps(portHttps: Array<number>  | undefined) {
        this['port_https'] = portHttps;
    }
    public get portHttps(): Array<number> | undefined {
        return this['port_https'];
    }
    public withRealServer(realServer: string): CreateAadDomainRequestBody {
        this['real_server'] = realServer;
        return this;
    }
    public set realServer(realServer: string  | undefined) {
        this['real_server'] = realServer;
    }
    public get realServer(): string | undefined {
        return this['real_server'];
    }
    public withOverseasType(overseasType: string): CreateAadDomainRequestBody {
        this['overseas_type'] = overseasType;
        return this;
    }
    public set overseasType(overseasType: string  | undefined) {
        this['overseas_type'] = overseasType;
    }
    public get overseasType(): string | undefined {
        return this['overseas_type'];
    }
    public withCertName(certName: string): CreateAadDomainRequestBody {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withWafSwitch(wafSwitch: string): CreateAadDomainRequestBody {
        this['waf_switch'] = wafSwitch;
        return this;
    }
    public set wafSwitch(wafSwitch: string  | undefined) {
        this['waf_switch'] = wafSwitch;
    }
    public get wafSwitch(): string | undefined {
        return this['waf_switch'];
    }
}