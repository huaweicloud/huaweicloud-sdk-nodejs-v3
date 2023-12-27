

export class HostBody {
    private 'domain_name'?: string;
    private 'enterprise_project_id'?: string;
    public vips?: Array<string>;
    private 'real_server_type'?: number;
    private 'port_http'?: Array<number>;
    private 'port_https'?: Array<number>;
    private 'real_server'?: string;
    public constructor(domainName?: string, enterpriseProjectId?: string, vips?: Array<string>, realServerType?: number, realServer?: string) { 
        this['domain_name'] = domainName;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['vips'] = vips;
        this['real_server_type'] = realServerType;
        this['real_server'] = realServer;
    }
    public withDomainName(domainName: string): HostBody {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): HostBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withVips(vips: Array<string>): HostBody {
        this['vips'] = vips;
        return this;
    }
    public withRealServerType(realServerType: number): HostBody {
        this['real_server_type'] = realServerType;
        return this;
    }
    public set realServerType(realServerType: number  | undefined) {
        this['real_server_type'] = realServerType;
    }
    public get realServerType(): number | undefined {
        return this['real_server_type'];
    }
    public withPortHttp(portHttp: Array<number>): HostBody {
        this['port_http'] = portHttp;
        return this;
    }
    public set portHttp(portHttp: Array<number>  | undefined) {
        this['port_http'] = portHttp;
    }
    public get portHttp(): Array<number> | undefined {
        return this['port_http'];
    }
    public withPortHttps(portHttps: Array<number>): HostBody {
        this['port_https'] = portHttps;
        return this;
    }
    public set portHttps(portHttps: Array<number>  | undefined) {
        this['port_https'] = portHttps;
    }
    public get portHttps(): Array<number> | undefined {
        return this['port_https'];
    }
    public withRealServer(realServer: string): HostBody {
        this['real_server'] = realServer;
        return this;
    }
    public set realServer(realServer: string  | undefined) {
        this['real_server'] = realServer;
    }
    public get realServer(): string | undefined {
        return this['real_server'];
    }
}