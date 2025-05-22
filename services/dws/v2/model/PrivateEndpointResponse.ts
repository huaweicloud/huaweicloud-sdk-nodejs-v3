

export class PrivateEndpointResponse {
    public ip?: string;
    public port?: number;
    private 'domain_name'?: string;
    private 'domain_name_suffix'?: string;
    private 'zone_name'?: string;
    private 'domain_name_ttl'?: number;
    private 'domain_name_status'?: string;
    private 'elb_ip'?: string;
    private 'bind_manage_ip_status'?: number;
    public constructor() { 
    }
    public withIp(ip: string): PrivateEndpointResponse {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: number): PrivateEndpointResponse {
        this['port'] = port;
        return this;
    }
    public withDomainName(domainName: string): PrivateEndpointResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withDomainNameSuffix(domainNameSuffix: string): PrivateEndpointResponse {
        this['domain_name_suffix'] = domainNameSuffix;
        return this;
    }
    public set domainNameSuffix(domainNameSuffix: string  | undefined) {
        this['domain_name_suffix'] = domainNameSuffix;
    }
    public get domainNameSuffix(): string | undefined {
        return this['domain_name_suffix'];
    }
    public withZoneName(zoneName: string): PrivateEndpointResponse {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string  | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName(): string | undefined {
        return this['zone_name'];
    }
    public withDomainNameTtl(domainNameTtl: number): PrivateEndpointResponse {
        this['domain_name_ttl'] = domainNameTtl;
        return this;
    }
    public set domainNameTtl(domainNameTtl: number  | undefined) {
        this['domain_name_ttl'] = domainNameTtl;
    }
    public get domainNameTtl(): number | undefined {
        return this['domain_name_ttl'];
    }
    public withDomainNameStatus(domainNameStatus: string): PrivateEndpointResponse {
        this['domain_name_status'] = domainNameStatus;
        return this;
    }
    public set domainNameStatus(domainNameStatus: string  | undefined) {
        this['domain_name_status'] = domainNameStatus;
    }
    public get domainNameStatus(): string | undefined {
        return this['domain_name_status'];
    }
    public withElbIp(elbIp: string): PrivateEndpointResponse {
        this['elb_ip'] = elbIp;
        return this;
    }
    public set elbIp(elbIp: string  | undefined) {
        this['elb_ip'] = elbIp;
    }
    public get elbIp(): string | undefined {
        return this['elb_ip'];
    }
    public withBindManageIpStatus(bindManageIpStatus: number): PrivateEndpointResponse {
        this['bind_manage_ip_status'] = bindManageIpStatus;
        return this;
    }
    public set bindManageIpStatus(bindManageIpStatus: number  | undefined) {
        this['bind_manage_ip_status'] = bindManageIpStatus;
    }
    public get bindManageIpStatus(): number | undefined {
        return this['bind_manage_ip_status'];
    }
}