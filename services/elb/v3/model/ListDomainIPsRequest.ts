

export class ListDomainIPsRequest {
    private 'loadbalancer_id'?: string;
    public marker?: string;
    public limit?: number;
    private 'page_reverse'?: boolean;
    private 'ip_address'?: Array<string>;
    public enable?: boolean;
    public type?: Array<string>;
    private 'domain_name'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): ListDomainIPsRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withMarker(marker: string): ListDomainIPsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListDomainIPsRequest {
        this['limit'] = limit;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListDomainIPsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withIpAddress(ipAddress: Array<string>): ListDomainIPsRequest {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: Array<string>  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): Array<string> | undefined {
        return this['ip_address'];
    }
    public withEnable(enable: boolean): ListDomainIPsRequest {
        this['enable'] = enable;
        return this;
    }
    public withType(type: Array<string>): ListDomainIPsRequest {
        this['type'] = type;
        return this;
    }
    public withDomainName(domainName: Array<string>): ListDomainIPsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: Array<string>  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): Array<string> | undefined {
        return this['domain_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListDomainIPsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
}