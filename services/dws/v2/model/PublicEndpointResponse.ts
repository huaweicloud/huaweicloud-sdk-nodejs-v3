

export class PublicEndpointResponse {
    public ip?: string;
    public port?: number;
    public enabled?: boolean;
    private 'ip_id'?: string;
    private 'ip_bandwidth'?: string;
    private 'domain_name'?: string;
    private 'domain_name_suffix'?: string;
    private 'zone_name'?: string;
    private 'domain_name_ttl'?: number;
    private 'domain_name_status'?: string;
    private 'ip_status'?: string;
    public constructor() { 
    }
    public withIp(ip: string): PublicEndpointResponse {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: number): PublicEndpointResponse {
        this['port'] = port;
        return this;
    }
    public withEnabled(enabled: boolean): PublicEndpointResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withIpId(ipId: string): PublicEndpointResponse {
        this['ip_id'] = ipId;
        return this;
    }
    public set ipId(ipId: string  | undefined) {
        this['ip_id'] = ipId;
    }
    public get ipId(): string | undefined {
        return this['ip_id'];
    }
    public withIpBandwidth(ipBandwidth: string): PublicEndpointResponse {
        this['ip_bandwidth'] = ipBandwidth;
        return this;
    }
    public set ipBandwidth(ipBandwidth: string  | undefined) {
        this['ip_bandwidth'] = ipBandwidth;
    }
    public get ipBandwidth(): string | undefined {
        return this['ip_bandwidth'];
    }
    public withDomainName(domainName: string): PublicEndpointResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withDomainNameSuffix(domainNameSuffix: string): PublicEndpointResponse {
        this['domain_name_suffix'] = domainNameSuffix;
        return this;
    }
    public set domainNameSuffix(domainNameSuffix: string  | undefined) {
        this['domain_name_suffix'] = domainNameSuffix;
    }
    public get domainNameSuffix(): string | undefined {
        return this['domain_name_suffix'];
    }
    public withZoneName(zoneName: string): PublicEndpointResponse {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string  | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName(): string | undefined {
        return this['zone_name'];
    }
    public withDomainNameTtl(domainNameTtl: number): PublicEndpointResponse {
        this['domain_name_ttl'] = domainNameTtl;
        return this;
    }
    public set domainNameTtl(domainNameTtl: number  | undefined) {
        this['domain_name_ttl'] = domainNameTtl;
    }
    public get domainNameTtl(): number | undefined {
        return this['domain_name_ttl'];
    }
    public withDomainNameStatus(domainNameStatus: string): PublicEndpointResponse {
        this['domain_name_status'] = domainNameStatus;
        return this;
    }
    public set domainNameStatus(domainNameStatus: string  | undefined) {
        this['domain_name_status'] = domainNameStatus;
    }
    public get domainNameStatus(): string | undefined {
        return this['domain_name_status'];
    }
    public withIpStatus(ipStatus: string): PublicEndpointResponse {
        this['ip_status'] = ipStatus;
        return this;
    }
    public set ipStatus(ipStatus: string  | undefined) {
        this['ip_status'] = ipStatus;
    }
    public get ipStatus(): string | undefined {
        return this['ip_status'];
    }
}